// The 32-bit integer 11 has binary representation

// 00000000000000000000000000001011
// so the function should return 3.

function binary (x) {
  var du = 0
  var dem = 0
  while (x > 0) {
    du = x % 2
    x = Math.floor(x / 2)
    if (du === 1) {
      dem++
    }
  }
  return dem
}
console.log(binary(3))
