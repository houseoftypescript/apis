import environments from '../../../environments';
import { get } from '../../../libs/axios';
import { Lang, WeatherResponse } from './types';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async ({
  lang,
  query,
}: {
  lang: Lang;
  query: string;
}): Promise<WeatherResponse> => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('q', query);
  urlSearchParams.set('lang', lang);
  urlSearchParams.set('units', 'metric');
  urlSearchParams.set('appid', environments.apiKey.openWeatherMap);
  const url = `${BASE_URL}/weather?${urlSearchParams.toString()}`;
  return get<WeatherResponse>(url);
};
