// interface MySetStructure {
//   has(value: number): boolean;
//   add(value: number): this;
// }

// class MySet {
//   has(value: number): boolean {
//     return true;
//   }
//   add(value: number): this {
//     return this;
//   }
// }

// class MyMap<K, V> {
//   constructor(initialKey: K, initialValue: V) {}
//   get(key: K): V {}
//   set(key: K, value: V): void {}
//   merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {}
//   static of<K2, V2>(k: K2, v: V2): MyMap<K2, V2> {}
// }

// type ClassConstructor<T> = new (...args: any[]) => T;

class A {
  protected constructor() {}
}
class B extends A {}
// new A()
