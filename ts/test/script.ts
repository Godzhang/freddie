export const foo = 123;
export type someType = {
  foo: string;
};
namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function err(msg) {
    console.error(msg);
  }
}
namespace A {
  export const b = Utility.log;
}
