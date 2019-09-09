const pkg = require("../package.json");
const com = {
  PKGNAME: JSON.stringify(pkg.name),
  IP: JSON.stringify("xxx")
};

module.exports = {
  dev: {
    env: {
      TYPE: JSON.stringify("dev"),
      ...com
    }
  },
  // 生产环境
  build: {
    env: {
      TYPE: JSON.stringify("prod"),
      ...com
    }
  }
};
