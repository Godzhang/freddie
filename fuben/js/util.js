define(function () {
  return {
    formatNum (n) {
      if (n < 10) return `0${n}`
      return n
    }
  }
})