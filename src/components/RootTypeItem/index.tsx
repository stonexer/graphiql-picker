import cn from 'classnames';
import {
  ExecutableDefinitionNode,
  GraphQLObjectType,
  GraphQLSchema,
  OperationDefinitionNode,
} from 'graphql';
import React, { useState } from 'react';
import { useSchemaContext } from '../../contexts/SchemaContext';
import {
  editFieldSelection,
  getVariableDefinitions,
} from '../../helpers/query';
import { EditFieldAction } from '../../types/edit';
import FieldItem from '../FieldItem';

import FoldIcon from '../FoldIcon';

import styles from './index.module.css';

export interface RootTypeItemProps {
  className?: string;
  type: GraphQLObjectType;
  schema: GraphQLSchema;
  operation: ExecutableDefinitionNode | null;
}

const RootTypeItem: React.FC<RootTypeItemProps> = ({
  className,
  type,
  schema,
  operation,
}) => {
  const { onEditDefinition } = useSchemaContext();
  const fields = type.getFields();

  const [isFolded, setIsFolded] = useState(false);

  const handleToggleField = (input: EditFieldAction) => {
    if (!operation) {
      return null;
    }

    const nextVariableDefinitions = (() => {
      if (input.type === 'addField') {
        return getVariableDefinitions(input.payloads);
      }
      return undefined;
    })();

    onEditDefinition({
      ...(operation as OperationDefinitionNode),
      variableDefinitions:
        nextVariableDefinitions ?? operation.variableDefinitions,
      selectionSet: {
        ...operation.selectionSet,
        selections: editFieldSelection(
          operation.selectionSet.selections,
          input
        ),
      },
    });
  };

  return (
    <div className={cn(styles.container, className)}>
      <div
        className={styles.typeTitle}
        onClick={() => {
          setIsFolded(!isFolded);
        }}
      >
        <FoldIcon isFolded={isFolded} />
        <span className={styles.name}>{type.name}</span>
      </div>
      {isFolded ? null : (
        <div className={styles.fields}>
          {Object.keys(fields).map((fieldItem) => {
            return (
              <FieldItem
                key={fieldItem}
                field={fields[fieldItem]}
                schema={schema}
                selectionSet={operation?.selectionSet}
                onEdit={handleToggleField}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RootTypeItem;
