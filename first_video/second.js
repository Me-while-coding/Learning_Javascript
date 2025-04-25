let age = 24;
console.log(typeof age);
let price = 100.45;
let fullName = "Prachurjo Choudhuri";
let x;
let y = null;

// There are 7 primitive datatypes:

// number , string , boolean , Undefined , Null , BigInt , Symbol

// non-primitive datatypes also exist(like objects)

//Null is absence of object basically.Later details.

// Objects are collection of values basically.

// for a student :
//   name ----> string
//   age  ----> number
//   marks----> number
//  isPass----> boolean

//   key : value  pair is stored.

const student = {
  fullName: "Sagnik Roy",
  age : 19,
  percentage: 80.2,
  isPass: true,
};

console.log(student['age']);
console.log(student.age);
console.log(student.percentage);

student.percentage = student.percentage + 10; 
// assigning new value to an object key
console.log(student.percentage);
