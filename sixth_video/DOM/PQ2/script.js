let divs = document.querySelectorAll(".box");
let i=1;
let outerdiv = document.querySelector(".outer_box");
for(let div of divs){
    div.innerText = "unique value "+i
    i++;
}

let el = document.querySelector("#div1").nextSibling;
let j=1;
while(el){
    console.log(`${j}.${el.nodeName}`);
    el = el.nextSibling;
    j++;
}

console.dir(outerdiv.childNodes[0]);
