/**
 * 1. Xét đoạn mảng arr[left…right] cần tìm kiếm phần tử x. Ta so sánh x với phần tử ở vị trí giữa của mảng(mid = (left + right)/2). Nếu:
 * 2. Nếu phần tử arr[mid] = x. Kết luận và thoát chương trình.
 * 3. Nếu arr[mid] < x. Chỉ thực hiện tìm kiếm trên đoạn arr[mid+1…right].
 * 4. Nếu arr[mid] > x. Chỉ thực hiện tìm kiếm trên đoạn arr[left…mid-1].
 */
// function arraySearch (arr, left, right, x) {
//   if (right >= left) {
//     var mid = Math.floor(left + (right - left) / 2)
//     if (arr[mid] == x) return mid
//     if (arr[mid] > x) return arraySearch(arr, left, mid - 1, x)
//     return arraySearch(arr, mid + 1, right, x)
//   }
//   arr.push(x)
//   arr.sort()
//   right = arr.length - 1
//   return arraySearch(arr, left, right, x)
// }
// var arr = [1, 3, 5, 6]
// var x1 = 2
// var x2 = 1
// var x3 = 4
// var x4 = 0
// console.log(arraySearch(arr, 0, arr.length - 1, x1))
// console.log(arraySearch(arr, 0, arr.length - 1, x2))
// console.log(arraySearch(arr, 0, arr.length - 1, x3))
// console.log(arraySearch(arr, 0, arr.length - 1, x4))
// console.log("acv")
function arraySearch (array, start, end, num) {
  let mid = Math.floor((start + end) / 2)
  // debugger;
  while (start <= end) {
    if (array[mid] == num) {
      return mid
    }

    if (array[mid] > num) {
      return arraySearch(array, 0, mid - 1, num)
    }

    if (array[mid] < num) {
      return arraySearch(array, mid + 1, end, num)
    }
  }

  if (end < start) {
    return mid + 1
  }
}
console.log(arraySearch([1, 3, 5, 6], 0, 3, 4))

// Matrix median
function matrixMedian (matrix) {
  debugger
  let min = +Infinity
  let max = -Infinity
  let s = Math.floor((matrix[0].length * matrix.length) / 2)
  for (let i = 0; i < matrix.length; i++) {
    min = Math.min(min, matrix[i][0])
    max = Math.max(max, matrix[i][matrix[i].length - 1])
  }
  var sum = 0
  for (let x = min; x <= max; x++) {
    let k = 0
    sum = 0
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].includes(x)) {
        k++
      }
      sum += arraySearch(matrix[i], 0, matrix[0].length - 1, x)
    }
    if (k > 0) {
      sum = sum + k
      if (sum > s) {
        return x
      }
    }
  }
}

var matrix = [[1, 1,1], [1, 1, 8], [1, 6, 9]]

console.log(matrixMedian(matrix))
// 1 1 2 2 3 4 6 8 9
