// 如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，即函数的合成
// const compose = function () {
//   let args = arguments
//   let start = args.length - 1
//   return function () {
//     let i = start
//     let result = args[start].apply(this, arguments)
//     while(i--) {
//       result = args[i].call(this, result)
//     }
//     return result
//   }
// }

// let addTwo = num => num + 2
// let str = str => str + ''
// let split = str => str.split('')
//
// let fn = compose(split, str, addTwo)
// console.log(fn(2))

// let Container = function (x) {
//   this.__value = x
// }
// Container.of = x => new Container(x)
// Container.prototype.map = function (f) {
//   return Container.of(f(this.__value))
// }
//
// console.log(Container.of(1))





// 柯里化，就是把一个多参数的函数，转化为单参数函数

// 一般约定，函子的标志就是容器具有map方法，该方法将容器里面的每一个值，映射到另一个容器
class Functor {
  constructor (val) {
    this.val = val
  }
  map (f) {
    return new Functor(f(this.val))
  }
}
Functor.of = val => new Functor(val)

class Maybe extends Functor {
  constructor (val) {
    super(val)
  }
  map (f) {
    return this.val ? Maybe.of(f(this.val)) : Maybe.of(null)
  }
}
Maybe.of = val => new Maybe(val)

class Either extends Functor {
  constructor (left, right) {
    super()
    this.left = left
    this.right = right
  }
  map (f) {
    return this.right ? Either.of(this.left, f(this.right)) : Either.of(f(this.left), this.right)
  }
}
Either.of = (left, right) => new Either(left, right)

class Ap extends Functor {
  constructor (val) {
    super(val)
  }
  ap (F) {
    return Ap.of(this.val(F.val))
  }
}
Ap.of = f => new Ap(f)

class Monad extends Functor {
  join () {
    return this.val
  }
  flatMap (f) {
    return this.map(f).join()
  }
}
