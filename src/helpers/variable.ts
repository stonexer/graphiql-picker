import {
  GraphQLArgument,
  GraphQLInputType,
  GraphQLOutputType,
  isEnumType,
  isInputObjectType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
} from 'graphql';

export function getArgumentsVariableExample(args: readonly GraphQLArgument[]) {
  if (!args.length) {
    return null;
  }

  const result: any = {};

  args.forEach((arg) => {
    result[arg.name] = getObjectTypeVariableExample(arg.type);
  });

  return result;
}

export function getObjectTypeVariableExample(
  objectType: GraphQLInputType | GraphQLOutputType,
  depth: number = 0
): any {
  if (depth >= 3) {
    return null;
  }

  const nextDepth = depth + 1;

  if (isListType(objectType)) {
    return [getObjectTypeVariableExample(objectType.ofType, nextDepth)];
  }

  if (isNonNullType(objectType)) {
    return getObjectTypeVariableExample(
      objectType.ofType as GraphQLOutputType,
      nextDepth
    );
  }

  if (isObjectType(objectType) || isInputObjectType(objectType)) {
    const fields = objectType.getFields();

    const example: any = {};

    Object.keys(fields).forEach((fieldName) => {
      const fieldType = fields[fieldName].type;

      example[fieldName] = getObjectTypeVariableExample(
        fieldType as any,
        nextDepth
      );
    });

    return example;
  }

  if (isEnumType(objectType)) {
    return objectType.getValues()[0].name || null;
  }

  if (isScalarType(objectType)) {
    switch (objectType.name) {
      case 'ID': {
        return 'id';
      }
      case 'Int': {
        return 1;
      }
      case 'String': {
        return 'string';
      }
      case 'Float': {
        return 3.1;
      }
      case 'Boolean': {
        return true;
      }
    }
  }

  return 'Unknown';
}
