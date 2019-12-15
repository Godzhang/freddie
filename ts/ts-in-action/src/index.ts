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
