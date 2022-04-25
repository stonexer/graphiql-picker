import cn from 'classnames';
import {
  ExecutableDefinitionNode,
  FieldNode,
  GraphQLField,
  GraphQLObjectType,
  GraphQLSchema,
  Kind,
  OperationDefinitionNode,
  SelectionNode,
} from 'graphql';
import React, { useState } from 'react';
import { useSchemaContext } from '../../contexts/SchemaContext';
import { editFieldSelection } from '../../helpers/query';
import FieldItem from '../FieldItem';

import FoldIcon from '../FoldIcon';

import styles from './index.module.css';

export interface RootTypeItemProps {
  className?: string;
  type: GraphQLObjectType;
  schema: GraphQLSchema;
  operation: ExecutableDefinitionNode | null;
}

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

const RootTypeItem: React.FC<RootTypeItemProps> = ({
  className,
  type,
  schema,
  operation,
}) => {
  const { onEditDefinition } = useSchemaContext();
  const fields = type.getFields();

  const [isFolded, setIsFolded] = useState(false);

  const handleToggleField = (
    input: AddFieldNode | RemoveFieldNode | UpdateFieldNode
  ) => {
    if (!operation) {
      return null;
    }

    onEditDefinition({
      ...(operation as OperationDefinitionNode),
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
