// let hello: string = "hello Typescript";
// let app: HTMLDivElement | null = document.querySelector(".app");
// if (app) {
//   app.innerHTML = hello;
// }

// function greet(person: string): string {
//   return "hello " + person;
// }
// greet("zhangxiaoke");

// let u1: undefined = undefined;
// let u2: undefined = null;
// let n1: null = null;
// let n2: null = undefined;

// let num: number | null = 3;
// num = null;

// function error(message: string): never {
//   throw new Error(message);
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// declare function create(o: object | null): void;

// create({ name: "zhangxiaoke" });
// create([1, 2, 3]);
// create(null);
// create(1);

// 断言
// let someValue: any = "this is a string";
// let strLength:number = (<string>someValue).length
// let strLength: number = (someValue as string).length;

// let arr: [string, number];
// arr = ["zhangxiaoke", 30];
// arr[2];

// let arr: [number, number] = [1, 2];
// function fn([first, second]: [number, number]) {
//   return first + second;
// }
// fn(arr);

// let obj = { a: 1, b: 2 };
// let { a: a1, b: b1 }: { a: number; b: number } = obj;

// function fn({ a = "", b = 0 }: { a: string; b: number }) {}

// let a:number[] = [1,2,3,4]
// let ro: ReadonlyArray<number> = a
// ro[0] = 5

// interface Square {
//   color: string;
//   area: number;
// }
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }
// function createSquare(config: SquareConfig): Square {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// console.log(createSquare({ color: "red", width: 20, name: "zhangxiaoke" }));

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(src, sub) {
//   let result = src.search(sub);
//   return result > -1;
// };

// interface StringArray {
//   [index: number]: string;
// }
// let myArray: StringArray;
// myArray = ["zhangxiaoke", "zhangqi"];
// let mySrc: string = myArray[0];

// class Animal {
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }
// interface NotOkay {
//   [x: number]: Dog;
//   [x: string]: Animal;
// }

// interface NumberDictionary {
//   [index: string]: number;

//   length: number;
// }

// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["alice", "bob"];

// abstract class Department {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   printName(): void {
//     console.log("Deparntment name " + this.name);
//   }

//   abstract printMeeting(): void;
// }

// class AccountingDepartment extends Department {
//   constructor() {
//     super("Accounting ad Auditing");
//   }
//   printMeeting(): void {
//     console.log("the accounting department meets each Monday at 10am");
//   }
//   genterateReports(): void {
//     console.log("reports.......");
//   }
// }

// let department: Department;
// department = new AccountingDepartment();
// department.printMeeting();

// class Greeter {
//   static standardGreeting = "hello, there";

//   greeting: string | undefined;

//   constructor(message?: string) {
//     this.greeting = message;
//   }
//   greet() {
//     if (this.greeting) {
//       return `hello, ${this.greeting}`;
//     } else {
//       return Greeter.standardGreeting;
//     }
//   }
// }
// let greeter: Greeter;
// greeter = new Greeter();
// console.log(greeter.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "hey there";

// let g2: Greeter = new greeterMaker();
// console.log(g2.greet());

// let add: (baseValue: number, increment: number) => number = function(x, y) {
//   return x + y;
// };

// class A {
//   type: string;

//   onClickBad = (e: Event) => {
//     this.type = "jdfio";
//   };
// }

// 泛型变量
// function identity<T>(arg: T): T {
//   return arg;
// }
// let output = identity<string>('zhangxiaoke')
// let output = identity("zhangxiaoke");

// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);
//   return arg;
// }

// 泛型类型
// function identity<T>(arg: T): T {
//   return arg;
// }
// let myIdentity: <T>(arg: T) => T = identity;
// 泛型接口
// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }
// let myIdentity: GenericIdentityFn<number> = identity;
// 泛型类
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 23;
// myGenericNumber.add = (x, y) => x + y;
// 泛型约束
// interface Lengthwise {
//   length: number;
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// getProperty([123], 1);
// getProperty([123], "length");
// getProperty({ name: "zhangxiaoke" }, "name");

// function create<T>(c: { new (): T }): T {
//   return new c();
// }

// class BeeKeeper {
//   hasMask: boolean;
// }
// class LionKeeper {
//   nametag: string;
// }
// class Animal {
//   numLengs: number;
// }
// class Bee extends Animal {
//   keeper: BeeKeeper;
// }
// class Lion extends Animal {
//   keeper: LionKeeper;
// }
// function createInstance<T extends Animal>(c: new () => T): T {
//   return new c();
// }
// createInstance(Lion).keeper.nametag;
// createInstance(Bee).keeper.hasMask;

// 类型推断
// let x = [1, 2, null];
// x[2] = 3;

// class Animal {
//   numLengs: number;
// }
// class Bee extends Animal {}
// class Lion extends Animal {}
// let zoo: Animal[] = [new Bee(), new Lion()];

// window.onmousedown = function(e: any) {
//   console.log(e.clickTime);
// };

// 交叉类型
// function extend<T, U>(first: T, second: U): T & U {
//   let result = {} as T & U;

//   for (let key in first) {
//     result[key] = first[key] as any;
//   }
//   for (let key in second) {
//     if (!result.hasOwnProperty(key)) {
//       result[key] = second[key] as any;
//     }
//   }

//   return result;
// }
// class Person {
//   constructor(public name: string) {}
// }

// interface Loggable {
//   log(): void;
// }

// class ConsoleLogger implements Loggable {
//   log() {}
// }

// let jim = extend(new Person("zhangqi"), new ConsoleLogger());

// 联合类型
// function padLeft(value: string, padding: string | number) {
//   if (typeof padding === "number") {
//     return Array(padding + 1).join(" ") + value;
//   }
//   if (typeof padding === "string") {
//     return padding + value;
//   }
//   throw new Error("expected string or number");
// }
// padLeft("hello world", 123);

// 类型保护
// interface Bird {
//   fly();
//   layEggs();
// }
// interface Fish {
//   swim();
//   layEggs();
// }
// function getSmallPet(): Fish | Bird {}
// let pet = getSmallPet();

// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

// function isFish(pet: Fish | Brid): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }

// function isNumber(x: any): x is number {
//   return typeof x === "number";
// }
// function isString(x: any): x is string {
//   return typeof x === "string";
// }

// function padLeft(value: string, padding: string | number) {
//   if (isNumber(padding)) {
//     return Array(padding + 1).join(" ") + value;
//   }
//   if (isString(padding)) {
//     return padding + value;
//   }
//   throw new Error("expected string or number");
// }

// class Bird {
//   fly() {
//     console.log("brid fly");
//   }
//   layEggs() {
//     console.log("bird lay eggs");
//   }
// }
// class Fish {
//   swim() {
//     console.log("fish swim");
//   }
//   layEggs() {
//     console.log("fish lay eggs");
//   }
// }
// function getSmallPet(): Fish | Bird {
//   return Math.random() > 0.5 ? new Bird() : new Fish();
// }
// let pet = getSmallPet();

// if (pet instanceof Bird) {
//   pet.fly();
// }
// if (pet instanceof Fish) {
//   pet.swim();
// }

// function broken(name: string | null): string {
//   function postfix(epither: string) {
//     return name!.charAt(0) + ". the " + epither;
//   }
//   name = name || "Bob";
//   return postfix(name);
// }

// 字符串字面量类型
// type Easing = "ease-in" | "ease-out" | "ease-in-out";

// class UIElement {
//   animate(dx: number, dy: number, easing: Easing) {
//     if (easing === "ease-in") {
//     } else if (easing === "ease-out") {
//     } else if (easing === "ease-in-out") {
//     } else {
//     }
//   }
// }

// let button = new UIElement();
// button.animate(0, 0, "ease-in");
// button.animate(0, 0, null);

// 常量枚举，编译后会消失
// const enum Month {
//   Jan,
//   Feb,
//   Mar
// }

// let month = [Month.Jan, Month.Feb, Month.Mar];
// interface StringArray {
//   [index: number]: string;
// }
// let chars: StringArray = ["a", "b"];
// interface Names {
//   [x: string]: string;
// }
// let names: Names = { key: "zhanqi" };

// interface Add {
//   (x: number, y: number): number;
// }
// 类型别名
// type Add = (x: number, y: number) => number;
// let add: Add = (x, y) => x + y;

// 混合类型接口
// interface Lib {
//   (): void;
//   version: string;
//   doSomething(): void;
// }
// let lib: Lib = (() => {}) as Lib;
// (lib.version = "12"),
//   (lib.doSomething = function() {
//     console.log(1);
//   });

// abstract class Animal {
//   eat() {
//     console.log("eat");
//   }
//   abstract sleep(): void;
// }

// class Dog extends Animal {
//   name: string;
//   constructor(name: string) {
//     super();
//     this.name = name;
//   }
//   run() {}
//   sleep() {
//     console.log("dog sleep");
//   }
// }

// let dog = new Dog("wangwang");
// dog.eat();
// dog.sleep();

// class Cat extends Animal {
//   sleep() {
//     console.log("cat sleep");
//   }
// }
// let cat = new Cat();

// let animals: Animal[] = [dog, cat];
// animals.forEach(i => {
//   i.sleep();
// });

// class WorkFlow {
//   step1() {
//     console.log(this);
//     return this;
//   }
//   step2() {
//     console.log(this);
//     return this;
//   }
// }
// // new WorkFlow().step1().step2();

// class MyFlow extends WorkFlow {
//   next() {
//     console.log(this);
//     return this;
//   }
// }
// new MyFlow()
//   .next()
//   .step1()
//   .next()
//   .step2();

// 类类型接口, 约束类成员有哪些属性, 只能约束公有成员，也不能约束构造函数
// interface Human {
//   name: string;
//   eat(): void;
// }
// class Asian implements Human {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   eat() {}
//   sleep() {}
// }
//-----------------------------/
// interface Human {
//   name: string;
//   eat(): void;
// }
// interface Man extends Human {
//   run(): void;
// }
// interface Child extends Human {
//   cry(): void;
// }
// interface Boy extends Man, Child {}

// let boy: Boy = {
//   name: "zhangqi",
//   eat() {},
//   run() {},
//   cry() {}
// };

// 接口继承类
// class Auto {
//   state = 1;
//   private pri = "pri";
//   protected pro = "pro";
// }
// interface AutoInterface extends Auto {}
// // class C implements AutoInterface {
// //   state = 3;
// // }
// class Bus extends Auto implements AutoInterface {
//   show() {
//     console.log(this.pro);
//   }
// }

// new Bus().show();

// 泛型函数
// function logs<T>(value: T): T {
//   console.log(value);
//   return value;
// }
// logs<string>("zhangqi");
// logs<number>(123);
// logs<string[]>([""]);
// logs([""]);

// type Log = <T>(value: T) => T;
// let myLog: Log = value => {
//   console.log(value);
//   return value;
// };

// 泛型接口
// interface Log<T = string> {
//   (value: T): T;
// }
// let myLog: Log = value => {
//   console.log(value);
//   return value;
// };
// myLog("1");

// 泛型约束类，不能约束静态成员
// class Log<T> {
//   run(value: T) {
//     console.log(value);
//     return value;
//   }
// }
// let log1 = new Log<number>();
// log1.run(1);
// let log2 = new Log();
// log2.run(["jfoid"]);

// 泛型约束
// interface Length {
//   length: number;
// }
// // T 必须是拥有 length 属性的
// function log<T extends Length>(value: T): T {
//   console.log(value, value.length);
//   return value;
// }
// log("string");

// interface Foo {
//   bar: number;
// }

// let foo = {} as Foo;
// foo.bar = 1;

// window.onkeydown = (event: KeyboardEvent) => {
//   console.log(event.AT_TARGET);
// };

// 类型兼容性
// strictNullChecks 为 false 不会提示报错

// 字符型兼容null, null 是字符型的子类型
// let s: string = "a";
// s = null;

// 接口兼容性
// 原类型必须具备目标类型的必要属性，就可以进行赋值
// 成员少的兼容成员多的
// interface X {
//   a: any;
//   b: any;
// }
// interface Y {
//   a: any;
//   b: any;
//   c: any;
// }
// let x: X = { a: 1, b: 2 };
// let y: Y = { a: 1, b: 2, c: 3 };
// x = y
// y = x;

// 函数兼容性(一般发生在两个函数相互赋值的情况下，例如作为参数)
// type Handler = (a: number, b: number) => void;
// function hof(handler: Handler) {
//   return handler;
// }
//*********/ 一)参数个数（目标函数参数个数要多于原函数参数个数）
// let handler1 = (a: number) => {};
// hof(handler1)
// let handler2 = (a:number,b:number,c:number) => {}
// hof(handler2)

// 可选参数和剩余参数
// let a = (p1: number, p2: number) => {};
// let b = (p1?: number, p2?: number) => {};
// let c = (...args: number[]) => {};
// 1)固定参数可以兼容可选参数和剩余参数
// a = b
// a = c
// 2)可选参数不兼容固定参数和剩余参数
// b = a
// b = c
// 3)剩余参数可以兼容固定参数和可选参数
// c = a
// c = b

//*********/ 二)参数类型必须匹配
// let handler3 = (a: string) => {};
// hof(handler3);

// 如果是对象类型比较复杂
// interface Point3D {
//   x: number;
//   y: number;
//   z: number;
// }
// interface Point2D {
//   x: number;
//   y: number;
// }
// let p3d = (point: Point3D) => {};
// let p2d = (point: Point2D) => {};
// 参数个数多的兼容参数个数少的
// p3d = p2d;
// p2d = p3d;

//*********/ 三)返回值类型
// 目标函数返回值类型必须与原函数返回值类型相同 或为其子类型
// let f = () => ({ name: "alice" });
// let g = () => ({ name: "alice", location: "beijing" });
// 成员个数少的兼容成员个数多的
// f = g;
// g = f;

// 函数重载也要满足以上3点
// function overload(a: number, b: number): number;
// function overload(a: string, b: string): string;
// function overload(a: any, b: any): any {}

// 口诀
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的

//*********************** */
// 枚举兼容
// 枚举兼容和数值类型完全可以互相兼容
// enum Fruit {
//   Apple,
//   Banana
// }
// enum Color {
//   Red,
//   Yelloe
// }
// let fruit: Fruit.Apple = 3;
// let no: number = Fruit.Banana;
// 枚举之间完全不兼容
// let color: Color.Red = Fruit.Apple;

// 类兼容性
// 静态成员和构造函数不参与比较
// 如果都含有私有成员，就不能兼容了
// 如果只有一方有私有成员，没有的兼容有的
// class A {
//   constructor(p: number, q: number) {}
//   id: number = 1;
//   private name: string = "zhangqi";
// }
// class B {
//   static s = 1;
//   constructor(p: number) {}
//   id: number = 2;
//   private name: string = "zhangqi";
// }
// let aa = new A(1, 2);
// let bb = new B(1);
// aa = bb;
// bb = aa;
// 父类和子类实例可以兼容(父类有私有属性也可以兼容)
// class C extends A {}
// let cc = new C(1, 2);
// aa = cc;
// cc = aa;

// 泛型兼容性
// 只有 T 被使用的时候，才会影响兼容性
// interface Empty<T> {
//   value: T;
// }
// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2;
// obj2 = obj1;

// 泛型函数兼容性
// 定义相同，没有指定具体类型参数，可以兼容
// let log1 = <T>(x: T): T => {
//   console.log("x");
//   return x;
// };
// let log2 = <U>(y: U): U => {
//   console.log("y");
//   return y;
// };
// log1 = log2;
// log2 = log1;

// 类型保护
// enum Type {
//   Strong,
//   Week
// }

// class Java {
//   helloJava() {
//     console.log("hello Java");
//   }
//   java: any;
// }
// class JavaScript {
//   helloJavaScript() {
//     console.log("hello JavaScript");
//   }
//   javascript: any;
// }

// function isJava(lang: Java | JavaScript): lang is Java /** 类型位词 */ {
//   return (lang as Java).helloJava !== undefined;
// }

// function getLanguage(type: Type, x: string | number) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript();
// if (lang.helloJava) {
//   lang.helloJava();
// } else {
//   lang.helloJavaScript();
// }

// 第一种 instanceof
// if (lang instanceof Java) {
//   lang.helloJava();
// } else {
//   lang.helloJavaScript();
// }

// 第二种 in
// if ("java" in lang) {
//   lang.helloJava();
// } else {
//   lang.helloJavaScript();
// }

// 第三种 typeof
// if(typeof x === 'string') {
//   x.length
// } else {
//   x.toFixed()
// }

// 第四种 创建类型保护函数 -> (isJava)
//   if (isJava(lang)) {
//     lang.helloJava();
//   } else {
//     lang.helloJavaScript();
//   }
// }
// getLanguage(Type.Strong);

// 高级类型
// 交叉类型 - 将多个类型合为一个类型
// interface DogInterface {
//   run(): void;
// }
// interface CatInterface {
//   jump(): void;
// }
// let pet: DogInterface & CatInterface = {
//   run() {},
//   jump() {}
// };

// 下面为联合类型演示
// class Dog implements DogInterface {
//   run() {}
//   eat() {}
// }
// class Cat implements CatInterface {
//   jump() {}
//   eat() {}
// }

// enum Master {
//   Boy,
//   Girl
// }
// function getPet(master: Master) {
//   let pet = master === Master.Boy ? new Dog() : new Cat();
//   pet.eat();
//   return pet;
// }

// 联合类型使用公有属性做类型保护
// interface Square {
//   kind: "square";
//   size: number;
// }
// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }
// interface Cirle {
//   kind: "cirle";
//   r: number;
// }
// type Shape = Square | Rectangle | Cirle;
// function area(s: Shape) {
//   switch (s.kind) {
//     case "square":
//       return s.size * s.size;
//     case "rectangle":
//       return s.height * s.width;
//     case "cirle":
//       return Math.PI * Math.pow(s.r, 2);
//     default:
//       return ((e: never) => {
//         throw new Error(e);
//       })(s);
//   }
// }
// area({ kind: "cirle", r: 1 });

// 索引类型
// keyof T
// interface Obj {
//   a: number;
//   b: string;
// }
// let key: keyof Obj;
// key = "a";

// 索引访问操作符 T[K]
// let value: Obj["a"];

// T extends U

// 索引类型实例
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
//   return keys.map(key => obj[key]);
// }
// console.log(getValues(obj, ["a", "b"]));
// console.log(getValues(obj, ["d"]));

// 映射类型
// interface Obj {
//   a: string;
//   b: number;
//   c: boolean;
// }
// 以下为内置映射类型
// type ReadOnlyObj = Readonly<Obj>;
// type PartialObj = Partial<Obj>;
// type RequiredObj = Required<Obj>;
// type PickObj = Pick<Obj, "a" | "b">;
// type PartialPickObj = Partial<Pick<Obj, "a" | "b">>;
// type PickPartialObj = Pick<Partial<Obj>, "a" | "b">;

// 以上映射类型只会作用于已有属性
// 有些可以添加新属性
// type RecordObj = Record<"x" | "y", Obj>;

// 条件类型 -> 由条件表达式决定的类型
// T extends U ? X : Y
// type TypeName<T> = T extends string
//   ? "string"
//   : T extends number
//   ? "number"
//   : T extends boolean
//   ? "boolean"
//   : T extends undefined
//   ? "undefined"
//   : T extends Function
//   ? "function"
//   : "object";
// type T1 = TypeName<string>;
// type T2 = TypeName<string[]>;

// 分布式条件类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
// type T3 = TypeName<string | string[]>;
// 示例 -> 类型过滤
// type Diff<T, U> = T extends U ? never : T;
// type T4 = Diff<"a" | "b" | "c", "a" | "e">;
// 解释
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | 'b' | 'c'
// 'b' | 'c'

// 从 T 中过滤掉 undefined null
// type NotNull<T> = Diff<T, undefined | null>;
// type T5 = NotNull<string | number | undefined | null>;

// 内置实现
// Diff 等同于 Exclude<T,U>
// NotNull 等同于 NonNullable<T>

// type T6 = Extract<"a" | "b" | "c", "a" | "e">;

// ReturnType<T>
// type T7 = ReturnType<() => string>;

// 装饰器
// function f() {
//   console.log("f(): evluated");
//   return function(target, propertyKey: string, descriptor: PropertyDecorator) {
//     console.log("f(): called");
//   };
// }
// function g() {
//   console.log("g(): evluated");
//   return function(target, propertyKey: string, descriptor: PropertyDecorator) {
//     console.log("g(): called");
//   };
// }

// class C {
//   @f()
//   @g()
//   method() {}
// }

// 类装饰器
// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }
// @sealed
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return `Hello ${this.greeting}`;
//   }
// }

// function classDecorator<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     newProperty = "new property";
//     hello = "override";
//   };
// }

// @classDecorator
// class Greeter {
//   property = "property";
//   hello: string;
//   constructor(m: string) {
//     this.hello = m;
//   }
// }
// console.log(new Greeter("world"));

// 方法装饰器
// function enumerable(value: boolean) {
//   return function(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log(target);
//     console.log(propertyKey);
//     console.log(descriptor);
//     descriptor.enumerable = value;
//   };
// }

// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }

//   @enumerable(false)
//   greet() {
//     return `Hello ${this.greeting}`;
//   }
// }
// let g = new Greeter("djfi");

// 访问器装饰器
// class Point {
//   private _x: number;
//   private _y: number;
//   constructor(x: number, y: number) {
//     this._x = x;
//     this._y = y;
//   }

//   @configurable(false)
//   get x() {
//     return this._x;
//   }

//   @configurable(false)
//   get y() {
//     return this._y;
//   }
// }
// function configurable(value: boolean) {
//   return function(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.configurable = value;
//   };
// }

// 混入
// class Disposable {
//   isDisposed: boolean;
//   dispose() {
//     this.isDisposed = true;
//   }
// }
// class Activatable {
//   isActive: boolean;
//   activate() {
//     this.isActive = true;
//   }
//   deactivate() {
//     this.isActive = false;
//   }
// }
// class SmartObject implements Disposable, Activatable {
//   constructor() {
//     setInterval(() => {
//       console.log(`${this.isActive} : ${this.isDisposed}`, 500);
//     });
//   }

//   interact() {
//     this.activate();
//   }

//   isDisposed: boolean = false;
//   dispose: () => void;

//   isActive: boolean = false;
//   activate: () => void;
//   deactivate: () => void;
// }

// applyMixin(SmartObject, [Disposable, Activatable]);

// let smart = new SmartObject();
// setTimeout(() => smart.interact(), 1000);

// function applyMixin(derivedCtor: any, baseCtors: any[]) {
//   baseCtors.forEach(baseCtor => {
//     Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//       derivedCtor.prototype[name] = baseCtor.prototype[name];
//     });
//   });
// }
