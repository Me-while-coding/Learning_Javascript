// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve(1123);
//     console.log("promise has been resolved");
//     reject("some error occured");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data",dataId);
//         resol 
//         if(getNextData)
//          getNextData();
//     },7000);
//     });
    
// }

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         reject("error");
//     })
// };

// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fullfilled");
// });

// promise.catch(()=>{
//     console.log("Rejected");
// }); 

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("some data1");
            resolve("success");
         },4000);
    });
}
console.log("fetching data1...");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log("fetching data2...");
let p2 = asyncFunc2();
p2.then((res)=>{

});
    
});

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("some data2");
            resolve("success");
         },4000);
    });
}
