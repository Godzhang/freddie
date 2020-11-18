type Partial_copy<T> = {
  [P in keyof T]?: T[P];
};

type Required_copy<T> = {
  [P in keyof T]-?: T[P];
};

type Readonly_copy<T> = {
  readonly [P in keyof T]: T[P];
};

type Pick_copy<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record_copy<K extends keyof any, T> = {
  [P in K]: T;
};

type Exclude_copy<T, U> = T extends U ? never : T;

// 取交集
type Extract_copy<T, U> = T extends U ? T : never;

type Omit_copy<T, K extends keyof any> = Pick_copy<T, Exclude_copy<keyof T, K>>;

type NonNullable_copy<T> = T extends undefined | null ? never : T;

type Parameters_copy<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type ConstructorParameters_copy<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;

type ReturnType_copy<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type InstanceType_copy<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : never;

// 暂时不明白
type ThisType_copy<T> = {};

// interface Cat {
//   name: string;
//   age: number;
// }
// type Tc = ThisType_copy<Cat>
// const obj: ThisType_copy<Cat> = {
//   mimi() {
//     return this.name;
//   },
// };
// function fn(a: string): string[] {
//   return [a];
// }
// type RC = ReturnType_copy<typeof fn>;

// class Person {
//   private firstName: string;
//   private lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// type Ic = InstanceType_copy<typeof Person>;
// type Icd = InstanceType_copy<any>;
// type Cc = ConstructorParameters_copy<typeof Person>
// type Nc = NonNullable_copy<string | number | null>;
// type Ec = Exclude_copy<"a" | "b" | "c", "a" | "c">;

// interface Dog {
//   name: string;
//   age: number;
// }
// type Oc = Omit_copy<Dog, "name">;
// type RC = Record_copy<"name" | "age", string>;
// type A = Pick_copy<Dog, 'name'>
// type PCopy = Partial_copy<Dog>;
// type RCopy = Required_copy<PCopy>;
// type RC = Readonly_copy<PCopy>;

interface Test {
  name: string;
  age: number;
}

type Weaken<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? any : T[P];
};

interface Test2 extends Weaken<Test, "name"> {
  name: string | number;
}
