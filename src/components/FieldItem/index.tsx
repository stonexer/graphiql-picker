import cn from 'classnames';
import {
  FieldNode,
  GraphQLField,
  GraphQLFieldMap,
  GraphQLOutputType,
  GraphQLSchema,
  isListType,
  isNonNullType,
  isObjectType,
  Kind,
  SelectionSetNode,
} from 'graphql';
import React, { useState } from 'react';

import { editFieldSelection } from '../../helpers/query';
import { EditFieldAction } from '../../types/edit';
import Checkbox from '../Checkbox';
import FoldIcon from '../FoldIcon';
import ArgumentsIcon from '../ArgumentsIcon';

import styles from './index.module.css';

export interface FieldItemProps {
  className?: string;
  field: GraphQLField<any, any>;
  schema: GraphQLSchema;
  selectionSet: SelectionSetNode | undefined;
  onEdit(input: EditFieldAction): void;
}

const FieldItem: React.FC<FieldItemProps> = ({
  className,
  field,
  schema,
  selectionSet,
  onEdit,
}) => {
  const fieldArgs = field.args;
  const hasSubFields = getHasSubFields(field.type);
  const fieldTypeFields = getTypeFields(field.type);

  const [isFolded, setIsFolded] = useState(true);
  const fieldSelection = (selectionSet?.selections as FieldNode[])?.find(
    (item) => item.name.value === field.name
  );

  const handleToggleChildField = (input: EditFieldAction) => {
    if (!fieldSelection) {
      return null;
    }

    const selectionSet: SelectionSetNode = (() => {
      const set: SelectionSetNode = fieldSelection.selectionSet
        ? fieldSelection.selectionSet
        : {
            kind: Kind.SELECTION_SET,
            selections: [],
          };

      set.selections = editFieldSelection(set.selections, input);

      return set;
    })();

    onEdit({
      type: 'updateField',
      payloads: { ...fieldSelection, selectionSet },
    });
  };

  return (
    <div className={cn(styles.container, className)}>
      <div
        className={styles.fieldTitle}
        onClick={() => {
          const isAdd = !fieldSelection;

          if (isAdd) {
            setIsFolded(false);
          }

          onEdit(
            isAdd
              ? {
                  type: 'addField',
                  payloads: field,
                }
              : {
                  type: 'removeField',
                  payloads: { name: field.name },
                }
          );
        }}
      >
        <Checkbox className={styles.checkbox} checked={!!fieldSelection} />
        <div className={styles.foldIcon}>
          {hasSubFields ? <FoldIcon isFolded={isFolded} /> : null}
        </div>
        <span className={styles.name}>{field.name}</span>
        <span className={styles.typeName}>{field.type.toString()}</span>
        {field.description ? (
          <span className={styles.description} title={field.description}>
            {field.description}
          </span>
        ) : null}
      </div>
      {isFolded || !fieldTypeFields ? null : (
        <div className={styles.fields}>
          {fieldArgs.length > 0 ? (
            // TODO:
            <div className={styles.showArgument}>
              <ArgumentsIcon />
              <span>Show Arguments</span>
            </div>
          ) : null}
          {Object.keys(fieldTypeFields).map((fieldItem) => {
            return (
              <FieldItem
                key={fieldItem}
                field={fieldTypeFields[fieldItem]}
                schema={schema}
                selectionSet={fieldSelection?.selectionSet}
                onEdit={handleToggleChildField}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FieldItem;

function getHasSubFields(type: GraphQLOutputType): boolean {
  if (isObjectType(type)) {
    return true;
  } else if (isListType(type)) {
    return getHasSubFields(type.ofType);
  } else if (isNonNullType(type)) {
    return getHasSubFields(type.ofType);
  }
  return false;
}

function getTypeFields(
  type: GraphQLOutputType
): GraphQLFieldMap<any, any> | null {
  if (isObjectType(type)) {
    return type.getFields();
  } else if (isListType(type)) {
    return getTypeFields(type.ofType);
  } else if (isNonNullType(type)) {
    return getTypeFields(type.ofType);
  }

  return null;
}
