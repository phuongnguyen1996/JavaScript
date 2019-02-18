// x = 0,
// 00000000000000000000000000000000 (binary of 0)
// reverse =>  00000000000000000000000000000000
// return 0
// x = 3,
// 00000000000000000000000000000011 (binary of 3)
// reverse => 11000000000000000000000000000000
// return 3221225472
function binary (x) {
  var du = 0
  var res = []
  while (x > 0) {
    du = x % 2
    x = Math.floor(x / 2)
    res.push(du)
  }
  return res
}
function reversebit (res) {
  var num = 0
  var k = 31
  for (let i = 0; i < res.length; i++) {
    num += res[i] * Math.pow(2, k)
    k--
  }
  return num
}
console.log(binary(3))
console.log(reversebit(binary(3)))
