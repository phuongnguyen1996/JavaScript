/**
 * String.subString - locate a substring (needle) in a string (haystack).
Returns the index of the first occurrence of substring in string, or -1 if substring is not part of string.
 * Input: "a", "aba"
Output: 0

Input: "a", "bbc"
Output: -1
 */
/**
 * Cach 1: so sanh lan luot mau voi chuoi
 * 1. loop strLon, index i
 * 2. voi moi i, loop strCon, index j
 * 3. neu strCon[j]===strLon[i]=> i++, j++
 * 4. neu != => i++, j=0;
 * 5. neu j>=strCon.length-1; tra ve i-strCon.length
 * 6. not found => -1
 */
function subStr (strMe, strCon) {
  var i=0, j=0;
  for (i = 0; i < strMe.length; i++) {
    let x=i;
    for(j=0; j<strCon.length;j++){
      if (strCon[j] === strMe[x]) {
        x++
      } else {
        break
      }
    }
    if (j === strCon.length) {
      return x - j
    }
  }
  return -1
}
console.log(subStr("abcdddddefesdsfgddf","def"));
