import { get } from '../../../libs/axios';
import { Country } from './types';

export const getCountries = async (): Promise<Country[]> => {
  const countries = get<Country[]>('https://restcountries.com/v3.1/all');
  return countries;
};
