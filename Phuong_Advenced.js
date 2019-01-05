// Power Of Two Integers
function power (a) {
  for (var i = 2; i <= Math.sqrt(a); i++) {
    var p = i
    while (p <= a) {
      var x = p * i
      if (x === a) {
        return true
      }
      p++;
    }
  }
  return false
}
let a = 27
console.log(power(a))

// Verify Prime
function verifyPrime (x) {
  if (x === 0 || x === 1) {
    return false
  }
  var dem = 0
  for (let i = 2; i <= x; i++) {
    if (x % i === 0) {
      dem++
    }
  }
  if (dem > 1) {
    return false
  }
  return true
}
let x = 8
console.log(verifyPrime(x))

// //Prime Numbers
function primeNumbers (n) {
  var res = []
  for (let i = 2; i <= n; i++) {
    if (verifyPrime(i) === true) {
      res.push(i)
    }
  }
  return res
}
let n = 25
console.log(primeNumbers(n))
