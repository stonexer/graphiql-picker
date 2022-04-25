import { GraphQLSchema, OperationDefinitionNode } from 'graphql';
import { createContext, useContext } from 'react';

export interface SchemaContextValue {
  schema: GraphQLSchema;
  onEditDefinition(nextDefinition: OperationDefinitionNode): void;
}

export const SchemaContext = createContext<SchemaContextValue>(
  {} as SchemaContextValue
);

export function useSchemaContext() {
  return useContext(SchemaContext);
}
