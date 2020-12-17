const vw = document.body.clientWidth / 100;
const imageWidth = 63.2 * vw * 2;
const imageHeight = 94.4 * vw * 2;

let box;
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

const createDataUrl = ({ img, width, height }) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = imageWidth;
  canvas.height = imageHeight;

  if (imageWidth === width) {
    context.drawImage(img, 0, (imageHeight - height) / 2, width, height);
  } else if (imageHeight === height) {
    context.drawImage(img, (imageWidth - width) / 2, 0, width, height);
  }
  context.drawImage(box, 0, 0, imageWidth, imageHeight);

  return canvas.toDataURL();
};

const getCompositionUrl = async (urls = [], type = "red") => {
  if (!urls.length) return [];

  if (cache[type]) return cache[type];

  if (!box) {
    box = await loadBox(type);
  }

  const loadImages = urls.map(url => loadImage(url));
  const imgInfos = await Promise.all(loadImages);
  const result = imgInfos.map(imgInfo => createDataUrl(imgInfo));

  cache[type] = result;

  return result;
};

export default getCompositionUrl;
