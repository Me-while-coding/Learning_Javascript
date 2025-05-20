//for of loops

let str = prompt("Enter a string");
let size = 0;

for(let i of str){ //iterator --> characters
    // console.log(`i = ${i}`);
        size++; //calculates size
    
}

console.log(`number of characters in "${str}" : ${size}`);