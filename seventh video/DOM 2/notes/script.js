// let div = document.querySelector("#box");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let paragraph = document.querySelector(".para");
// let classofP = paragraph.getAttribute("class");
// console.log(classofP);
// paragraph.setAttribute("class","newClass");

// div.style.backgroundColor = "purple";
// div.style.fontSize = "20px";
// div.innerText = "Hello!";

// let newButton = document.createElement("button"); 
// newButton.innerText = "Click me!";
// console.dir(newButton);
// div.append(newButton);
// div.prepend(newButton);
// div.before(newButton);
// div.after(newButton);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi , I am new here!</i>"
// document.querySelector("body").prepend(newHeading);

// newHeading.remove();
// paragraph.remove();

// let parentDiv = document.querySelector(".parent");
// let newChild = document.createElement("div");
// newChild.innerText = "child4";
// newChild.setAttribute("class","child4");
// parentDiv.appendChild(newChild);
// let removedChild = parentDiv.removeChild(document.querySelector(".child2"));
// console.dir(removedChild);

//PRACTICE QUESTIONS 
//ONE

let newButton = document.createElement("button");
newButton.innerText = "Click me";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
let body = document.querySelector("body");
body.prepend(newButton);

let para = document.querySelector(".content");
para.classList.add("newClass"); // adds a new class
console.log(para.classList)































