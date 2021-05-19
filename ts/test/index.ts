// interface Motorcycle {
//   vType: "motorcycle";
//   make: number;
// }

// interface Car {
//   vType: "car";
//   transmission: number;
// }

// interface Truck {
//   vType: "truck";
//   capacity: number;
// }

// type Vehicle = Motorcycle | Car | Truck;

// function evaluatePrice(vehicle: Vehicle) {
//   switch (vehicle.vType) {
//     case "car":
//       return vehicle.transmission * Math.PI;
//     case "truck":
//       return vehicle.capacity * Math.PI;
//     case "motorcycle":
//       return vehicle.make * Math.PI;
//   }
// }

// interface X {
//   c: string;
//   d: string;
// }
// interface Y {
//   c: number;
//   e: string;
// }
// type XY = X & Y;
// type YX = Y & X;

// let p: XY;
// let q: YX;

// p = { c: '6', d: "d", e: "e" }; // c: number & string

// interface D {
//   d: boolean;
// }
// interface E {
//   e: string;
// }
// interface F {
//   f: number;
// }

// interface A {
//   x: D;
// }
// interface B {
//   x: E;
// }
// interface C {
//   x: F;
// }

// type ABC = A & B & C;

// let abc: ABC = {
//   x: {
//     d: false,
//     e: "e",
//     f: 1,
//   },
// };

// class Person {
//   fullName;
//   firstName;
//   lastName;

//   constructor(fullName: string) {
//     this.fullName = fullName;
//     this.firstName = fullName.split(" ")[0];
//     this.lastName = fullName.split(" ")[0];
//   }
// }

// function addPerson(...args: [name: string, age: number]): void {
//   console.log(`name: ${args[0]}, age: ${args[1]}`);
// }

// interface Identities<V, M> {
//   value: V;
//   message: M;
// }

// function identity<T, U>(value: T, message: U): Identities<T, U> {
//   return { value, message };
// }
// identity(68, "sdf");

// interface Length {
//   length: number;
// }

// function identity<T extends Length>(arg: T): T {
//   let len = arg.length;
//   return arg;
// }
// identity('68')

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// interface Dictionary<T = any> {
//   [key: string]: T;
// }
// type StrDict = Dictionary<string>;

// type DictMember<T> = T extends Dictionary<infer V> ? V : never;
// type StrDictMember = DictMember<StrDict>;

// interface Point {
//   x: number;
//   y: number;
// }
// interface PointConstructor {
//   new (x: number, y: number): Point;
// }
// class Point2D implements Point {
//   readonly x: number;
//   readonly y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// function newPoint(
//   pointConstructor: PointConstructor,
//   x: number,
//   y: number
// ): Point {
//   return new pointConstructor(x, y);
// }
// let p = newPoint(Point2D, 1, 2);

// class FirstClass {
//   id: number | undefined;
// }
// class GenericCreator<T> {
//   create<T>(c: { new (): T }): T {
//     return new c();
//   }
// }
// const creator = new GenericCreator<FirstClass>();
// let firstClass: FirstClass = creator.create(FirstClass);

// type ParamType<T> = T extends (param: infer P) => any ? P : T;

// interface User {
//   name: string;
//   age: number;
// }
// type Func = (user: User) => void;

// type Param = ParamType<Func>
// type AA = ParamType<string>

type ConstructorParameters_copy_2<
  T extends new (...args: any[]) => any
> = T extends new (...args: infer P) => any ? P : never;
type InstanceType_copy_2<
  T extends new (...args: any[]) => any
> = T extends new (...args: any[]) => infer R ? R : any;

class TestClass {
  constructor(public name: string, public age: number) {}
}

type Params = ConstructorParameters_copy_2<typeof TestClass>;
type Instance = InstanceType_copy_2<typeof TestClass>;
