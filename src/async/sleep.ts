/**
 * Resolves after a given timeout in ms
 *
 * @param ms - time to sleep
 * @returns A Promise that resolves after `ms`
 */
function sleep(ms: number): Promise<true> {
  return new Promise<true>((resolve) => setTimeout(() => resolve(true), ms));
}

export default sleep;
