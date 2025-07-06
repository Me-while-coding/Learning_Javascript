// The change in the state of an object is an event!

let button1 = document.querySelector("#button1");
// button1.onclick = (evt)=>{
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY)
 

// }
const handler3 = ()=>{
    console.log("button was clicked - handler 3")
}

button1.addEventListener("click",()=>{
    console.log("button was clicked - handler 1")
})
button1.addEventListener("click",()=>{
    console.log("button was clicked - handler 2")
})
button1.addEventListener("click",handler3)
button1.addEventListener("click",()=>{
    console.log("button was clicked - handler 4")
})

button1.removeEventListener("click",handler3);



let div = document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log("you are inside div");
        console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY) 

}