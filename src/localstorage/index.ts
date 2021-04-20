type AnyType = boolean | number | string | null | undefined;
type JsonType = {
  [key: string]: AnyType | JsonType;
};

const setItem = (key: string, value: AnyType | JsonType) => {
  const stringified = JSON.stringify(value);
  if (value !== undefined) {
    localStorage.setItem(key, stringified);
  } else {
    localStorage.removeItem(key);
  }
};

const getItem = (key: string): AnyType | JsonType => {
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
};

const removeItem = (key: string) => localStorage.removeItem(key);

export { setItem, getItem, removeItem };
