let vowels = ['a','e','i','o','u'];

let str=(prompt("Enter a string")).toLowerCase();

function checkVow(j){
    let signal = 0;
    for(let vow of vowels){
        if(j === vow){
            signal++;
            break;
        }
    }
    if(signal>0)
        return true;
    else
        return false;
}

function noOfVow(inp){
    let nov=0;
    for(let i of inp){
          if(checkVow(i) === true)
            nov++;
    }
    return nov;
}

let result=noOfVow(str);
console.log(`number of vowels: ${result}`);

let arrowResult =(inp)=>{
    let nov=0;
    for(let i of inp){
          if(checkVow(i) === true)
            nov++
          }
    
    console.log("no. of vowels using arrow function:",nov);
}

arrowResult(str);