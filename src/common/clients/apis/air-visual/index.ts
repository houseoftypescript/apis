import environments from '../../../environments';
import { get } from '../../../libs/axios';
import {
  AirQualityResponse,
  CitiesResponse,
  CountriesResponse,
  StatesResponse,
} from './types';

const BASE_URL = 'http://api.airvisual.com/v2';

export const getCountries = async (): Promise<CountriesResponse> => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('key', environments.apiKey.airVisual);
  const url = `${BASE_URL}/countries?${urlSearchParams.toString()}`;
  return get<CountriesResponse>(url);
};

export const getStates = async (country: string): Promise<StatesResponse> => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('country', country);
  urlSearchParams.set('key', environments.apiKey.airVisual);
  const url = `${BASE_URL}/states?${urlSearchParams.toString()}`;
  return get<StatesResponse>(url);
};

export const getCities = async (
  country: string,
  state: string
): Promise<CitiesResponse> => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('country', country);
  urlSearchParams.set('state', state);
  urlSearchParams.set('key', environments.apiKey.airVisual);
  const url = `${BASE_URL}/cities?${urlSearchParams.toString()}`;
  return get<CitiesResponse>(url);
};

export const getAirQuality = async (
  country: string,
  state: string,
  city: string
): Promise<AirQualityResponse> => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('country', country);
  urlSearchParams.set('state', state);
  urlSearchParams.set('city', city);
  urlSearchParams.set('key', environments.apiKey.airVisual);
  const url = `${BASE_URL}/city?${urlSearchParams.toString()}`;
  return get<AirQualityResponse>(url);
};
