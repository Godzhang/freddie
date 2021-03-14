const defaultOptions = {
  spacing: 20,
  lineNum: 21,
  radius: 9,
  gridColor: "#bbb",
  endCallback: () => {},
};

class GoBang {
  constructor(options = {}) {
    options = Object.assign(defaultOptions, options);

    if (!options.canvas) {
      throw new Error("canvas Element is needed");
    }

    this.canvas = options.canvas;
    this.context = this.canvas.getContext("2d");

    this.boardSpacing = options.spacing;
    this.boardLinesNum = options.lineNum;
    this.chessRadius = options.radius;
    this.gridColor = options.gridColor;
    this.endCallback = options.endCallback;

    this.halfPadding = this.boardSpacing / 2;

    this.checkerboard = []; // 虚拟棋盘数据
    this.history = [];
    this.dustbin = [];
    this.mouse = { x: 0, y: 0 };

    this.currentStep = 0; // 已走的步数
    this.isOver = false; // 是否结束
    this.imageData = null; // 画布信息
    this.winnerId = 0; // 赢方棋子ID
    this.role = 1; // 1 为黑色，2为白色

    this.drawStartPos = 0.5; // 画线起始偏移量

    this.init();
  }

  init() {
    this.initCanvas();
    this.drawCheckerBoard();
    this.initBoardMatrix();
    this.initEvents();
    this.saveCanvasState();
  }

  initCanvas() {
    this.canvas.width = this.canvas.height =
      this.boardSpacing * this.boardLinesNum + 1;
  }

  drawCheckerBoard() {
    this.drawBoardGrid();
    this.drawCenterPoint();
  }

  drawBoardGrid() {
    const {
      context,
      halfPadding,
      drawStartPos,
      boardLinesNum,
      boardSpacing,
    } = this;

    context.save();
    context.lineWidth = 1;
    context.strokeStyle = this.gridColor;
    context.beginPath();

    context.translate(halfPadding, halfPadding);

    for (
      let i = 0, start = drawStartPos;
      i < boardLinesNum;
      i++, start += boardSpacing
    ) {
      context.moveTo(start, 0);
      context.lineTo(start, boardSpacing * (boardLinesNum - 1) + drawStartPos);
      context.stroke();
      context.moveTo(0, start);
      context.lineTo(boardSpacing * (boardLinesNum - 1) + drawStartPos, start);
      context.stroke();
    }
    context.restore();
  }

  drawCenterPoint() {
    const { context, halfPadding, boardLinesNum, boardSpacing } = this;
    const centerIndex = (boardLinesNum - 1) / 2;
    let posX = halfPadding + centerIndex * boardSpacing;
    let posY = halfPadding + centerIndex * boardSpacing;
    posX = posX % 2 === 0 ? posX + 0.5 : posX;
    posY = posY % 2 === 0 ? posY + 0.5 : posY;

    context.save();
    context.fillStyle = "#333";
    context.beginPath();
    context.arc(posX, posY, 3, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  initBoardMatrix() {
    const { checkerboard, boardLinesNum } = this;
    for (let i = 0; i < boardLinesNum; i++) {
      checkerboard[i] = [];
      for (let j = 0; j < boardLinesNum; j++) {
        checkerboard[i][j] = 0;
      }
    }
  }

  initEvents() {
    const {
      canvas,
      halfPadding,
      boardLinesNum,
      boardSpacing,
      checkerboard,
      history,
      mouse,
    } = this;
    const board_point_num = boardLinesNum - 1;

    canvas.addEventListener("click", (e) => {
      if (this.isOver) return;
      const { x, y } = windowToCanvas(canvas, e.clientX, e.clientY);
      const xIndex = Math.round((x - halfPadding) / boardSpacing);
      const yIndex = Math.round((y - halfPadding) / boardSpacing);
      if (
        checkerboard[xIndex][yIndex] !== undefined &&
        checkerboard[xIndex][yIndex] === 0
      ) {
        checkerboard[xIndex][yIndex] = this.role;

        const posX = halfPadding + xIndex * boardSpacing;
        const posY = halfPadding + yIndex * boardSpacing;
        this.drawChessman(posX, posY, this.role === 1);

        this.currentStep++;
        history.push({
          x: xIndex,
          y: yIndex,
          posX,
          posY,
          role: this.role,
        });

        if (this.checkResult(xIndex, yIndex, this.role)) {
          this.endCallback && this.endCallback(this.winnerId);
          this.isOver = true;
        }
        this.saveCanvasState();
        this.checkRole();
      }
    });
    canvas.addEventListener("mousemove", (e) => {
      if (this.isOver) return;
      const { x, y } = windowToCanvas(canvas, e.clientX, e.clientY);
      const xIndex = Math.min(Math.floor(x / boardSpacing), board_point_num);
      const yIndex = Math.min(Math.floor(y / boardSpacing), board_point_num);
      if (
        checkerboard[xIndex][yIndex] !== undefined &&
        checkerboard[xIndex][yIndex] === 0
      ) {
        this.putCanvasState();

        const posX = halfPadding + xIndex * boardSpacing;
        const posY = halfPadding + yIndex * boardSpacing;
        this.drawCrosshair(posX, posY);
        mouse.x = posX;
        mouse.y = posY;
      }
    });
    canvas.addEventListener("mouseleave", (e) => {
      this.putCanvasState();
    });
  }

  drawChessman(x, y, isBlack) {
    const { context, chessRadius } = this;
    const gradient = context.createRadialGradient(
      x,
      y,
      chessRadius,
      x - chessRadius / 2,
      y - chessRadius / 2,
      0
    );

    context.beginPath();
    context.arc(x, y, chessRadius, 0, Math.PI * 2);
    context.closePath();
    if (isBlack) {
      gradient.addColorStop(0, "#0a0a0a");
      gradient.addColorStop(1, "#636766");
    } else {
      gradient.addColorStop(0, "#d1d1d1");
      gradient.addColorStop(1, "#f9f9f9");
    }
    context.fillStyle = gradient;
    context.fill();
  }

  drawCrosshair(posX, posY) {
    const { context } = this;
    context.beginPath();
    context.fillStyle = "#aaa";
    context.arc(posX, posY, 5, 0, Math.PI * 2);
    context.fill();
  }

  checkResult(x, y, role) {
    if (x === undefined || y === undefined || role === undefined) return;
    const { checkerboard, boardLinesNum } = this;
    const maxPointIndex = boardLinesNum - 1;
    const YContinuous = checkerboard.map((row) => row[y]);
    const XContinuous = checkerboard[x];
    const S1Continuous = [];
    const S2Continuous = [];

    for (let i = 0; i < XContinuous.length; i++) {
      if (XContinuous[i] !== 0) {
        if (this.isFiveEuqal(XContinuous, i)) {
          return true;
        }
      }
    }
    for (let i = 0; i < YContinuous.length; i++) {
      if (YContinuous[i] !== 0) {
        if (this.isFiveEuqal(YContinuous, i)) {
          return true;
        }
      }
    }
    // 将落子两个斜向各扩展4个格位
    for (let i = x - 4, j = y - 4; i <= x + 4; i++, j++) {
      if (i >= 0 && i <= maxPointIndex && j >= 0 && j <= maxPointIndex) {
        S1Continuous.push(checkerboard[i][j]);
      }
    }
    for (let i = 0; i < S1Continuous.length; i++) {
      if (S1Continuous[i] !== 0) {
        if (this.isFiveEuqal(S1Continuous, i)) {
          return true;
        }
      }
    }
    // 判断另一个方向
    for (let i = x - 4, j = y + 4; i <= x + 4; i++, j--) {
      if (i >= 0 && i <= maxPointIndex && j >= 0 && j <= maxPointIndex) {
        S2Continuous.push(checkerboard[i][j]);
      }
    }
    for (let i = 0; i < S2Continuous.length; i++) {
      if (S2Continuous[i] !== 0) {
        if (this.isFiveEuqal(S2Continuous, i)) {
          return true;
        }
      }
    }
  }

  isFiveEuqal(arr, i) {
    const curr = arr[i];
    for (let j = i + 1, start = 0; start < 4; j++, start++) {
      if (arr[j] !== curr) return false;
    }
    this.winnerId = curr;
    return true;
  }

  // 补充棋盘
  suppleBoard(origin, firstStart, firstEnd, secondStart, secondEnd) {
    const { context, drawStartPos, gridColor } = this;
    context.save();
    context.strokeStyle = gridColor;
    context.translate(origin.x + drawStartPos, origin.y + drawStartPos);
    context.moveTo(firstStart.x, firstStart.y);
    context.lineTo(firstEnd.x, firstEnd.y);
    context.stroke();
    context.moveTo(secondStart.x, secondStart.y);
    context.lineTo(secondEnd.x, secondEnd.y);
    context.stroke();
    context.restore();
  }

  // 清除棋子
  clearPrevChess({ x, y, posX, posY }) {
    const { context, chessRadius, boardLinesNum } = this;
    context.clearRect(
      posX - chessRadius,
      posY - chessRadius,
      chessRadius * 2,
      chessRadius * 2
    );
    context.save();
    context.beginPath();
    if (x === 0 && y === 0) {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: 0, y: 0 },
        { x: chessRadius, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: chessRadius }
      );
    } else if (x === boardLinesNum - 1 && y === boardLinesNum - 1) {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: 0, y: 0 },
        { x: -chessRadius, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: -chessRadius }
      );
    } else if (x === 0 && y === boardLinesNum - 1) {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: 0, y: 0 },
        { x: chessRadius, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: -chessRadius }
      );
    } else if (x === boardLinesNum - 1 && y === 0) {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: 0, y: 0 },
        { x: -chessRadius, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: chessRadius }
      );
    } else if (x === 0) {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: 0, y: 0 },
        { x: chessRadius, y: 0 },
        { x: 0, y: chessRadius },
        { x: 0, y: -chessRadius }
      );
    } else if (x === boardLinesNum - 1) {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: 0, y: 0 },
        { x: -chessRadius, y: 0 },
        { x: 0, y: chessRadius },
        { x: 0, y: -chessRadius }
      );
    } else if (y === 0) {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: 0, y: 0 },
        { x: 0, y: chessRadius },
        { x: -chessRadius, y: 0 },
        { x: chessRadius, y: 0 }
      );
    } else if (y === boardLinesNum - 1) {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: 0, y: 0 },
        { x: 0, y: -chessRadius },
        { x: -chessRadius, y: 0 },
        { x: chessRadius, y: 0 }
      );
    } else {
      this.suppleBoard(
        { x: posX, y: posY },
        { x: -chessRadius, y: 0 },
        { x: chessRadius, y: 0 },
        { x: 0, y: -chessRadius },
        { x: 0, y: chessRadius }
      );
    }
    context.restore();
  }

  reset() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawCheckerBoard();
    this.initBoardMatrix();
    this.history = [];
    this.dustbin = [];
    this.role = 1;
    this.isOver = false;
    this.saveCanvasState();
  }

  repentance() {
    if (this.history.length === 0 || this.isOver) return;

    const prev = this.history.pop();
    this.dustbin.push(prev);

    this.clearPrevChess(prev);
    // 更改状态
    this.checkerboard[prev.x][prev.y] = 0;
    this.checkRole();
    this.currentStep--;

    this.saveCanvasState();
  }

  cancelRepentance() {
    if (this.dustbin.length === 0 || this.isOver) return;

    const last = this.dustbin.pop();
    this.history.push(last);

    this.drawChessman(last.posX, last.posY, last.role === 1);

    this.checkerboard[last.x][last.y] = last.role;
    this.checkRole();
    this.currentStep++;

    this.saveCanvasState();
  }

  checkRole() {
    this.role = this.role === 1 ? 2 : 1;
  }

  saveCanvasState() {
    this.imageData = this.context.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
  putCanvasState() {
    this.context.putImageData(this.imageData, 0, 0);
  }
}

// 客户端坐标转 canvas 坐标
function windowToCanvas(canvas, x, y) {
  const bbox = canvas.getBoundingClientRect();
  // 要考虑canvas画布大小和样式大小不一样时的坐标换算
  return {
    x: (x - bbox.left) * (canvas.width / bbox.width),
    y: (y - bbox.top) * (canvas.height / bbox.height),
  };
}
