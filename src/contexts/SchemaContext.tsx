import { GraphQLSchema, OperationDefinitionNode } from 'graphql';
import { createContext, useContext } from 'react';
import { EditFieldAction } from '../types/edit';

export interface SchemaContextValue {
  schema: GraphQLSchema;
  onEditDefinition(
    nextDefinition: OperationDefinitionNode,
    input?: EditFieldAction
  ): void;
}

export const SchemaContext = createContext<SchemaContextValue>(
  {} as SchemaContextValue
);

export function useSchemaContext() {
  return useContext(SchemaContext);
}
