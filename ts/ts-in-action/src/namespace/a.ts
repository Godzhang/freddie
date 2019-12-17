namespace Shape {
  const pi = Math.PI;
  export function circle(r: number) {
    return pi * r ** 2;
  }
  // 命名空间中导出的变量或函数不能重复声明
  // export function square(x: number) {
  //   return x * x;
  // }
  // export const b = 1;
}
