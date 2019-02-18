countAndSay = n => {
  // debugger;
  if (n === 1) {
    return '1'
  }
  var result = []
  result.push(1)
  var i = 2
  while (i <= n) {
    const temp = []
    for (let index = 0; index < result.length; index++) {
      const x = result[index]
      let count = 1
      while (index < result.length - 1 && result[index] === result[index + 1]) {
        count++
        index++
      }
      temp.push(count)
      temp.push(x)
    }
    result = temp.join('')
    i++
  }
  return result
}
var n = 3
console.log(countAndSay(n))
