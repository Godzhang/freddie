define(['num'], num => {
  return {
    getRandom () {
      return parseInt(Math.random() * num)
    }
  }
})
