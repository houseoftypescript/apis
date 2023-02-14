import { getCurrentWeather } from '../../common/clients/apis/open-weather-map';
import {
  Lang,
  WeatherResponse,
} from '../../common/clients/apis/open-weather-map/types';
import redisClient from '../../common/clients/redis';
import logger from '../../common/libs/logger';
import { Weather } from './weather.types';

export const getWeather = async ({
  query,
  lang = 'en',
}: {
  lang: Lang;
  query: string;
}): Promise<Weather> => {
  try {
    const key = `weather-${query.replaceAll(' ', '-')}-${lang}`;
    // Connect Redis
    await redisClient.connect();
    logger.info(`Redis is connected - ${key}`);
    // Fetch Data from Cache
    const cacheWeather = await redisClient.get<Weather>(key);
    if (cacheWeather !== null) {
      logger.info('Get Weather from Redis');
      return cacheWeather;
    }
    // Fetch Data from API
    const currentWeather: WeatherResponse = await getCurrentWeather({
      query,
      lang,
    });
    logger.info('Get Weather from API');
    const name: string = currentWeather.name || '';
    const country: string = currentWeather.sys.country || '';
    const temperature: number = currentWeather.main.temp || 0;
    const maxTemperature: number = currentWeather.main.temp_max || 0;
    const minTemperature: number = currentWeather.main.temp_min || 0;
    const main: string = currentWeather.weather[0].main || '';
    const description: string = currentWeather.weather[0].description || '';
    const weather: Weather = {
      name,
      country,
      temperature,
      maxTemperature,
      minTemperature,
      main,
      description,
    };
    // Set Data to Redis
    await redisClient.set<Weather>(key, weather, { EX: 60 * 30 });
    return weather;
  } catch (error) {
    logger.error(`getWeather Error: ${error}`);
    throw new Error('getWeather Error');
  } finally {
    logger.info('Redis is disconnected');
    await redisClient.disconnect();
  }
};

export const getAirQuality = async (): Promise<void> => {
  return;
};
