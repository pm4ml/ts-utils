const is40x = (statusCode: number): boolean => statusCode >= 400 && statusCode <= 499;
export default is40x;
