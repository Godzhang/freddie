const fillZero = num => {
  return num > 9 ? num : `0${num}`;
};

export const dateFormatter = time => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = fillZero(date.getMonth() + 1);
  const day = fillZero(date.getDate());
  return `${year}-${month}-${day}`;
};
