import { AnyType, JsonType } from '../types';

function getItem(key: string): AnyType | JsonType {
  const unparsed = localStorage.getItem(key);
  if (!unparsed) {
    return undefined;
  }
  let parsed;

  try {
    parsed = JSON.parse(unparsed);
  } catch (e) {
    localStorage.removeItem(key);
  }
  return parsed;
}

export default getItem;
