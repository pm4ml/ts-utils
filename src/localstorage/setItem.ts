import { AnyType, JsonType } from './types';

function setItem (key: string, value: AnyType | JsonType): void {
  const stringified = JSON.stringify(value);
  if (value !== undefined) {
    localStorage.setItem(key, stringified);
  } else {
    localStorage.removeItem(key);
  }
};

export default setItem;