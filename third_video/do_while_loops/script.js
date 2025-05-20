let n = parseInt(prompt("Enter a number"));
let i=1 , sum = 0;
do{
    sum+=i;
    i++;
}while(i<=n);

console.log(`the sum of first ${n} natural numbers is ${sum}`);