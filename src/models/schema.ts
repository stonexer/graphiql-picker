import { GraphQLSchema } from 'graphql';

export function useSchema(schema: GraphQLSchema) {
  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();

  return { queryType, mutationType };
}
