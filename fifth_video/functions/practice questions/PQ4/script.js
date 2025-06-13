let n = prompt("Enter a number");
let arr = [];

for(let i=1;i<=n;i++){
    arr.push(i);

}

console.log(arr);

let sum = arr.reduce((prev,curr)=>{return prev+curr});
let prod = arr.reduce((prev,curr)=>{return prev*curr});

console.log(`sum = ${sum} , product = ${prod}`);