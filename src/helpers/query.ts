import { DocumentNode, parse } from 'graphql';

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
