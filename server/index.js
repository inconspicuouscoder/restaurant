import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors"; // Import cors
import { schema } from "./graphql/schema.js"; // Import schema

// Create Express server
const app = express();

// Enable CORS for all routes
app.use(cors()); // This will allow all origins. You can configure it to restrict if needed.

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true, // Enables GraphQL Playground
  })
);

// Start Server
app.listen(4000, () => {
  console.log("GraphQL API running at http://localhost:4000/graphql");
});
