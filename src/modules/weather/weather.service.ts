import { getCurrentWeather } from '../../common/clients/apis/open-weather-map';
import { WeatherResponse } from '../../common/clients/apis/open-weather-map/types';
import { Weather } from './weather.types';

export const getWeather = async (query: string): Promise<Weather> => {
  const currentWeather: WeatherResponse = await getCurrentWeather(query);
  const name: string = currentWeather.name || '';
  const temperature: number = currentWeather.main.temp || 0;
  const maxTemperature: number = currentWeather.main.temp_max || 0;
  const minTemperature: number = currentWeather.main.temp_min || 0;
  const main: string = currentWeather.weather[0].main || '';
  const description: string = currentWeather.weather[0].description || '';
  return {
    name,
    temperature,
    maxTemperature,
    minTemperature,
    main,
    description,
  };
};

export const getAirQuality = async (): Promise<void> => {
  return;
};
