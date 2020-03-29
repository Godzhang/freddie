const path = require("path");
const fs = require("fs");
const { getOptions } = require("loader-utils");
const validateOptions = require("schema-utils");
const Spritesmith = require("Spritesmith");
const schema = require("./sprite-schema.json");

module.exports = function(content) {
  const options = getOptions(this) || {};

  validateOptions(schema, options, {
    name: "sprite loader",
    baseDataPath: "options"
  });

  const callback = this.async();
  const images = content.match(/url\((\S*)\?__sprite\)/g);
  const matchedImgs = [];

  for (let i = 0; i < images.length; i++) {
    const img = images[i].match(/url\((\S*)\?__sprite\)/)[1];
    matchedImgs.push(path.join(__dirname, img));
  }

  Spritesmith.run({ src: matchedImgs }, (err, result) => {
    const imgPos = Object.values(result.coordinates);
    // this.emitFile(path.join(process.cwd(), "dist/sprite.jpg"), result.image);
    this.emitFile("sprite.jpg", result.image);
    content = content.replace(/url\((\S*)\?__sprite\)/g, match => {
      let { x, y } = imgPos.shift();
      return `url("../dist/sprite.jpg") ${-x}px ${-y}px no-repeat`;
    });
    callback(null, content);
  });
};
