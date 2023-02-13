import { getCountries } from './countries.service';

const resolvers = {
  Query: {
    countries: async () => {
      return getCountries();
    },
  },
};

export default resolvers;
