const data = {
    name : "Prachurjo Choudhuri",
    course : "B-Tech CSE",
    university : "LPU",
    age : 19
};

const URL = "https://jsonplaceholder.typicode.com/posts";

async function sendData(){
   try{const response = await fetch(URL,{
    method : 'POST',
    headers : {'content-type' : 'application/json'

    },
    body : JSON.stringify(data)
    
   });
   const result = await response.json();
   console.log("success:",result);}
   catch(err){
    console.log("error in sending data :",err);
   }
}