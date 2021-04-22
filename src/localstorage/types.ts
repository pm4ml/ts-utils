export type AnyType = boolean | number | string | null | undefined;
export type JsonType = {
  [key: string]: AnyType | JsonType;
};
