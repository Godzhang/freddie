const random = Math.random;
const randomColor = () => {
  return {
    r: random() * 255,
    g: random() * 255,
    b: random() * 255,
    a: random() * 1,
  };
};

const createShader = (gl, type, source) => {
  // 创建着色器对象
  const shader = gl.createShader(type);
  // 将源码分配给着色器对象
  gl.shaderSource(shader, source);
  // 编译着色器程序
  gl.compileShader(shader);
  // 检查是否编译正常
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) return shader;
  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
};

const createShaderFromScript = (gl, type, scriptId) => {
  const sourceScript = document.getElementById(scriptId);
  if (!sourceScript) return null;

  return createShader(gl, type, sourceScript.innerHTML);
};

const createProgram = (gl, vertexShader, fragmentShader) => {
  // 创建着色器程序
  const program = gl.createProgram();
  // 将顶点着色器挂载在着色器程序上
  gl.attachShader(program, vertexShader);
  // 将片元着色器挂载在着色器程序上
  gl.attachShader(program, fragmentShader);
  // 链接着色器程序
  gl.linkProgram(program);
  // 检查是否正常
  const result = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (result) {
    console.log("着色器创建成功");
    return program;
  }
  let errorLog = gl.getProgramInfoLog(program);
  gl.deleteProgram(program);
  throw errorLog;
};
