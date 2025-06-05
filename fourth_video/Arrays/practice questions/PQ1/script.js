let marks = [85,97,44,37,76,60];
 
let total = 0;
for(let i of marks){
    total+=i;
}

let avg = total/marks.length;
console.log("average:",avg);