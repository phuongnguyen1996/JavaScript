const fs = require('fs');
const users = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

// forEach
var arrFE = []
users.forEach((users) => {
    let res = `${users.first_name} ${users.last_name}`;
    arrFE.push(res);
})
console.log(arrFE);

// filter
var arrFT = []
users.filter((users) => {
    if(users.age<40){
        arrFT.push(users);
    }
})
console.log(arrFT);

// map
var arrM = users.map((users) => { return `${users.first_name} ${users.last_name}`; })
console.log(arrM);

// // Map cont
const newKeys = { first_name: "firstName", last_name: "lastName" };


// // reduce
var sum = users.reduce((average, a) => { 
    return average+a.age;
},0);
var res = sum/users.length;
console.log(res);

// reduce cont
    //ex1 - forEach
var ex1 = users.reduce((name, users) => {
    return name.concat(`${users.first_name} ${users.last_name}`);
},[]);
console.log(ex1);
    //ex2 - filter
var ex2 = users.reduce((age,users) => {
    let temp;
    if(users.age<40){
       temp = users; 
       age = age.concat(temp);
    }
    return age;
},[])
console.log(ex2);
    //ex4 - map cont

// Implement map
function map2(arr, transform) {
    let result = [];
    for (i of arr) {
        result.push(transform(i));
    }
    return result;
}
function transform(t){
    return `${t.first_name} ${t.last_name}`;
    
};
console.log("Implement map" + map2(users, transform));

// Implement filter
// function impFilter(arr) {
//     var res=[];
//     for (const i of arr) {
//         if(arr[i] < 40){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(impFilter(users.age));
// Implement reduce

//Using reduce
function suma(array){
    return array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue.id;
    },0);
}
console.log(suma(users));

function product(array){
    return array.reduce(function(accumulator, currentValue){
        return accumulator*currentValue.id;
    },1);
}
console.log(product(users));

function reverse(array){
    return array.reduce(function(accumulator, currentValue){
        accumulator.unshift(currentValue);
        return accumulator;
    },[]);
}
console.log(reverse(users));
