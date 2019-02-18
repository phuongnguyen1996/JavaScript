// // Exercise 01 setTimeOut
// setTimeout(function () {
//   console.log('Hello Fresher Academy')
// }, 1000)

// Exercise 02 setInterval
var count = 0
var abc = setInterval(function () {
  count += 1
  stopInterval(count)
  console.log('Hello Fresher Academy')
}, 3000)
function stopInterval (count) {
  if (count > 2) {
    clearInterval(abc)
  }
}

// Exercise 03: Event Loop
// function abc() {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2)
//   }, 1000);
//   setTimeout(function () {
//     console.log(3)
//   }, 0);
//   console.log(4);
// }
// abc();
//-> 1 4 3 2

// Exercise 04: Event Loop cont
// Case 1
// console.log("A");
// setImmediate(function() { console.log("B"); }, 0);
// setImmediate(function() { console.log("C"); }, 0)
// console.log("D");
// //-> ADBC

// // Case 2
// setTimeout(function() {
//   setTimeout(function() {
//     console.log('A');
//   }, 0);
// }, 0);

// setTimeout(function() {
//   console.log('B');
// }, 0);

// setTimeout(function() {
//   setTimeout(function() {
//     console.log('C');
//   }, 0);
// }, 10);

// setTimeout(function() {
//   console.log('D');
// }, 0);
// //->BDAC

// // Case 3
// var x = 'A';

// setTimeout(function() {
//   console.log(x);
//   x = 'B';
// }, 3);

// setTimeout(function() {
//   console.log(x);
//   x = 'C';
// }, 2);

// setTimeout(function() {
//   console.log(x);
//   x = 'D';
// }, 1);

// setTimeout(function() {
//   console.log(x);
// }, 4);
// //->ABCD

// // Case 4
// var t1 = setTimeout(function() {
//   console.log('A');
//   setTimeout(function() {
//     console.log('B');
//   }, 0);
// }, 100);

// var t2 = setTimeout(function() {
//   console.log('C');
//   setTimeout(function() {
//     console.log('D');
//   }, 0);
// }, 200);

// clearTimeout(t1);

// setTimeout(function() {
//   clearTimeout(t2);
// }, 250);
// //->ACBD

