// Largest number
function largestNumber (nums) {
  var max = Math.max.apply(Math, nums)
  var n = max.toString().length
  var res = []
  var temp = []
  var s = []
  if (max === 0) {
    return 0
  }
  for (let i = 0; i < nums.length; i++) {
    var x = nums[i].toString()
    var k = n - x.length
    if (nums[i] != max) {
      for (let j = 0; j < k; j++) {
        let m = x % 10
        x = x + m
      }
      x = Number(x)
      temp.push(x)
      s.push(x)
    } else {
      temp.push(Number(max))
      s.push(Number(max))
    }
  }
  s.sort()
  s.reverse()
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (s[i] === temp[j]) {
        res.push(nums[j])
        temp.splice(j, 1)
        nums.splice(j, 1)
        break
      }
    }
  }
  return res.join('')
}
var nums = [9, 99, 98, 998, 9997]
console.log(largestNumber(nums))

// Merge Sort
function merge (arr) {
  if (arr.length == 1) {
    return arr
  }
  var middle = Math.floor(arr.length / 2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle)
  return sort(merge(left), merge(right))
}
function sort (left, right) {
  var res = []
  var indexLeft = 0
  var indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      res.push(left[indexLeft])
      indexLeft++
    } else {
      res.push(right[indexRight])
      indexRight++
    }
  }
  return res.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
var arr = [12, 4, 10, 6, 11, 7, 3]
console.log(merge(arr))

// Quick Sort
function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  } else {
    var left = []
    var right = []
    var p = arr.pop()
    var res = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= p) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  }
  return res.concat(quickSort(left), p, quickSort(right))
}
var arr = [10, 7, 8, 9, 1, 5]
console.log(quickSort(arr))

// Rotate matrix
function rotate (matrix) {
  const n = matrix.length
  const x = Math.floor(n / 2)
  const y = n - 1
  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      k = matrix[i][j]
      matrix[i][j] = matrix[y - j][i]
      matrix[y - j][i] = matrix[y - i][y - j]
      matrix[y - i][y - j] = matrix[j][y - i]
      matrix[j][y - i] = k
    }
  }
  return matrix
}
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(matrix))

// Hotel Bookings Possible
function booking (arrival, departure, k) {
  var i = 1
  var count = 0
  var j = 0;
  while (i < arrival.length) {
    if (arrival[i] < departure[j]) {
      count++;
    }
    else{
      j++;
    }
    i++;
  }
  if (count >= k) {
    return false
  }
  else{
    return true
  }
}
var Arrivals = [1, 3, 5];
var Departures = [2, 6, 8]
var k = 1;
console.log(booking(Arrivals, Departures, k));

// Set Matrix Zeros
function setZeroes (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = matrix[0].length - 1; j > 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

var result = [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 2, 9]]
console.log(setZeroes(result))
