// interface Identities<V, M> {
//   value: V;
//   message: M;
// }

// function identity<T, U>(value: T, message: U): Identities<T, U> {
//   console.log(value + ": " + typeof value);
//   console.log(message + ": " + typeof message);
//   let identites: Identities<T, U> = {
//     value,
//     message,
//   };
//   return identites;
// }
// console.log(identity("zhangqi", 123));
// console.log(identity(13, "djfis"));

interface Generic<U> {
  value: U;
  getIdentity: () => U;
}
class GenericClass<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getIdentity(): T {
    return this.value;
  }
}
const g = new GenericClass(86);
console.log(g.getIdentity());
