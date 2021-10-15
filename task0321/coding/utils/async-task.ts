export default (
  seconds: number = 1,
  success: boolean = true,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(`Success! Cost ${seconds}s.`);
      } else {
        reject(`Fail! Cost ${seconds}s.`);
      }
    }, seconds * 1000);
  });
};
