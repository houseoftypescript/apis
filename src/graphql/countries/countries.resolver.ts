import { Country } from '../../common/clients/apis/rest-countries/types';
import { getCountries, getCountry } from './countries.service';

const resolvers = {
  Query: {
    countries: async (): Promise<Country[]> => {
      return getCountries();
    },
    country: async (
      _: unknown,
      { code }: { code: string }
    ): Promise<Country> => {
      return getCountry(code);
    },
  },
};

export default resolvers;
