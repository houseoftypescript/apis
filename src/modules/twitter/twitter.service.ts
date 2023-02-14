import redisClient from '../../common/clients/redis';
import { get } from '../../common/libs/axios';
import logger from '../../common/libs/logger';
import { Place, Trend, TrendsResponse } from './twitter.types';

const BASE_URL = 'https://api.twitter.com/1.1';

export const getTrends = async (id = 1): Promise<Trend[]> => {
  try {
    // Connect to Redis
    const key = `twitter-trends-${id}`;
    logger.info(`getTrends key ${key}`);
    await redisClient.connect();
    // Fetch from Cache
    const cacheTrends = await redisClient.get<Trend[]>(key);
    if (cacheTrends !== null) {
      return cacheTrends;
    }
    // Fetch from API
    const url = `${BASE_URL}/trends/place.json?id=${id}`;
    const trendsResponse = await get<TrendsResponse>(url);
    const trends: Trend[] = trendsResponse[0].trends || [];
    await redisClient.set<Trend[]>(key, trends, { EX: 60 * 60 });
    return trends;
  } catch (error) {
    logger.error(`getTrends Error ${error}`);
    throw new Error('Error');
  } finally {
    await redisClient.disconnect();
  }
};

export const getPlaces = async (): Promise<Place[]> => {
  try {
    // Connect to Redis
    const key = 'twitter-places';
    logger.info(`getHeadlines key ${key}`);
    await redisClient.connect();
    // Fetch from Cache
    const cachePlaces = await redisClient.get<Place[]>(key);
    if (cachePlaces !== null) {
      return cachePlaces;
    }
    // Fetch from API
    const url = `${BASE_URL}/trends/available.json`;
    const places = await get<Place[]>(url);
    await redisClient.set<Place[]>(key, places, { EX: 60 * 60 });
    return places;
  } catch (error) {
    logger.error(`getPlaces Error ${error}`);
    throw new Error('Error');
  } finally {
    await redisClient.disconnect();
  }
};
