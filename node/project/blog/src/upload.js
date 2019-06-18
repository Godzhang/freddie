const formidable = require("formidable");
const fs = require("fs");

function dealUpload(ctx) {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.uploadDir = __dirname + "/static/html";
  form.parse(ctx.req, (err, fields, files) => {
    if (err) {
      throw err;
    }
    fs.renameSync(files.file.path, form.uploadDir + files.file.name);
  });
}

module.exports = dealUpload;
