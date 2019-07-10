const loginCheck = (username, password) => {
  if (username === "zhangqi" && password === "gongjiaonv") {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck
};
