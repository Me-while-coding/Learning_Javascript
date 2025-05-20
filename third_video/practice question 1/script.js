// print all even numbers from start value to end value
let start_value = parseInt(prompt("Enter start value"));
let end_value = parseInt(prompt("Enter end value"));

console.log(`all even numbers from ${start_value} to ${end_value} are :`);
for(let i=start_value;i<=end_value;i++){
    if(i%2==0){
        console.log(i);
    }
}