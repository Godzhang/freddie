import { vw } from "@/common/global/global";
import { altasInfos, atlasTextPos } from "@/common/global/atlas";

const imageWidth = 63.2 * vw;
const imageHeight = 94.4 * vw;

const erweimaTop = 76.5 * vw;
const erweimaLeft = 47 * vw;
const greenErweimaTop = 1.5 * vw;
const greenErweimaLeft = 49.33 * vw;
const whiteErweimaTop = 77.5 * vw;
const whiteErweimaLeft = 50 * vw;
const erweimaWidth = 12.27 * vw;
const erweimaHeight = 16 * vw;

let erweima;
let box;
const boxCache = {};
const cache = {};

const loadBox = type => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = require(`../../assets/shuffle/${type}-box.png`);
  });
};
const loadErweima = () => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = require(`../../assets/shuffle/erweima.png`);
  });
};

const loadImage = src => {
  const boxRatio = imageWidth / imageHeight;
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const ratio = width / height;
      if (boxRatio < ratio) {
        resolve({
          img,
          width: (imageHeight * width) / height,
          height: imageHeight
        });
      } else {
        resolve({
          img,
          width: imageWidth,
          height: (imageWidth * height) / width
        });
      }
    };
    img.onerror = resolve;
    img.src = src;
  });
};

const drawText = (context, type, index) => {
  const info = altasInfos[type][index] || { fontSize: 40, value: "标题" };
  const { title } = atlasTextPos[type];

  context.font = `${info.fontSize}px bold 黑体`;
  context.fillStyle = "#fff";
  context.textAlign = "center";
  // context.textBaseline = "middle";
  // context.textBaseline = "alphabetic";
  context.fillText(info.value, title.left, title.top);
};

const createDataUrl = ({ img, width, height }, type, index) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = imageWidth;
  canvas.height = imageHeight;

  if (imageWidth === width) {
    context.drawImage(img, 0, (imageHeight - height) / 2, width, height);
  } else if (imageHeight === height) {
    context.drawImage(img, (imageWidth - width) / 2, 0, width, height);
  }
  if (box) {
    context.drawImage(box, 0, 0, imageWidth, imageHeight);
  }

  if (["green", "blue"].includes(type)) {
    context.drawImage(
      erweima,
      greenErweimaLeft,
      greenErweimaTop,
      erweimaWidth,
      erweimaHeight
    );
  } else if (type === "white") {
    context.drawImage(
      erweima,
      whiteErweimaLeft,
      whiteErweimaTop,
      erweimaWidth,
      erweimaHeight
    );
  } else {
    context.drawImage(
      erweima,
      erweimaLeft,
      erweimaTop,
      erweimaWidth,
      erweimaHeight
    );
  }

  drawText(context, type, index);

  return canvas.toDataURL();
};

const getCompositionUrl = async (urls = [], type = "red") => {
  if (!urls.length) return [];

  if (cache[type]) return cache[type];

  if (boxCache[type]) {
    box = boxCache[type];
  } else {
    boxCache[type] = box = await loadBox(type);
  }
  erweima = await loadErweima();

  const loadImages = urls.map(url => loadImage(url));
  const imgInfos = await Promise.all(loadImages);
  const result = imgInfos.map((imgInfo, index) =>
    createDataUrl(imgInfo, type, index)
  );

  cache[type] = result;

  return result;
};

export default getCompositionUrl;
