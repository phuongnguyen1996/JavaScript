// Input : "XIV"
// Return : 14

// Input : "XX"
// Output : 20
/**
 * tach tung ptu roi chuyen sang so roi cong don
 */
function convert (x) {
  switch (x) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    default:
      return 1000
  }
}
function check (roman) {
  for (let i = 0; i < roman.length; i++) {
    if (
      i + 1 < roman.length &&
      ((roman[i] === 'I' && (roman[i + 1] === 'X' || roman[i + 1] === 'V')) ||
        (roman[i] === 'X' && (roman[i + 1] === 'L' || roman[i + 1] === 'C')) ||
        (roman[i] === 'C' && (roman[i + 1] === 'D' || roman[i + 1] === 'M')))
    ) {
      return true
    }
  }
  return false
}
function result (roman) {
  if(check(roman)){
    var tmp = roman.split('')
    var res = tmp.map(acc => convert(acc))
    var sum = 0
    for (let i = 0; i < res.length; i++) {
      if (i + 1 < res.length && res[i] < res[i + 1]) {
        sum += res[i] * -1
      } else {
        sum += res[i]
      }
    }
    return sum
  }
  return 'input error'
}
console.log(result('MMXVX'))
