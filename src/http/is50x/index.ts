const is50x = (statusCode: number): boolean => statusCode >= 500 && statusCode <= 599;
export default is50x;
