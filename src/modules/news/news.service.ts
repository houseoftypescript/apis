import { NewsSource, Prisma } from '@prisma/client';
import prismaClient from '../../common/clients/prisma';
import environments from '../../common/environments';
import { get } from '../../common/libs/axios';
import logger from '../../common/libs/logger';
import { SyncResponse } from '../../common/models';
import {
  Article,
  ArticlesResponse,
  GoogleTrendsByCountry,
  SourcesResponse,
} from './news.types';

const NEWS_BASE_URL = 'https://newsapi.org/v2';

export const getHeadlines = async (): Promise<Article[]> => {
  const url = `${NEWS_BASE_URL}/top-headlines?apiKey=${environments.apiKey.news}`;
  const data = await get<ArticlesResponse>(url);
  if (data.status !== 'ok') throw new Error('NEWS API ERROR');
  return data.articles;
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
    const url = `${NEWS_BASE_URL}/sources?apiKey=${environments.apiKey.news}`;
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

export const getGoogleTrends = async (): Promise<GoogleTrendsByCountry[]> => {
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
    .sort((a, b) => (a.country > b.country ? 1 : -1));
};
