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

// Slider
COREHTML5.Slider = function (
  strokeStyle = "gray",
  fillStyle = "skyblue",
  knobPercent = 0,
  hpercent,
  vpercent
) {
  this.trough = new COREHTML5.RoundedRectangle(
    strokeStyle,
    fillStyle,
    hpercent || 95,
    vpercent || 95
  );

  this.knobPercent = knobPercent;
  this.strokeStyle = strokeStyle;
  this.fillStyle = fillStyle;

  this.SHADOW_COLOR = "rgba(100, 100, 100, 0.8)";
  this.SHADOW_OFFSET_X = 3;
  this.SHADOW_OFFSET_Y = 3;
  // this.SHADOW_BLUR = 3;

  this.HORIZONTAL_MARGIN = this.SHADOW_OFFSET_X * 2;
  this.VERTICAL_MARGIN = this.SHADOW_OFFSET_Y * 2;

  this.KNOB_SHADOW_COLOR = "yellow";
  this.KNOB_SHADOW_OFFSET_X = 1;
  this.KNOB_SHADOW_OFFSET_Y = 1;
  this.KNOB_SHADOW_BLUR = 0;

  this.KNOB_FILL_STYLE = "rgba(255, 255, 255, 0.45)";
  this.KNOB_STROKE_STYLE = "rgba(0, 0, 150, 0.45)";

  this.context = document.createElement("canvas").getContext("2d");
  this.changeEventListeners = [];

  this.createDOMElement();
  this.addMouseHandlers();

  return this;
};
COREHTML5.Slider.prototype.createDOMElement = function () {
  this.domElement = document.createElement("div");
  this.domElement.appendChild(this.context.canvas);
};

COREHTML5.Slider.prototype.appendTo = function (elementId) {
  document.getElementById(elementId).appendChild(this.domElement);

  this.setCanvasSize();
  this.resize();
};

COREHTML5.Slider.prototype.setCanvasSize = function () {
  const domElementParent = this.domElement.parentNode;

  this.context.canvas.width = domElementParent.offsetWidth;
  this.context.canvas.height = domElementParent.offsetHeight;
};

COREHTML5.Slider.prototype.resize = function () {
  const canvas = this.context.canvas;
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // this.cornerRadius = (canvasHeight / 2 - 2 * this.VERTICAL_MARGIN) / 2;

  this.top = this.VERTICAL_MARGIN;
  this.left = this.HORIZONTAL_MARGIN;
  this.right = this.left + canvasWidth - 2 * this.HORIZONTAL_MARGIN;
  this.bottom = this.top + canvasHeight - 2 * this.VERTICAL_MARGIN;

  this.trough.resize(canvasWidth, canvasHeight);
  this.knobRadius = canvasHeight / 2 - this.context.lineWidth * 2;
};

COREHTML5.Slider.prototype.addMouseHandlers = function () {
  this.domElement.onmouseover = (e) => {
    this.context.canvas.style.cursor = "crosshair";
  };
  this.domElement.onmousedown = (e) => {
    const mouse = this.windowToCanvas(e.clientX, e.clientY);

    e.preventDefault();

    if (this.mouseInTrough(mouse) || this.mouseInKnob(mouse)) {
      this.knobPercent = this.knobPositionToPercent(mouse.x);
      this.fireChangeEvent(e);
      this.erase();
      this.draw();
      this.dragging = true;
    }
  };
  window.addEventListener("mousemove", (e) => {
    let mouse, percent;

    e.preventDefault();

    if (this.dragging) {
      mouse = this.windowToCanvas(e.clientX, e.clientY);
      percent = this.knobPositionToPercent(mouse.x);

      if (percent >= 0 && percent <= 1) {
        this.fireChangeEvent(e);
        this.erase();
        this.draw(percent);
      }
    }
  });
  window.addEventListener("mouseup", (e) => {
    e.preventDefault();

    if (this.dragging) {
      this.fireChangeEvent(e);
      this.dragging = false;
    }
  });
};

COREHTML5.Slider.prototype.fireChangeEvent = function (e) {
  for (let i = 0, len = this.changeEventListeners.length; i < len; i++) {
    this.changeEventListeners[i](e);
  }
};

COREHTML5.Slider.prototype.addChangeListener = function (listenerFunction) {
  this.changeEventListeners.push(listenerFunction);
};

COREHTML5.Slider.prototype.windowToCanvas = function (x, y) {
  const canvas = this.context.canvas;
  const bbox = canvas.getBoundingClientRect();

  return {
    x: x - bbox.left * (canvas.width / bbox.width),
    y: y - bbox.top * (canvas.height / bbox.height),
  };
};

COREHTML5.Slider.prototype.mouseInTrough = function (mouse) {
  this.context.beginPath();
  this.context.rect(this.left, 0, this.right - this.left, this.bottom);

  return this.context.isPointInPath(mouse.x, mouse.y);
};

COREHTML5.Slider.prototype.mouseInKnob = function (mouse) {
  const position = this.knobPercentToPosition(this.knobPercent);
  this.context.beginPath();
  this.context.arc(
    position,
    this.context.canvas.height / 2,
    this.knobRadius,
    0,
    Math.PI * 2
  );

  return this.context.isPointInPath(mouse.x, mouse.y);
};

COREHTML5.Slider.prototype.knobPositionToPercent = function (position) {
  const troughWidth = this.right - this.left - 2 * this.knobRadius;
  return (position - this.left - this.knobRadius) / troughWidth;
};

COREHTML5.Slider.prototype.knobPercentToPosition = function (percent) {
  percent = Math.max(0, Math.min(1, percent));
  const troughWidth = this.right - this.left - 2 * this.knobRadius;
  return percent * troughWidth + this.left + this.knobRadius;
};

COREHTML5.Slider.prototype.fillKnob = function (position) {
  const context = this.context;

  context.save();

  context.shadowColor = this.KNOB_SHADOW_COLOR;
  context.shadowOffsetX = this.KNOB_SHADOW_OFFSET_X;
  context.shadowOffsetY = this.KNOB_SHADOW_OFFSET_Y;
  context.shadowBlur = this.KNOB_SHADOW_BLUR;

  context.beginPath();
  context.arc(
    position,
    this.top + (this.bottom - this.top) / 2,
    this.knobRadius,
    0,
    Math.PI * 2
  );
  context.clip();

  context.fillStyle = this.KNOB_FILL_STYLE;
  context.fill();
  context.restore();
};

COREHTML5.Slider.prototype.strokeKnob = function () {
  const context = this.context;

  context.save();
  context.lineWidth = 1;
  context.strokeStyle = this.KNOB_STROKE_STYLE;
  context.stroke();
  context.restore();
};

COREHTML5.Slider.prototype.drawKnob = function (percent) {
  percent = Math.max(0, Math.min(1, percent));

  this.knobPercent = percent;
  this.fillKnob(this.knobPercentToPosition(percent));
  this.strokeKnob();
};

COREHTML5.Slider.prototype.drawTrough = function () {
  this.context.save();
  this.trough.fillStyle = this.fillStyle;
  this.trough.strokeStyle = this.strokeStyle;
  this.trough.draw(this.context);
  this.context.restore();
};

COREHTML5.Slider.prototype.draw = function (percent) {
  this.context.globalAlpha = this.opacity;
  if (percent === undefined) {
    percent = this.knobPercent;
  }
  this.drawTrough();
  this.drawKnob(percent);
};

COREHTML5.Slider.prototype.erase = function () {
  this.context.clearRect(
    this.left - this.knobRadius,
    0 - this.knobRadius,
    this.context.canvas.width + 4 * this.knobRadius,
    this.context.canvas.height + 3 * this.knobRadius
  );
};

// Pan
COREHTML5.Pan = function (
  imageCanvas,
  image,
  viewportPercent = 10,
  panCanvasAlpha = 0.5
) {
  this.imageCanvas = imageCanvas;
  this.image = image;
  this.viewportPercent = viewportPercent;
  this.panCanvasAlpha = panCanvasAlpha;

  this.imageContext = this.imageCanvas.getContext("2d");
  this.panCanvas = document.createElement("canvas");
  this.panContext = this.panCanvas.getContext("2d");

  this.domElement = document.createElement("div");
  this.domElement.appendChild(this.panCanvas);

  if (image.width === 0 || image.height === 0) {
    image.onload = () => {
      this.initialize();
    };
  } else {
    this.initialize();
  }

  return this;
};

COREHTML5.Pan.prototype.initialize = function () {};

// COREHTML5.Pan.prototype. = function() {}
