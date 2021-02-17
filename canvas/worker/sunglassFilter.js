self.addEventListener("message", function (event) {
  let imageData = event.data,
    data = imageData.data,
    width = imageData.width,
    length = data.length;

  for (let i = 0; i < length; i++) {
    if ((i + 1) % 4 !== 0) {
      if ((i + 4) % (width * 4) === 0) {
        data[i] = data[i - 4];
        data[i + 1] = data[i - 3];
        data[i + 2] = data[i - 2];
        data[i + 3] = data[i - 1];
        i += 3;
      } else {
        data[i] = data[i] * 2 - 1.5 * data[i + 4];
      }
    }
  }

  postMessage(imageData);
  self.close();
});
