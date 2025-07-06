let button = document.querySelector("button");
let i = 1;
let body = document.querySelector("body");
let toggleMode =()=>{
    if(i==1)
    {
        i=2;
        body.style.backgroundColor="black";
        button.setAttribute("class","dark");
        console.log("dark mode on")
        
    }
    else{
        i=1;
        body.style.backgroundColor="white";
         button.setAttribute("class","light");
        console.log("light mode on");
    }

}
button.addEventListener("click",toggleMode);