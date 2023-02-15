import { getCountries as getRestCountries } from '../../common/clients/apis/rest-countries';
import { Country } from '../../common/clients/apis/rest-countries/types';
import redisClient from '../../common/clients/redis';
import logger from '../../common/libs/logger';
import { CountryCodes, CountryRegions } from './countries.types';

export const getCountries = async (): Promise<Country[]> => {
  try {
    // Connect to Redis
    const key = `countries`;
    logger.info(`getCountries key ${key}`);
    await redisClient.connect();
    logger.info('getCountries - Redis is Connected');
    // Fetch from Cache
    const cacheCountries = await redisClient.get<Country[]>(key);
    if (cacheCountries !== null) {
      logger.info('getCountries from Cache');
      return cacheCountries;
    }
    // Fetch from API
    const restCountries = await getRestCountries();
    logger.info('getCountries from API');
    await redisClient.set<Country[]>(key, restCountries, { EX: 60 * 60 });
    return restCountries;
  } catch (error) {
    logger.error(`getTrending Error: ${error}`);
    throw new Error('getTrending Error');
  } finally {
    await redisClient.disconnect();
    logger.info('getCountries - Redis is Disconnected');
  }
};

export const getCountryCodes = async (): Promise<CountryCodes[]> => {
  const countries = await getCountries();
  return countries
    .map((country) => {
      return {
        name: country.name.common,
        official: country.name.official,
        cca2: country.cca2,
        cca3: country.cca3,
      };
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1));
};

export const getCountriesRegions = async (): Promise<CountryRegions[]> => {
  const countries: Country[] = await getCountries();
  return countries
    .map((country) => {
      return {
        name: country.name.common,
        official: country.name.official,
        region: country.region,
        subregion: country.subregion || '',
      };
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1));
};
