function exportWord(content, filename = "Word-Export") {
  const static = {
    mhtml: {
      top:
        "Mime-Version: 1.0\nContent-Base: " +
        location.href +
        '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' +
        location.href +
        "\n\n<!DOCTYPE html>\n<html>\n_html_</html>",
      head:
        '<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n</head>\n',
      body: "<body>_body_</body>",
    },
  };
  const options = {
    maxWidth: 624,
  };
  const markup = content.cloneNode(true);

  // 删除不显示的节点
  function handleHiddenNode(node) {
    node.childNodes.forEach((n) => {
      if (n.nodeType === 1 && n.style.visibility === "hidden") {
        n.remove();
      }
      if (n.childNodes.length) handleHiddenNode(n);
    });
  }
  handleHiddenNode(markup);

  let images = Array();
  let imgs = markup.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    let w = Math.min(img.width, options.maxWidth);
    let h = img.height * (w / img.width);

    let canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0, w, h);

    let uri = canvas.toDataURL("image/png");
    img.width = w;
    img.height = h;

    images[i] = {
      type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
      encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
      location: img.src,
      data: uri.substring(uri.indexOf(",") + 1),
    };
  }

  let mhtmlBottom = "\n";
  for (let i = 0; i < images.length; i++) {
    mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
    mhtmlBottom += "Content-Location: " + images[i].location + "\n";
    mhtmlBottom += "Content-Type: " + images[i].type + "\n";
    mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
    mhtmlBottom += images[i].data + "\n\n";
  }
  mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

  var styles = "";

  // Aggregate parts of the file together
  var fileContent =
    static.mhtml.top.replace(
      "_html_",
      static.mhtml.head.replace("_styles_", styles) +
        static.mhtml.body.replace("_body_", markup.outerHTML)
    ) + mhtmlBottom;

  var blob = new Blob([fileContent], {
    type: "application/msword;charset=utf-8",
  });
  saveAs(blob, fileName + ".doc");
}
