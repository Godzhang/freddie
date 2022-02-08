const requireFn = function (module, exports, require) {
  module.exports = function (x) {
    console.log(x);
  };
};

require.register("./utils.js", requireFn);

const print = require("./utils");
print("commonjs-in-browser");
