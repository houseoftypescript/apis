import { getCountries as getRestCountries } from '../../common/clients/apis/rest-countries';
import { Country } from '../../common/clients/apis/rest-countries/types';

export const getCountries = async (): Promise<Country[]> => {
  const restCountries = await getRestCountries();
  return restCountries;
};
