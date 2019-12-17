// 声明合并

// 接口合并：内部函数重载顺序
// 1. 接口内部按上下
// 2. 后面的接口排在前面
// 例外：如果函数参数是字符串字面量，优先级最高
interface A {
  x: number;
  y: number;
  foo(bar: number): number; // 5
  foo(bar: "a"): number; // 2
}
interface A {
  y: number;
  foo(bar: string): string; // 3
  foo(bar: number[]): number[]; // 4
  foo(bar: "b"): number; // 1
}
let a: A = {
  x: 1,
  y: 2,
  foo(bar: any): any {
    return bar;
  }
};

// 命名空间和函数的合并
// 命名空间要定义在函数的后面
function Lib() {}
namespace Lib {
  export let version = "1.0.0";
}
console.log(Lib);
console.log(Lib.version);

// 命名空间和类的合并
// 命名空间要定义在类的后面
class C {}
namespace C {
  export let state = 1;
}
// 相当于给类增加了一个静态属性
console.dir(C.state);

// 命名空间和枚举的合并
// 相当于给枚举类型增加了一个方法
// 对命名空间定义位置没有限制

namespace Color {
  export function max() {}
}
enum Color {
  Red,
  Yellow,
  Blue
}
console.log(Color);
