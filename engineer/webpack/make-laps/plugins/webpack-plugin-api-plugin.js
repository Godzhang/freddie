class WebpackPluginApiPlugin {
  constructor() {
    this.chunkVersions = {};
  }

  apply(compiler) {
    compiler.hooks.entryOption.tap("MyPlugin", compilation =>
      console.log("entryOption")
    );
    compiler.hooks.afterPlugins.tap("MyPlugin", compilation =>
      console.log("afterPlugins")
    );
    compiler.hooks.afterResolvers.tap("MyPlugin", compilation =>
      console.log("afterResolvers")
    );
    compiler.hooks.environment.tap("MyPlugin", compilation =>
      console.log("environment")
    );
    compiler.hooks.afterEnvironment.tap("MyPlugin", compilation =>
      console.log("afterEnvironment")
    );
    compiler.hooks.beforeRun.tap("MyPlugin", compilation =>
      console.log("beforeRun")
    );
    compiler.hooks.run.tap("MyPlugin", compilation => console.log("run"));
    compiler.hooks.watchRun.tap("MyPlugin", compilation =>
      console.log("watchRun")
    );
    compiler.hooks.normalModuleFactory.tap("MyPlugin", compilation =>
      console.log("normalModuleFactory")
    );
    compiler.hooks.contextModuleFactory.tap("MyPlugin", compilation =>
      console.log("contextModuleFactory")
    );
    compiler.hooks.beforeCompile.tap("MyPlugin", compilation =>
      console.log("beforeCompile")
    );
    compiler.hooks.compile.tap("MyPlugin", compilation =>
      console.log("compile")
    );
    compiler.hooks.thisCompilation.tap("MyPlugin", compilation =>
      console.log("thisCompilation")
    );
    compiler.hooks.compilation.tap("MyPlugin", compilation =>
      console.log("compilation")
    );
    compiler.hooks.make.tap("MyPlugin", compilation => console.log("make"));
    compiler.hooks.afterCompile.tap("MyPlugin", compilation =>
      console.log("afterCompile")
    );
    compiler.hooks.shouldEmit.tap("MyPlugin", compilation =>
      console.log("shouldEmit")
    );
    compiler.hooks.emit.tap("MyPlugin", compilation => console.log("emit"));
    compiler.hooks.afterEmit.tap("MyPlugin", compilation =>
      console.log("afterEmit")
    );
    compiler.hooks.done.tap("MyPlugin", compilation => console.log("done"));
    compiler.hooks.failed.tap("MyPlugin", compilation => console.log("failed"));
    compiler.hooks.invalid.tap("MyPlugin", compilation =>
      console.log("invalid")
    );
    compiler.hooks.watchClose.tap("MyPlugin", compilation =>
      console.log("watchClose")
    );
  }
}

module.exports = WebpackPluginApiPlugin;
