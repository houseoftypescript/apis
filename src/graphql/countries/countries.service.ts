import { Country } from '../../common/clients/apis/rest-countries/types';
import { get } from '../../common/libs/axios';
import { BASE_URL } from '../configs';

export const getCountries = async (): Promise<Country[]> => {
  const countries = await get<Country[]>(`${BASE_URL}/countries`);
  return countries;
};

export const getCountry = async (code: string): Promise<Country> => {
  const countries = await get<Country[]>(`${BASE_URL}/countries`);
  const country: Country | null =
    countries.find(
      (country) =>
        country.cca2.toLowerCase() === code.toLowerCase() ||
        country.cca3.toLowerCase() === code.toLowerCase()
    ) || ({} as Country);
  return country;
};
