import { DocumentNode, FieldNode, Kind, parse, SelectionNode } from 'graphql';
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
