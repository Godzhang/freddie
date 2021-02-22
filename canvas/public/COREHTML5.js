const COREHTML5 = {};

// RoundedRectangle
COREHTML5.RoundedRectangle = function (
  strokeStyle = "gray",
  fillStyle = "skyblue",
  horizontalSizePercent = 100,
  verticalSizePercent = 100
) {
  this.strokeStyle = strokeStyle;
  this.fillStyle = fillStyle;

  this.SHADOW_COLOR = "rgba(100, 100, 100, 0.8)";
  this.SHADOW_OFFSET_X = 3;
  this.SHADOW_OFFSET_Y = 3;
  this.SHADOW_BLUR = 3;

  this.setSizePercents(horizontalSizePercent, verticalSizePercent);
  this.createCanvas();
  this.createDOMElement();

  return this;
};

COREHTML5.RoundedRectangle.prototype.createCanvas = function () {
  const canvas = document.createElement("canvas");
  this.context = canvas.getContext("2d");
  return canvas;
};

COREHTML5.RoundedRectangle.prototype.createDOMElement = function () {
  this.domElement = document.createElement("div");
  this.domElement.appendChild(this.context.canvas);
};

COREHTML5.RoundedRectangle.prototype.appendTo = function (element) {
  element.appendChild(this.domElement);
  this.domElement.style.width = element.offsetWidth + "px";
  this.domElement.style.height = element.offsetHeight + "px";
  this.resize(element.offsetWidth, element.offsetHeight);
};

COREHTML5.RoundedRectangle.prototype.resize = function (width, height) {
  this.HORIZONTAL_MARGIN = (width - width * this.horizontalSizePercent) / 2;
  this.VERTICAL_MARGIN = (height - height * this.verticalSizePercent) / 2;

  // this.cornerRadius =
  //   (this.context.canvas.height / 2 - 2 * this.VERTICAL_MARGIN) / 2;

  this.top = this.VERTICAL_MARGIN;
  this.left = this.HORIZONTAL_MARGIN;
  this.right = this.left + width - 2 * this.HORIZONTAL_MARGIN;
  this.bottom = this.top + height - 2 * this.VERTICAL_MARGIN;

  this.context.canvas.width = width;
  this.context.canvas.height = height;
};

COREHTML5.RoundedRectangle.prototype.setSizePercents = function (h, v) {
  this.horizontalSizePercent = h > 1 ? h / 100 : h;
  this.verticalSizePercent = v > 1 ? v / 100 : v;
};

COREHTML5.RoundedRectangle.prototype.fill = function () {
  const context = this.context;
  const radius = (this.bottom - this.top) / 2;

  context.save();
  context.shadowColor = this.SHADOW_COLOR;
  context.shadowOffsetX = this.SHADOW_OFFSET_X;
  context.shadowOffsetY = this.SHADOW_OFFSET_Y;
  context.shadowBlur = 6;

  context.beginPath();
  context.moveTo(this.left + radius, this.top);
  context.arcTo(this.right, this.top, this.right, this.bottom, radius);
  context.arcTo(this.right, this.bottom, this.left, this.bottom, radius);
  context.arcTo(this.left, this.bottom, this.left, this.top, radius);
  context.arcTo(this.left, this.top, this.right, this.top, radius);
  context.closePath();

  context.fillStyle = this.fillStyle;
  context.fill();
  context.shadowColor = undefined;
};

COREHTML5.RoundedRectangle.prototype.overlayGradient = function () {
  const context = this.context;
  const gradient = context.createLinearGradient(
    this.left,
    this.top,
    this.left,
    this.bottom
  );

  gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
  gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.6)");
  gradient.addColorStop(0.25, "rgba(255, 255, 255, 0.7)");
  gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.9)");
  gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.7)");
  gradient.addColorStop(0.45, "rgba(255, 255, 255, 0.6)");
  gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.4)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)");

  context.save();
  context.fillStyle = gradient;
  context.fill();

  context.lineWidth = 0.4;
  context.strokeStyle = this.strokeStyle;
  context.stroke();

  context.restore();
};

COREHTML5.RoundedRectangle.prototype.draw = function (context) {
  let originalContext;
  if (context) {
    originalContext = this.context;
    this.context = context;
  }

  this.fill();
  this.overlayGradient();

  if (context) {
    this.context = originalContext;
  }
};

COREHTML5.RoundedRectangle.prototype.erase = function () {
  this.context.clearRect(
    0,
    0,
    this.context.canvas.width,
    this.context.canvas.height
  );
};

// Progressbar
COREHTML5.Progressbar = function (
  strokeStyle = "gray",
  fillStyle = "skyblue",
  horizontalSizePercent = 100,
  verticalSizePercent = 100
) {
  this.trough = new COREHTML5.RoundedRectangle(
    strokeStyle,
    fillStyle,
    horizontalSizePercent,
    verticalSizePercent
  );

  this.SHADOW_COLOR = "rgba(255, 255, 255, 0.5)";
  this.SHADOW_OFFSET_X = 2;
  this.SHADOW_OFFSET_Y = 2;
  this.SHADOW_BLUR = 3;

  this.percentComplete = 0;
  this.createCanvas();
  this.createDOMElement();

  return this;
};

COREHTML5.Progressbar.prototype.createCanvas = function () {
  this.context = document.createElement("canvas").getContext("2d");
  this.offscreen = document.createElement("canvas").getContext("2d");
};

COREHTML5.Progressbar.prototype.createDOMElement = function () {
  this.domElement = document.createElement("div");
  this.domElement.appendChild(this.context.canvas);
};

COREHTML5.Progressbar.prototype.appendTo = function (element) {
  element.appendChild(this.domElement);
  this.domElement.style.width = element.offsetWidth + "px";
  this.domElement.style.height = element.offsetHeight + "px";
  this.resize();

  this.trough.resize(element.offsetWidth, element.offsetHeight);
  this.trough.draw(this.offscreen);
};

COREHTML5.Progressbar.prototype.setCanvasSize = function () {
  const domElementParent = this.domElement.parentNode;

  this.context.canvas.width = domElementParent.offsetWidth;
  this.context.canvas.height = domElementParent.offsetHeight;
};

COREHTML5.Progressbar.prototype.resize = function () {
  const domElementParent = this.domElement.parentNode;
  const w = domElementParent.offsetWidth;
  const h = domElementParent.offsetHeight;

  this.setCanvasSize();

  this.context.canvas.width = w;
  this.context.canvas.height = h;

  this.offscreen.canvas.width = w;
  this.offscreen.canvas.height = h;
};

COREHTML5.Progressbar.prototype.draw = function (percentComplete) {
  const width = this.offscreen.canvas.width * (percentComplete / 100);
  const height = this.offscreen.canvas.height;

  if (percentComplete > 0) {
    this.context.drawImage(
      this.offscreen.canvas,
      0,
      0,
      width,
      height,
      0,
      0,
      width,
      height
    );
  }
};

COREHTML5.Progressbar.prototype.erase = function () {
  this.context.clearRect(
    0,
    0,
    this.context.canvas.width,
    this.context.canvas.height
  );
};
