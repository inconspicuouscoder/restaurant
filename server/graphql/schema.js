import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './typeDefs/typeDefs.js';
import { resolvers } from './resolvers/resolvers.js';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
