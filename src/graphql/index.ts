import { mergeResolvers } from '@graphql-tools/merge';
import { gql } from 'apollo-server-core';
import countriesTypeDefs from './countries/countries.graphql';
import countriesResolvers from './countries/countries.resolver';

const rootTypeDefs = gql`
  type Query {
    health: String
  }
`;

const rootResolvers = {
  Query: {
    health: () => 'healthy',
  },
};

export const typeDefs = [rootTypeDefs, countriesTypeDefs];

export const resolvers = mergeResolvers([rootResolvers, countriesResolvers]);
