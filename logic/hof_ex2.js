// const fs = require('fs');
// const users = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
// Ex 2.1
function identify (a) {
  return a
}
var a = 4
// console.log(identify(a))

// Ex 2.2
function add (a, b) {
  return a + b
}
function sub (a, b) {
  return a - b
}
function mul (a, b) {
  return a * b
}
var a = 5

var b = 2
// console.log(add(a, b))
// console.log(sub(a, b))
// console.log(mul(a, b))

// Ex2.3
function identifyf (a) {
  return function () {
    return a
  }
}
var four = identifyf(4)
// console.log(four())

// Ex2.4
function addf (x) {
  return function (y) {
    return x + y
  }
}
// console.log(addf(3)(4))

// Ex2.5
function liftf (bin) {
  return function (a) {
    return function (b) {
      return bin(a, b)
    }
  }
}
// console.log(liftf(add)(3)(4))
// console.log(liftf(mul)(5)(6))

// Ex2.6
function curry (fn, a) {
  return function (b) {
    return fn(a, b)
  }
}
var add3 = curry(add, 3)
// console.log(add3(4))
// console.log(curry(mul,5)(6));

// Ex2.7

// Ex2.8
function twice (fn) {
  return function unary (a) {
    return fn(a, a)
  }
}
// console.log(add(11, 11)); // 22
// var doubl = twice(add);
// console.log(doubl(11)); // 22
// var square = twice(mul);
// console.log(square(11)); // 121

// Ex2.9
function reverse (fn) {
  return function binary (x, y) {
    return fn(y, x)
  }
}
var bus = reverse(sub)
// console.log(bus(3,2));

// Ex2.10
function doubl (a) {
  return a + a
}
function square (doubl) {
  return doubl * doubl
}
function composeu (fn1, fn2) {
  return function bin (a) {
    return fn2(fn1(a))
  }
}
// console.log(composeu(doubl, square)(3)); // 100
// doubl(5) => 5 + 5 = 10
// square(10) => 100

// Ex2.11
function composeb (fn1, fn2) {
  return function bin (a, b, c) {
    return fn2(fn1(a, b), c)
  }
}
// console.log(composeb(add, mul)(2, 3, 7)); // 35
// add(2, 3) => 5
// mul(5, 7) => 35

// Ex2.12
function limit (fn, nums) {
  let count = nums
  return function (a, b) {
    count--
    if (count >= 0) {
      return fn(a, b)
    }
    return undefined
  }
}
var addLimited = limit(add, 2)
// console.log(addLimited(3, 4)); // 7
// console.log(addLimited(3, 5)); // undefined
// console.log(addLimited(4, 5)); // undefined

// Ex2.13
function from (val) {
  return function () {
    return val++
  }
}
var index = from(0)
// console.log(index()); // 0
// console.log(index()); // 1
// console.log(index()); // 2

// Ex2.14
function to (fn, endvalue) {
  let count = fn()
  return function () {
    if (count >= endvalue) {
      return undefined
    }
    count++
    return fn() - 1
  }
}
var index = to(from(1), 3)
// console.log(index()); // 1
// console.log(index()); // 2
// console.log(index()); // undefined
// console.log(index()); // undefined

// Ex2.15
function fromTo (start, end) {
  let count = start
  return function () {
    if (count >= end) {
      return undefined
    }
    count++
    return start++
  }
}
var index = fromTo(0, 3)
// console.log(index()) // 0
// console.log(index()) // 1
// console.log(index()) // 2
// console.log(index()) // undefined

// Ex2.16
function element (arr, fna) {
  return function () {
    return arr[fna()]
  }
}
var ele = element([1, 2, 3, 4], fromTo(1, 3))
// console.log(ele()); // 2 => index 1
// console.log(ele()); // 3 => index 2
// console.log(ele()); // undefined => index 3

// Ex2.17
function element1 (arr) {
  let i = 0
  return function () {
    return arr[i++]
  }
}
var ele = element1([1, 2, 3, 4])
console.log(ele()) // 1
console.log(ele()) // 2
console.log(ele()) // 3
console.log(ele()) // 4
console.log(ele()) // undefined

// Ex2.18
function collect (fn1, arr) {
  return function () {
    let val = fn1()
    if (val != undefined) {
      arr.push(val)
    }
    return val
  }
}
var array = []
var col = collect(fromTo(0, 2), array)
console.log(col()) // 0
console.log(col()) // 1
console.log(col()) // undefined
console.log(array) // [0, 1]

// Ex2.19
/* function filter (fn1, fn2) {
  return () => {
    let i = fn1()
    if (fn2(i)) {
      return i
    } else {
      i = fn1()
      return i
    }
  }
}
var fil = filter(fromTo(0, 5), function even (value) {
  return value % 2 === 0
})
console.log(fil()) // 0
console.log(fil()) // 2
console.log(fil()) // 4
console.log(fil()) // undefined */

// Ex2.20
function concat (fn1, fn2) {
  return function () {
    let res = fn1()
    if (res != undefined) {
      return res
    } else {
      res = fn2()
      return res
    }
  }
}
var con = concat(fromTo(0, 3), fromTo(0, 2))
console.log(con()) // 0
console.log(con()) // 1
console.log(con()) // 2
console.log(con()) // 0
console.log(con()) // 1
console.log(con()) // undefined

// Ex2.21
function gensymf(s) {
  let count = 0;
  return function () {
    count++;
    return s+count;
  }
}
var genG = gensymf('G');
var genH = gensymf('H');
console.log(genG()); // G1
console.log(genG()); // G2
console.log(genH()); // H1
console.log(genH()); // H2

// Ex2.22

// Ex2.23
function fibonaccif(a,b) {
  let count=0;
  return function(){
    count++;
    if(count===0){
      return a;
    }
    if(count===1){
      return b;
    }
    return sum(count);
  }
}
function sum(num){
  return (num-1)+(num-2);
}
var fib = fibonaccif(0, 1); // must by fibonaccif(0, 1)
console.log(fib()); // 0
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5

// Ex2.24
// Ex2.25
// Ex2.26
// Ex2.27
// Ex2.28

// Ex2.29
function liftg (bin) {
  let acc
  function rec (n) {
    if (n === undefined) {
      return acc
    }
    if (acc === undefined) {
      acc = n
    } else {
      acc = bin(acc, n)
    }
    return rec // returnsion
  }
  return rec
}
