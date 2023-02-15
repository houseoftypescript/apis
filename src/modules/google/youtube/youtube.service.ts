import redisClient from '../../../common/clients/redis';
import environments from '../../../common/environments';
import { get } from '../../../common/libs/axios';
import logger from '../../../common/libs/logger';
import {
  YouTubeCategory,
  YouTubeResponse,
  YouTubeVideo,
} from './youtube.types';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const getTrending = async ({
  regionCode = 'us',
  videoCategoryId = 0,
}): Promise<YouTubeVideo[]> => {
  try {
    // Connect to Redis
    const key = `youtube-trending-${regionCode}-${videoCategoryId}`;
    logger.info(`getTrending key ${key}`);
    await redisClient.connect();
    logger.info('Redis is Connected');
    // Fetch from Cache
    // const cacheVideos = await redisClient.get<YouTubeVideo[]>(key);
    // if (cacheVideos !== null) {
    //   logger.info('getTrending from Cache');
    //   return cacheVideos;
    // }
    // Fetch from API
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('key', environments.apiKey.youTube);
    urlSearchParams.set('part', 'snippet');
    urlSearchParams.set('chart', 'mostPopular');
    urlSearchParams.set('maxResults', '50');
    urlSearchParams.set('regionCode', regionCode);
    urlSearchParams.set('videoCategoryId', videoCategoryId.toString());
    const url = `${BASE_URL}/videos?${urlSearchParams.toString()}`;
    const response = await get<YouTubeResponse>(url);
    logger.info('getTrending from API');
    const videos = response.items as YouTubeVideo[];
    logger.info(`getTrending ${videos.length}`);
    await redisClient.set<YouTubeVideo[]>(key, videos, { EX: 60 * 60 });
    return videos;
  } catch (error) {
    logger.error(`getTrending Error: ${error}`);
    throw new Error('getTrending Error');
  } finally {
    await redisClient.disconnect();
    logger.info('Redis is Disconnected');
  }
};

export const getCategories = async (
  regionCode = 'us'
): Promise<YouTubeCategory[]> => {
  try {
    // Connect to Redis
    const key = `youtube-categories-${regionCode}`;
    logger.info(`getCategories key ${key}`);
    await redisClient.connect();
    logger.info('Redis is Connected');
    // Fetch Data from Cache
    // const cacheCategories = await redisClient.get<YouTubeCategory[]>(key);
    // if (cacheCategories !== null) {
    //   logger.info('getCategories from Cache');
    //   return cacheCategories;
    // }
    // Fetch from API
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('key', environments.apiKey.youTube);
    urlSearchParams.set('part', 'snippet');
    urlSearchParams.set('regionCode', regionCode);
    const url = `${BASE_URL}/videoCategories?${urlSearchParams.toString()}`;
    const response = await get<YouTubeResponse>(url);
    logger.info('getCategories from API');
    const categories = response.items as YouTubeCategory[];
    logger.info(`getCategories ${categories.length}`);
    await redisClient.set<YouTubeCategory[]>(key, categories, { EX: 60 * 60 });
    return categories;
  } catch (error) {
    logger.error(`getCategories Error: ${error}`);
    throw new Error('getCategories Error');
  } finally {
    await redisClient.disconnect();
    logger.info('Redis is Disconnected');
  }
};
