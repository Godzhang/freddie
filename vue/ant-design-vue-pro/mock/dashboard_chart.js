function createRandomNumber(min = 10, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = Array.from({ length: 6 }, () => createRandomNumber());
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
