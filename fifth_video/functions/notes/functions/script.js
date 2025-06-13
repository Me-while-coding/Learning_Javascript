// // functions are blocks of code that perform a specific task and can be invoked when needed

// function myFunction(msg){ // msg ---> parameter

//     console.log(msg);
// }

// myFunction("Hello my friend");// argument

// Function to add two numbers

function sum(a,b){
    //a,b are local variables restricted to this block of code. 
    console.log(`${a} and ${b} are added`);
    s = a+b;
     return s;
     console.log("after return");
}

// let val = sum(3,4);
// console.log(val);

//ARROW FUNCTIONS

const arrowSum = (a,b)=>{
    console.log(a+b);
}

const arrowMultiply = (a,b)=>{
    console.log(a*b);
}

let printHello = ()=>{
    console.log("Hello");
}

// forEach method

let arr = [1,2,3,4,5,6];
//Callback functions are functions passed as argument to another functions.
//methods or functions which take other functions as parameters are called Higher order functions or methods.

arr.forEach((val,idx,arr)=>{console.log(val,idx,arr)});

// filter method
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let newArr = array.filter((val) => {return val%2==0});
console.log(newArr); 

//  reduce method
const output = newArr.reduce((res,curr)=>{return res+curr});
console.log(output); 


