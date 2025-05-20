//print a statement 10 times
//for loop

// for (let i=1;i<=10;i++){

//     console.log("This is a loop");
// }
// console.log("Loop has ended");

//calculate sum of numbers 1 to n

let n = parseInt(prompt("Enter a number"));
let sum = 0;
for(let i=1; i<=n ;i++) /*i here is a block scope variable limited to for loop*/{
    console.log(`i = ${i}`);
    sum+=i;
}
console.log(`Sum of first ${n} natural numbers is ${sum}`);
