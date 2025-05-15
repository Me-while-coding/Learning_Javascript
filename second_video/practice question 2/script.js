let score = prompt("Enter your score");

if(score<=100 && score>=90){
    console.log("Grade : A");
}
else if(score<=89 && score>=70){
    console.log("Grade : B");
}
else if(score<=69 && score>=60){
    console.log("Grade : C");
}
else if(score<=59 && score>=50){
    console.log("Grade : D");
}
else if(score<=49 && score>=0){
    console.log("Grade : F");
}

else{
    console.log("Enter a valid score");
}