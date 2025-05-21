let  gameNum = 25;
let guessNum;
while(guessNum!==gameNum){
    guessNum = parseInt(prompt("Enter a number"));
    if(guessNum>gameNum)
        console.log("Guess a smaller numer");
    else if(guessNum<gameNum)
        console.log("guess a bigger number");
}

console.log("Good guess!");