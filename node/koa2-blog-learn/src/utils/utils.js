const { LOGIN_STATUS } = require("../conf/user");

function validateStatus(ctx) {
  if (!ctx.cookies.get(LOGIN_STATUS)) {
    console.log("not login");
    return false;
  }
  return true;
}

module.exports = {
  validateStatus,
};
