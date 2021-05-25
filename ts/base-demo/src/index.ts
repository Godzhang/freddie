let numbers = {
  *[Symbol.iterator]() {
    for (let i = 0;i<=5;i++) {
      yield i;
    }
  }
}
for (let n of numbers) {
  console.log(n)
}

console.log([...numbers])

const [one, two, ...rest] = numbers
console.log(one, two, rest)

const arr = [1,2,3]
console.log(arr[Symbol.iterator])