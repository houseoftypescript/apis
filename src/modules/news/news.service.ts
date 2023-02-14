import { NewsSource, Prisma } from '@prisma/client';
import prismaClient from '../../common/clients/prisma';
import environments from '../../common/environments';
import { get } from '../../common/libs/axios';
import logger from '../../common/libs/logger';
import { SyncResponse } from '../../common/models';
import {
  Article,
  ArticlesResponse,
  Category,
  GoogleTrendsByCountry,
  Language,
  SearchIn,
  SortBy,
  SourcesResponse,
} from './news.types';
import redisClient from '../../common/clients/redis';

const NEWS_BASE_URL = 'https://newsapi.org/v2';

export const getNews = async (
  {
    query = '',
    searchIn = '',
    sources = [],
    domains = [],
    excludeDomains = [],
    from = '',
    to = '',
    language = '',
    sortBy = 'publishedAt',
    pageSize = 100,
    page = 1,
  }: {
    query?: string;
    searchIn?: SearchIn;
    sources?: string[];
    domains?: string[];
    excludeDomains?: string[];
    from?: string;
    to?: string;
    language?: Language;
    sortBy?: SortBy;
    pageSize?: number;
    page?: number;
  } = {
    query: '',
    searchIn: '',
    sources: [],
    domains: [],
    excludeDomains: [],
    from: '',
    to: '',
    language: '',
    sortBy: 'publishedAt',
    pageSize: 100,
    page: 1,
  }
): Promise<Article[]> => {
  // Query Params
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('apiKey', environments.apiKey.news);
  urlSearchParams.set('sortBy', sortBy);
  urlSearchParams.set('page', page.toString());
  urlSearchParams.set('pageSize', pageSize.toString());
  if (query !== '') urlSearchParams.set('q', query);
  if (searchIn !== '') urlSearchParams.set('searchIn', searchIn);
  if (sources.length !== 0) urlSearchParams.set('sources', sources.join(','));
  if (domains.length !== 0) urlSearchParams.set('domains', domains.join(','));
  if (excludeDomains.length !== 0)
    urlSearchParams.set('excludeDomains', excludeDomains.join(','));
  if (from !== '') urlSearchParams.set('from', from);
  if (to !== '') urlSearchParams.set('to', to);
  if (language !== '') urlSearchParams.set('language', language);
  // Fetch Data
  const url = `${NEWS_BASE_URL}/everything?${urlSearchParams.toString()}`;
  const data = await get<ArticlesResponse>(url);
  if (data.status !== 'ok') throw new Error('NEWS API ERROR');
  return data.articles;
};

export const getHeadlines = async (
  {
    query = '',
    category = '',
    country = '',
    sources = [],
    page = 1,
    pageSize = 100,
  }: {
    query?: string;
    category?: Category;
    country?: string;
    sources?: string[];
    page?: number;
    pageSize?: number;
  } = {
    query: '',
    category: '',
    country: '',
    sources: [],
    page: 1,
    pageSize: 100,
  }
): Promise<Article[]> => {
  try {
    // Connect to Redis
    let key = 'news-headlines';
    if (category !== '') key += `-${category}`;
    if (country !== '') key += `-${country}`;
    if (page !== 0) key += `-${page}`;
    logger.info(`getHeadlines key ${key}`);
    await redisClient.connect();
    // Fetch from Cache
    let cacheArticles = await redisClient.get<Article[]>(key);
    if (cacheArticles !== null) {
      cacheArticles = cacheArticles.slice(0, pageSize);
      return cacheArticles;
    }
    // Fetch Data
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('apiKey', environments.apiKey.news);
    urlSearchParams.set('page', page.toString());
    urlSearchParams.set('pageSize', pageSize.toString());
    if (query !== '') urlSearchParams.set('q', query);
    if (country !== '') urlSearchParams.set('country', country);
    if (category !== '') urlSearchParams.set('category', category);
    if (sources.length !== 0) urlSearchParams.set('sources', sources.join(','));
    const url = `${NEWS_BASE_URL}/top-headlines?${urlSearchParams.toString()}`;
    logger.info(`url ${url}`);
    const data = await get<ArticlesResponse>(url);
    if (data.status !== 'ok') throw new Error('NEWS API ERROR');
    // Set to Cache
    const { articles = [] } = data;
    await redisClient.set<Article[]>(key, articles, { EX: 60 * 60 });
    return articles;
  } catch (error) {
    logger.error(`getHeadlines Error ${error}`);
    throw new Error('Error');
  } finally {
    await redisClient.disconnect();
  }
};

export const getSources = async (): Promise<NewsSource[]> => {
  try {
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Fetch Data
    const sources: NewsSource[] = await prismaClient.newsSource.findMany();
    return sources;
  } catch (error) {
    logger.error(`getSources Error: ${error}`);
    return [];
  } finally {
    // Disconnect from PostgreSQL
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};

export const syncSources = async (): Promise<SyncResponse> => {
  try {
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Get Sources from News API
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('apiKey', environments.apiKey.news);
    const url = `${NEWS_BASE_URL}/sources?${urlSearchParams.toString()}`;
    const data = await get<SourcesResponse>(url);
    if (data.status !== 'ok') throw new Error('NEWS API ERROR');
    const { sources = [] } = data;
    // Sync Data
    const batchPayload: Prisma.BatchPayload =
      await prismaClient.newsSource.createMany({
        data: sources,
        skipDuplicates: true,
      });
    logger.info(`Sync News Sources to PostgreSQL: ${batchPayload}`);
    return { status: 'ok', count: batchPayload.count };
  } catch (error) {
    logger.info(`Sync News Sources Error: ${error}`);
    return { status: 'error', count: 0 };
  } finally {
    // Disconnect from PostgreSQL
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};

export const getGoogleTrends = async (
  country: string
): Promise<GoogleTrendsByCountry[]> => {
  const url =
    'https://trends.google.com/trends/hottrends/visualize/internal/data';
  const data = await get<Record<string, string[]>>(url);
  const keys: string[] = Object.keys(data);
  return keys
    .map((key) => {
      const country = key.split('_').join(' ');
      const trends = (data[key] || []).sort();
      return { country, trends };
    })
    .filter(({ country: c }) => (country === '' ? true : c === country))
    .sort((a, b) => (a.country > b.country ? 1 : -1));
};

export const getGoogleTrendsCoutries = async (): Promise<string[]> => {
  const url =
    'https://trends.google.com/trends/hottrends/visualize/internal/data';
  const data = await get<Record<string, string[]>>(url);
  const keys: string[] = Object.keys(data);
  return keys.map((key) => key.split('_').join(' ')).sort();
};
