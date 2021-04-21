function sleep(ms: number): Promise<true> {
  return new Promise<true>((resolve) => setTimeout(() => resolve(true), ms));
}

export default sleep;
