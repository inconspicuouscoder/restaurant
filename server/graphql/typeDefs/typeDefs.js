import { gql } from "graphql-tag";

// Define GraphQL schema
export const typeDefs = gql`
  type MenuItem {
    name: String
    description: String
    price: Float
    half_price: Float
    full_price: Float
  }

  type Sandwiches {
    cold: [MenuItem]
    hot: [MenuItem]
  }

  type SoupSalads {
    soups: [MenuItem]
    combos: [MenuItem]
  }

  type Fajitas {
    name: String
    description: String
    price: Float
    sides: [String]
  }

  type Tacos {
    name: String
    description: String
    price: Float
    sides: [String]
  }

  type Enchiladas {
    uno: [MenuItem]
    dos: [MenuItem]
    tres: [MenuItem]
    specials: [MenuItem]
  }

  type Quiche {
    name: String
    options: [String]
    price: Float
    includes: [String]
  }

  type Query {
    appetizers: [MenuItem]
    entrees: [MenuItem]
    sandwiches: Sandwiches
    soupSalads: SoupSalads
    fajitas: [Fajitas]
    tacos: [Tacos]
    enchiladas: Enchiladas
    quiche: [Quiche]
    salads: [MenuItem]
  }
`;
