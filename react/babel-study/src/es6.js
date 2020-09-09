const name = "zhangqi";

const fn = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

const arr = [1, 2, 3];
console.log(arr.includes(2));
