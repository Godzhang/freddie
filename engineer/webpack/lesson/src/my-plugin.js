class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("MyPlugin", (compilation, callback) => {
      // console.log(compilation.assets);

      callback();
    });
  }
}

module.exports = MyPlugin;
