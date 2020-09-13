const mapLimit = (arr, limit, handleFn, resolvedFn, rejectedFn) => {
  let resolvedNum = 0;
  let total = arr.length;
  let resArr = Array.from({ length: total });
  let promiseList = arr.map((item, index) => [index, () => handleFn(item)]);

  return new Promise((resolve, reject) => {
    for (let i = 0; i < limit; i++) {
      run();
    }

    function run() {
      if (!promiseList.length) return;

      const [resIndex, pfn] = promiseList.shift();
      pfn()
        .then((result) => {
          resolvedFn && resolvedFn(result);
          resArr[resIndex] = result;
        })
        .catch((err) => {
          if (rejectedFn) {
            rejectedFn(err);
          } else {
            reject(err);
          }
        })
        .finally(() => {
          if (++resolvedNum === total) {
            resolve(resArr);
          }
          run();
        });
    }
  });
};

// test
const arr = new Array(30).fill(0).map((item, index) => index + 1);
const handleArr = (item) => {
  const time = 100 * Math.random() + 400;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(item * item);
    }, time);
  });
};
const resolvedFn = (res) => console.log(res);
const rejectedFn = (err) => console.log(err);
mapLimit(arr, 5, handleArr, resolvedFn, rejectedFn).then((res) => {
  console.log(res);
});
