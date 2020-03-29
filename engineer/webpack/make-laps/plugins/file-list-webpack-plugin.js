class FileListPlugin {
  constructor(options) {
    this.filename = options.filename || "fileList";
    this.ext = options.ext || "md";
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync("FileListPlugin", (compilation, callback) => {
      let fileList = `In this build:\n\n`;

      for (let filename in compilation.assets) {
        fileList += " - " + filename + "\n";
      }

      compilation.assets[`${this.filename}.${this.ext}`] = {
        source: function() {
          return fileList;
        },
        size: function() {
          return fileList.length;
        }
      };

      callback();
    });
  }
}

module.exports = FileListPlugin;
