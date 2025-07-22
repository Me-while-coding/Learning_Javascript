function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("success");
},2000)})}

    


console.log("getting data 1...");
getData(1).then(()=>{
    console.log("getting data2...");
     return getData(2);
}).then(()=>{
    console.log("getting data3...");
    return getData(3);
}).then(()=>{
    console.log("getting data4...");
    return getData(4);
});