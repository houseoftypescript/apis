import { gql } from 'apollo-server-core';

const typeDefs = gql`
  extend type Query {
    countries: [Country]
  }

  type Country {
    tld: [String]
  }
`;

export default typeDefs;
