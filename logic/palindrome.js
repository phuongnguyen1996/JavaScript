/**
 * You are given a string.
 * The only operation allowed is to insert characters in the beginning of the string.
 * How many minimum characters are needed to be inserted to make the string a palindrome string
 * Input: ABC
Output: 2

Input: AACECAAAA
Output: 2
 */
/**
 * ABC=>doi xung k?
 * XABC=> doi xung k?
 * XXABC=> true =>2
 */
function check (s) {
  var mid = Math.floor(s.length / 2)
  var count = 0
  if (s.length % 2 != 0) {
    let i = 1
    while (mid - i >= 0 && mid + i < s.length) {
      if (s[mid - i] === s[mid + i]) {
        count++
      }
      i++
    }
  } else {
    let i = 1
    while (mid - i >= 0 && mid + i < s.length) {
      if (s[mid] === s[mid + i]) {
        count++
      }
      mid--
      i++
    }
  }
  if (count != 0) {
    return true
  }
  return false
}
function palindrome (s) {
  if (check(s)) {
    return check(s)
  }
  var res = ''
  var count = 0
  var temp = ''
  for (let i = s.length-1; i >=0; i -= 1) {
    temp += s[i];
    res = temp+s;
    count++
    if(check(res)){
        return count
    }
  }
}
var s = 'abc'
console.log(palindrome(s))
