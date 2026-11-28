// var msg = "Hello, World!"
// console.log(msg);

// var obj ={
//     name:"John",
//     age:30,
//     city:"New York"

// }
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);

var emp = require('./person.js');

var emp1 = new emp('Virat', 111, 'Dammam');
console.log(emp1.fullname());