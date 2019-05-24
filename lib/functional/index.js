// const prop = (p, obj) => obj[p]
// const propRole = R.curry(prop)('role')
//
// const isWorker = s => s === 'worker'
// const getWorker = R.filter(R.pipe(propRole, isWorker))
//
// var data = [
//   {name: '张三', role: 'worker'},
//   {name: '李四', role: 'worker'},
//   {name: '王五', role: 'manager'}
// ]
//
// console.log(getWorker(data))

// let str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';
// let splitBySpace = s => s.split(' ')
// let getLength = w => w.length
// let getLengthArr = arr => R.map(getLength, arr)
// let getBiggerNumber = (a, b) => a > b ? a : b
// let fingBiggestNumber = arr => R.reduce(getBiggerNumber, 0, arr)

// let getLongestWordLength = R.pipe(
//   splitBySpace,
//   getLengthArr,
//   fingBiggestNumber
// )
// let getLongestWordLength = R.pipe(
//   R.split(' '),
//   R.map(R.length),
//   R.reduce(R.max, 0)
// )
// console.log(getLongestWordLength(str))

// const curry = function (fn) {
//
//   let len = fn.length
//   let args = [].slice.call(arguments, 1)
//
//   return function () {
//     let _args = args.concat([].slice.call(arguments))
//     if (_args.length < len) {
//       return curry.call(null, fn, ..._args)
//     }
//     return fn.apply(null, _args)
//   }
// }
//
// const add = (a, b, c, d) => a + b + c + d
// let addOne = curry(add)
// console.log(addOne(1)(2)(3)(4))

// function add () {
//   let _args = [].slice.call(arguments)
//
//   let _adder = function () {
//     _args.push(...arguments)
//     return _adder
//   }
//
//   _adder.toString = function () {
//     return _args.reduce((a, b) => a + b, 0)
//   }
//
//   return _adder
// }
//
// console.log(add(1))
// console.log(add(1)(2))
// console.log(add(1, 2)(3)(4))
// console.log(add(1)(2)(3)(4)(5)(6)(7))

// function batch (fn) {
//   return function (target, ...args) {
//     if (target.length >= 0) {
//       return Array.from(target).map(item => fn.apply(this, [item, ...args]))
//     } else {
//       return fn.apply(this, [target, ...args])
//     }
//   }
// }









console.log(R)
