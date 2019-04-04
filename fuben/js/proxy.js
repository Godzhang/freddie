// function proxy (obj = {}) {
//   return new Proxy(obj, {
//       get (target, key, receiver) {
//           console.log(`getting ${ key }`)
//           return Reflect.get(target, key, receiver)
//       },
//       set (target, key, value, receiver) {
//           console.log(`setting ${ key } - ${ value }`)
//           return Reflect.set(target, key, value, receiver)
//       },
//       // 拦截key in obj操作
//       has (target, key) {
//           console.log(`has ${ key }`)
//           return Reflect.has(target, key)
//       },
//       // delete[key]
//       deleteProperty (target, key) {
//           console.log(`delete ${ key }`)
//           return Reflect.deleteProperty(target, key)
//       },
//       // Object.getOwnPropertyNames
//       // Object.getOwnPropertySymbols
//       // Object.keys
//       // for in
//       ownKeys (target) {
//           console.log(`ownKeys`)
//           return Reflect.ownKeys(target)
//       },
//       getOwnPropertyDescriptor (target, key) {
//         console.log(`getOwnPropertyDescriptor ${ key }`)
//         return Reflect.getOwnPropertyDescriptor(target, key)
//       },
//       // obj.defineProperty
//       // obj.defineProperties
//       defineProperty (target, key, propDesc) {
//         console.log(`defineProperty ${ key }`)
//         return Reflect.defineProperty(target, key, propDesc)
//       },
//       preventExtensions (target) {
//         console.log(`preventExtensions`)
//         return Reflect.preventExtensions(target)
//       },
         // Object.prototype.__proto__
         // Object.prototype.isPrototypeOf()
         // Object.getPrototypeOf()
         // Reflect.getPrototypeOf()
         // instanceOf
//       getPrototypeOf (target) {
//         console.log('getPrototypeOf')
//         return Reflect.getPrototypeOf(target)
//       },
//       setPrototypeOf (target) {
//         console.log('setPrototypeOf')
//         return Reflect.setPrototypeOf(target)
//       },
//       isExtensible (target) {
//         console.log('isExtensible')
//         return Reflect.isExtensible(target)
//       },
//       // fn(), fn.call(), fn.apply()
//       apply (target, context, args) {
//         console.log('apply')
//         return Reflect.apply(target, context, args)
//       },
//       // new Fn()
//       construct (target, args, newTarget) {
//         console.log('construct')
//         return Reflect.construct(target, args)
//       }
//   })
// }

// 监听get实现链式调用
// let pipe = (function () {
//   return function (value) {
//     let funcStack = []
//     let oproxy = new Proxy({}, {
//       get (pipeObject, fnName) {
//         console.log(pipeObject, fnName)
//         if (fnName === 'get') {
//           return funcStack.reduce((val, fn) => {
//             return fn(val)
//           }, value)
//         }
//         funcStack.push(window[fnName])
//         return oproxy
//       }
//     })

//     return oproxy
//   }
// }())

// var double = n => n * 2
// var pow = n => n * n
// var reverseInt = n => n.toString().split('').reverse().join('') | 0

// console.log(pipe(3).double.pow.reverseInt.get)

// 生成各种DOM节点
// const dom = new Proxy({}, {
//   get (target, property) {
//     return (attrs = {}, ...children) => {
//       let el = document.createElement(property)
//       for (let prop of Object.keys(attrs)) {
//         el.setAttribute(prop, attrs[prop])
//       }
//       for (let child of children) {
//         if (typeof child === 'string') {
//           child = document.createTextNode(child)
//         }
//         el.appendChild(child)
//       }
//       return el
//     }
//   }
// })

// let el = dom.div(
//   {
//     class: 'box'
//   },
//   'zhangqi',
//   dom.a({
//     href: 'http://www.baidu.com'
//   }),
//   dom.ul({},
//     dom.li({}, 'freddie'),
//     dom.li({}, 'mercury'))
// )

// console.log(el)

// get方法第三个方法指向自己
// let sp = new Proxy({}, {
//   get (target, key, receiver) {
//     return receiver
//   }
// })
// console.log(sp.a === sp)

////////////// set
// let handler = {
//   set (target, key, value, receiver) {
//     return Reflect.set(target, key, receiver)
//   }
// }
// let hp = new Proxy({}, handler)
// let myObj = {}
// Reflect.setPrototypeOf(myObj, hp)
// myObj.foo = 'bar'
// console.log(myObj.foo === myObj)

/////////// apply
// 1
// let target = () => 'I am the target'
// let handler = {
//   apply () {
//     return 'I am the proxy'
//   }
// }
// let proxy = new Proxy(target, handler)
// console.log(proxy())

// 2
// let twice = {
//   apply (target, context, args) {
//     return Reflect.apply(...arguments) * 2
//   }
// }
// function sum (left, right) {
//   return left + right
// }
// let proxy = new Proxy(sum, twice)
// console.log(proxy(1, 2))
// console.log(proxy.call(null, 1, 2))
// console.log(proxy.apply(null, [7, 8]))

///////////// has
// 1
// let handler = {
//   has (target, key) {
//     if (key[0] === '_') {
//       return false
//     }
//     return key in target
//   }
// }
// let target = { _prop: 'foo', prop: 'bar' }
// let proxy = new Proxy(target, handler)
// console.log('prop' in proxy)
// console.log('_prop' in proxy)

// 2
// 只对 in 生效，对 for in 无效
// let stu1 = {name: '张三', score: 59}
// let stu2 = {name: '李四', score: 99}

// let handler = {
//   has (target, key) {
//     if (key === 'score' && target[key] < 60) {
//       console.log(`${ target.name } 不及格`)
//       return false
//     }
//     return Reflect.has(target, key)
//   }
// }

// let op1 = new Proxy(stu1, handler)

// console.log('score' in op1)

// for (let a in op1) {
//   console.log(a)
// }
// console.log('--------------')
// let op2 = new Proxy(stu2, handler)

// console.log('score' in op2)

// for (let a in op2) {
//   console.log(a)
// }

///////////// construct
// let proxy = new Proxy(function () {}, {
//   construct (target, args, newTarget) {
//     console.log(`called: ${ args.join(', ') }`)
//     return { value: args[0] * 10 }
//   }
// })
// let p = new proxy(1, 2)
// console.log(p)

//////////// getPrototypeOf
// function Fn () {}
// let fn = new Fn()
// let p = new Proxy(fn, {
//   getPrototypeOf (target) {
//     console.log(target)
//     return Reflect.getPrototypeOf(target)
//   }
// })

// console.log(p instanceof Fn)

///////////////// ownKeys
// 1
// let target = { _bar: 'foo', _prop: 'bar', prop: 'baz' }
// let handler = {
//   ownKeys (target) {
//     return Reflect.ownKeys(target).filter(key => key[0] !== '_')
//   }
// }
// let proxy = new Proxy(target, handler)
// console.log(Object.keys(proxy))

// 2
// let target = {
//   a: 1,
//   b: 2,
//   c: 3,
//   [Symbol.for('secret')]: 4
// }
// Object.defineProperty(target, 'key', {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: 'static'
// })
// let handler = {
//   ownKeys (target) {
//     return ['a', 'd', Symbol.for('secret'), 'key']
//   }
// }
// let proxy = new Proxy(target, handler)
// console.log(Object.keys(proxy))
// console.log(Reflect.ownKeys(proxy))

///////////////////////// Proxy.revocable
// let target = {}
// let handler = {}

// let { proxy, revoke } = Proxy.revocable(target, handler)

// proxy.foo = 123
// console.log(proxy.foo)

// revoke()
// console.log(proxy.foo)

let target = new Date('2015-01-01')

let handler = {
  get (target, key) {
    console.log(target)
    if (key === 'getDate') {
      return target.getDate.bind(target)
    }
    return Reflect.get(target, prop)
  }
}

let proxy = new Proxy(target, handler)

console.log(proxy.getDate())












