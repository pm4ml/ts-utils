type ClassName = string | boolean | undefined;

const isString = (item: ClassName): boolean => typeof item === 'string';

function composeClassName(items: ClassName[] = []): string {
  if (!Array.isArray(items)) {
    throw new Error('Class name should be wrapped into an array');
  }
  return items.filter(isString).join(' ');
}

export default composeClassName;
