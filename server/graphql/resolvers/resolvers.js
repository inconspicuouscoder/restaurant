import menu from "../../menu.js";

// Define resolvers for the GraphQL schema
export const resolvers = {
  Query: {
    appetizers: () => menu.appetizers,
    entrees: () => menu.entrees,
    sandwiches: () => ({
      cold: menu.sandwiches.cold,
      hot: menu.sandwiches.hot
    }),
    soupSalads: () => menu.soupSalads,
    fajitas: () => menu.fajitas,
    tacos: () => menu.tacos,
    enchiladas: () => menu.enchiladas,
    quiche: () => menu.quiche,
    salads: () => menu.salads,
  },
};
