import GraphiQL from 'graphiql';
import { StrictMode, useState } from 'react';
import { buildSchema } from 'graphql';

import 'graphiql/graphiql.css';

import SchemaPicker from './components/SchemaPicker';
import schemaString from './schema.graphql?raw';

import './App.css';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

const schema = buildSchema(schemaString);
const fetcher = createGraphiQLFetcher({
  url: 'https://api.spacex.land/graphql/',
});

const defaultQuery = `query Something {
  __typename
}
`;

function App() {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <div className="App">
      {schema ? (
        <StrictMode>
          <SchemaPicker schema={schema} query={query} onEdit={setQuery} />
        </StrictMode>
      ) : null}
      <GraphiQL
        query={query}
        schema={schema}
        fetcher={fetcher}
        onEditQuery={(newQuery) => setQuery(newQuery ?? '')}
      />
    </div>
  );
}

export default App;
