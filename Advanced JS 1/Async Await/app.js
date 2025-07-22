// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          console.log("Weather data");
//          resolve("success");
//         },2000);
        
//     });
// }

// async function getWeatherData(){
//     await api();
//     hello();
// }

function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataID);
            resolve("success");
        },2000);
    });
}

(async ()=>{
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");
    await getData(5);
})(); // immediately invoked function expression (IIFE)