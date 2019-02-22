/**
 *  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
* Duyet arr
1. neu ptu != (*-/+) thi pust vao mang temp
2. nguoc lai:
2.1 neu la + thi ktra temp co bn ptu?
        neu >1 ptu thi result += tong 2 phan tu cuoi cua temp
        neu <=1 thi result = result+ ptu cua temp
2.2 neu la - thi ktra temp co bn ptu?
        neu >1 ptu thi result += hieu 2 phan tu cuoi cua temp
        neu <=1 thi result = result - ptu cua temp
2.3 neu la * thi ktra temp co bn ptu?
        neu >1 ptu thi result += tich 2 phan tu cuoi cua temp
        neu <=1 thi result = result * ptu cua temp
2.4 neu la + thi ktra temp co bn ptu?
        neu >1 ptu thi result += thuong 2 phan tu cuoi cua temp
        neu <=1 thi result = result / ptu cua temp
 */
// function check (arr) {
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/') {
//       count++
//     }
//   }
//   if (count === 0) {
//     return false
//   }
//   return true
// }
var arr = ["4", "13", "5", "/", "+"]
function a (arr) {
  console.log(arr)
  var temp = []
  var result = 0
  for (let i of arr) {
    if (i != '+' && i != '-' && i != '*' && i != '/') {
      temp.push(i)
    } else {
      if (i === '+') {
        if (temp.length > 1) {
          result += Number(temp.pop()) + Number(temp.pop())
        } else {
          result += Number(temp.pop())
        }
      }
      if (i === '-') {
        if (temp.length > 1) {
          result += -Number(temp.pop()) + Number(temp.pop())
          result += -Number(temp.pop())
        }
      }
      if (i === '*') {
        if (temp.length > 1) {
          result += Number(temp.pop()) * Number(temp.pop())
        } else {
          result = result * Number(temp.pop())
        }
      }
      if (i === '/') {
        if (temp.length > 1) {
          result += 1/Number(temp.pop()) * Number(temp.pop())
        } else {
          result = result / Number(temp.pop())
        }
      }
    }
  }
  return Math.floor(result);
}

console.log(a(arr))
