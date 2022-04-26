import {
  ArgumentNode,
  DocumentNode,
  FieldNode,
  GraphQLField,
  isListType,
  isObjectType,
  Kind,
  parse,
  SelectionNode,
  SelectionSetNode,
  TypeNode,
  VariableDefinitionNode,
} from 'graphql';
import { EditFieldAction } from '../types/edit';
import { getObjectType } from './schema';

export function parseQuery(queryText: string): DocumentNode | null | Error {
  try {
    if (!queryText.trim()) {
      return null;
    }

    return parse(queryText, { noLocation: true });
  } catch (err) {
    return err as Error;
  }
}

export function editFieldSelection(
  original: readonly SelectionNode[],
  action: EditFieldAction
): SelectionNode[] {
  switch (action.type) {
    case 'addField': {
      const field = action.payloads;
      const fieldObjectType = getObjectType(field.type);

      const subSelectionSet: SelectionSetNode | undefined = (() => {
        if (!fieldObjectType) {
          return undefined;
        }

        const typeFields = fieldObjectType.getFields();
        const autoField = typeFields['id'] ? 'id' : Object.keys(typeFields)[0];

        return {
          kind: Kind.SELECTION_SET,
          selections: [
            {
              kind: Kind.FIELD,
              name: {
                kind: Kind.NAME,
                value: autoField,
              },
            },
          ],
        };
      })();

      return [
        ...original,
        {
          kind: Kind.FIELD,
          name: {
            kind: Kind.NAME,
            value: action.payloads.name,
          },
          arguments: getArgumentNodes(action.payloads),
          selectionSet: subSelectionSet,
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
