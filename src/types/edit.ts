import { FieldNode, GraphQLField } from 'graphql';

export interface AddFieldNode {
  type: 'addField';
  payloads: GraphQLField<any, any>;
}

export interface RemoveFieldNode {
  type: 'removeField';
  payloads: { name: string };
}

export interface UpdateFieldNode {
  type: 'updateField';
  payloads: FieldNode;
}

export type EditFieldAction = AddFieldNode | RemoveFieldNode | UpdateFieldNode;
