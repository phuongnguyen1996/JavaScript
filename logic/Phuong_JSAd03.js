// Binary Representation
function binary (num) {
  if (num === 1) {
    return '1'
  }
  if (num === 0) {
    return '0'
  }
  return parseInt(num, 10).toString(2)
  // return binary(Math.floor(num/2)) + num%2;
}
var n = 6
console.log(binary(n))

// Excel Column Number
function excel (s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    res = res * 26 + (s.charCodeAt(i) - 64)
  }
  return res
}
console.log(excel('ACZ'))

// Trailing Zeros in Factorial
function factorial (n) {
  if (n == 0) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(8))
var res = factorial(8)
function zeros () {
  var count = 08
  while (res > 0) {
    var t = res % 10
    if(t===0){
      count++;
    }
    res = Math.floor(res / 10)
  }
  return count;
}
console.log(zeros())
