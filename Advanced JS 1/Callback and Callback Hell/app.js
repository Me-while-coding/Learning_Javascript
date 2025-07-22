console.log("one");
console.log("two");
console.log("three");

// Above and previously written all the code in Javascript is synchronous 
//programming.This is basically executing the instructions in the sequence they have been written.A line of code is executed only after the previous line has been executed.

// Asynchronous programming : the code which takes time to be executed runs parallelly while the code after it keeps running and executing...

console.log(1);
console.log(2);
console.log(3);
setTimeout(()=>{
    // console.log("Hello after 4 seconds");
},4000);
console.log(4);
function sum(a,b){
    console.log(a+b);
}

function product(a,b){
    console.log(a*b);
}

function calculator(a,b,task){
    task(a,b);
}

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData)
         getNextData();
    },2000)
}
// callback hell(complex nested callbacks)
getData(1,()=>{
    console.log("getting data2...")
    getData(2,()=>{
        console.log("getting data3...")
        getData(3);
    });
});