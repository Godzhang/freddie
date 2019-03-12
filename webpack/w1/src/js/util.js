const util = {
  add (a, b) { return a + b },
  reduce (a, b) { return a - b },
  isType (question, ...types) {
    return types.includes(question.type)
  }
}

export default util
