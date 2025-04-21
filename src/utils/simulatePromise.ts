export const simulatePromise = async () =>
  await new Promise((resolve) => setTimeout(resolve, 2000));
