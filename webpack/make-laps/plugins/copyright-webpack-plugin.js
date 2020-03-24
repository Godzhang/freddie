class CopyrightWebpackPlugin {
  constructor(options) {}

  apply(compiler) {
    compiler.hooks.compile.tap("CopyrightWebpackPlugin", compilation => {
      console.log("hooks -> compile");
    });
    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, callback) => {
        compilation.assets["copyright.txt"] = {
          source: function() {
            return "I am single";
          },
          size: function() {
            return 11;
          }
        };
        callback();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
