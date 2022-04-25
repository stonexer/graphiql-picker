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

import Checkbox from '../Checkbox';
import FoldIcon from '../FoldIcon';
import {
  AddFieldNode,
  RemoveFieldNode,
  UpdateFieldNode,
} from '../RootTypeItem';

import styles from './index.module.css';

export interface FieldItemProps {
  className?: string;
  field: GraphQLField<any, any>;
  schema: GraphQLSchema;
  selectionSet: SelectionSetNode | undefined;
  onEdit(input: AddFieldNode | RemoveFieldNode | UpdateFieldNode): void;
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

  const handleToggleChildField = (input: AddFieldNode | RemoveFieldNode) => {
    if (!fieldSelection) {
      return null;
    }

    const selectionSet: SelectionSetNode = fieldSelection.selectionSet
      ? fieldSelection.selectionSet
      : {
          kind: Kind.SELECTION_SET,
          selections: [],
        };

    if (input.type === 'addField') {
      selectionSet.selections = [
        ...(fieldSelection.selectionSet?.selections ?? []),
        {
          kind: Kind.FIELD,
          name: {
            kind: Kind.NAME,
            value: input.payloads.name,
          },
        },
      ];
    } else {
      selectionSet.selections = (
        fieldSelection.selectionSet?.selections as FieldNode[]
      ).filter((item) => item.name.value !== input.payloads.name);
    }

    onEdit({
      type: 'updateField',
      payloads: {
        ...fieldSelection,
        selectionSet,
      },
    });
  };

  return (
    <div className={cn(styles.container, className)}>
      <div
        className={styles.fieldTitle}
        onClick={() => {
          setIsFolded(!isFolded);
        }}
      >
        <Checkbox
          className={styles.checkbox}
          checked={!!fieldSelection}
          onClick={(e) => {
            e.stopPropagation();

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
        />
        <div className={styles.foldIcon}>
          {hasSubFields ? <FoldIcon isFolded={isFolded} /> : null}
        </div>
        <span className={styles.name}>{field.name}</span>
        <span className={styles.typeName}>{field.type.toString()}</span>
        {field.description ? (
          <span className={styles.description}>{field.description}</span>
        ) : null}
      </div>
      {/* {fieldArgs.length > 0 ? <div>Show Arguments</div> : null} */}
      {isFolded || !fieldTypeFields ? null : (
        <div className={styles.fields}>
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
