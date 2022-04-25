import cn from 'classnames';
import {
  DocumentNode,
  ExecutableDefinitionNode,
  GraphQLSchema,
  isExecutableDefinitionNode,
  OperationDefinitionNode,
  print,
} from 'graphql';
import React, { useEffect, useState } from 'react';
import { SchemaContext } from '../../contexts/SchemaContext';

import { useSchema } from '../../models/schema';
import { parseQuery } from '../../helpers/query';
import RootTypeItem from '../RootTypeItem';

import styles from './index.module.css';

export interface SchemaPickerProps {
  className?: string;
  schema: GraphQLSchema;
  query: string;
  onEdit(nextQuery: string): void;
}

const SchemaPicker: React.FC<SchemaPickerProps> = ({
  className,
  schema,
  query,
  onEdit,
}) => {
  const { queryType, mutationType } = useSchema(schema);
  const [queryDocument, setQueryDocument] = useState(() => parseQuery(query));

  useEffect(() => {
    const parsedQuery = parseQuery(query);

    if (parsedQuery) {
      setQueryDocument(parsedQuery);
    }
  }, [query]);

  const operation: ExecutableDefinitionNode | null = (() => {
    const firstDefinition = queryDocument?.definitions[0];

    if (!firstDefinition) {
      return null;
    }

    if (isExecutableDefinitionNode(firstDefinition)) {
      return firstDefinition;
    }

    return null;
  })();

  const onEditDefinition = (nextDefinition: OperationDefinitionNode) => {
    if (!queryDocument) {
      return;
    }

    onEdit(
      print({
        ...queryDocument,
        definitions: [nextDefinition],
      })
    );
  };

  return (
    <SchemaContext.Provider value={{ schema, onEditDefinition }}>
      <div className={cn(styles.container, className)}>
        <div className={styles.title}>
          <h2>Docs</h2>
        </div>
        <div className={styles.content}>
          {queryType ? (
            <RootTypeItem
              type={queryType}
              schema={schema}
              operation={operation}
            />
          ) : null}
          {mutationType ? (
            <RootTypeItem
              type={mutationType}
              schema={schema}
              operation={operation}
            />
          ) : null}
        </div>
      </div>
    </SchemaContext.Provider>
  );
};

export default SchemaPicker;
