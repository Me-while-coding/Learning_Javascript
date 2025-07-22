// API are systems which store collection of data and upon receiving requests,
//response and send the desired data...

//API = Application Programming Interface

const URL = "https://meowfacts.herokuapp.com/"

// let getFacts = async (id)=>{
//   console.log(`starting to fetch fact ${id}`);
//   let fact = document.querySelector("#li"+id);
//   let response =await fetch(URL);
//   let data = await response.json();
//   console.log(`finished fetching fact ${id}`);
//   fact.innerText = data.data[0];
  

// }

async function getFacts(id){
  console.log('starting to fetch fact',id);
  let fact = document.querySelector("#li"+id);
  return fetch(URL).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log("finished fetching fact",id);
    fact.innerText = data.data[0];
  })
}
// async function getAllFacts(){
//    await getFacts(1);
//    await getFacts(2);
//    await getFacts(3);
//    await getFacts(4);
//    await getFacts(5);
// }


let factButton = document.querySelector("#btn");
factButton.addEventListener("click",()=>{
  
  // getAllFacts();
   getFacts(1).then(()=>{
    return  getFacts(2);
  }).then(()=>{
    return getFacts(3)
  }).then(()=>{
    return getFacts(4);
  }).then(()=>{
    return getFacts(5);
  });
}
      
)