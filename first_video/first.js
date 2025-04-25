// console.log("My name is Prachurjo.Hello!");
// console.log("This is my first Javascript code");
fullname = "Tony stark";
console.log(fullname);
age = 24;
console.log(age);
price = 99.50;
console.log(price);
x = null;
y = undefined;
console.log(x);
console.log(y);
// Javascript is a dynamically typed language which means you dont have to assign a datatype to a variable.You can store any datatype value in a variable and it will automatically update the storage and detect the datatype in runtime. 

// ' = ' is called an assignment operator in coding language.

//rules for naming variables:
// 1. case sensitive. ' A ' and 'a' are different.
fullname = "Prachurjo";
FULLNAME = "Partha";
console.log(fullname);
console.log(FULLNAME);
// 2. only letters , digits , underscore(_) and $  are allowed.
// 3.Digits are not allowed as first letter in the name.
// 4.Reserved words cant be used.
// example --->
// 'console' is a reserved word while 'Console' is not a reserved word.
Console = 25;
console.log(Console);

// NOT a rule but a convention : Camel Case
// first letter of first part is small and that of succeeding parts are Capital. Example:
isFollow = false;
totalPrice = 500;
fullName= "Prachurjo Choudhuri"; 

// There are three ways to declare a variable:

// a. var : lets you re-declare and update the variable.Example:

 var totalPrice = 200;
 var totalPrice = 300;
 var totalPrice = 400;
 console.log(totalPrice);

 // b. let : lets you update the variable but cant re-declare the variable.

 let gameName = "gta vice city";
  gameName = "project IGI";
  gameName = "deep sea explorer";
  console.log(gameName);

  // c. const : cant re-declare or update the value.It is fixed for eternity!

  const PI = 3.14;
  console.log(PI);

  //NOTE : let declaration doesnt need initialization.

  let a;
  console.log(a); // by default it prints undefined.

  let c;
  c = 10;
  console.log(c);

 // const declaration must be initialized.
 
 // ADDITIONAL STUFF:
 // var is global scope whereas let is block scope. { } is called block in coding.

 {
    let a = 10;  // ei a ta onno block er.
    console.log(a);
 }

 {
    let a = 78; // ei a ta onno block er
    console.log(a);
 }
