import {
  ArgumentNode,
  DocumentNode,
  FieldNode,
  GraphQLField,
  Kind,
  parse,
  SelectionNode,
  TypeNode,
  VariableDefinitionNode,
} from 'graphql';
import { EditFieldAction } from '../types/edit';

export function parseQuery(queryText: string): DocumentNode | null {
  try {
    if (!queryText.trim()) {
      return null;
    }

    return parse(queryText, { noLocation: true });
  } catch (err) {
    return null;
  }
}

export function editFieldSelection(
  original: readonly SelectionNode[],
  action: EditFieldAction
): SelectionNode[] {
  switch (action.type) {
    case 'addField': {
      return [
        ...original,
        {
          kind: Kind.FIELD,
          name: {
            kind: Kind.NAME,
            value: action.payloads.name,
          },
          arguments: getArgumentNodes(action.payloads),
        },
      ];
    }
    case 'removeField': {
      return (original as FieldNode[]).filter(
        (item) => item.name.value !== action.payloads.name
      );
    }
    case 'updateField': {
      return (original as FieldNode[]).map((item) => {
        if (item.name.value === action.payloads.name.value) {
          return action.payloads;
        }
        return item;
      });
    }
    default: {
      return [...original];
    }
  }
}

export function getVariableDefinitions(field: GraphQLField<any, any>) {
  return field.args.map((argItem) => {
    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: {
        kind: Kind.VARIABLE,
        name: {
          kind: Kind.NAME,
          value: argItem.name,
        },
      },
      type: {
        kind: Kind.NAMED_TYPE,
        name: {
          kind: Kind.NAME,
          value: argItem.type.toString(),
        },
      },
    } as VariableDefinitionNode;
  });
}

export function getArgumentNodes(field: GraphQLField<any, any>) {
  return field.args.map((argItem) => {
    return {
      kind: Kind.ARGUMENT,
      name: {
        kind: Kind.NAME,
        value: argItem.name,
      },
      value: {
        kind: Kind.VARIABLE,
        name: {
          kind: Kind.NAME,
          value: argItem.name,
        },
      },
    } as ArgumentNode;
  });
}
