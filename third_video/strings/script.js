// // Strings are sequence of characters used to represent text

// let str = "Prachurjo";
// console.log(str);
// // console.log("length of",str,":",str.length);
// let lastIndex = str.length - 1;
// console.log("characters in the string are:")
// for(let i=0;i<=lastIndex;i++){
  
// console.log(str[i]);


// }

// //template literals

// let obj = {
//     name:"Prachurjo",age:19
// };
// let output = `My name is ${obj.name} and my age is ${obj.age} years old`;
// console.log(output);

// //escape characters
// let str2 = "Prachurjo\nChoudhuri"
// console.log("Prachurjo\nChoudhuri");
// console.log(str2.length);
// let str3 = "Prachurjo\tChoudhuri ";
// console.log(str3);


// //string methods
// //These are built-in functions to manipulate a string
// let STR = str.toUpperCase();
// console.log(STR);
// let str2_in_lowercase = str2.toLowerCase();
// console.log(str2_in_lowercase);
// let trimmed_str3 = str3.trim();
// console.log(trimmed_str3);
// console.log(`length of "${str3}" string is ${str3.length}`);
// console.log(`length of trimmed string '${trimmed_str3}' is ${trimmed_str3.length}`);

//Strings are immnutable in javascript.(Cant be changed).Hence operations are performed in copies of it.

//Alternate UpperCase and LowerCase string
// let string = prompt("Enter your String");
// let lastIndexOfString = string.length - 1;
// let newString1="";
// let newString2="";
// for(let i=0;i<=lastIndexOfString;i++){
//      if(i%2==0){
//         newString1+=string[i].toUpperCase();
//         newString2+=string[i].toLowerCase();
//      } 
//      else{
//         newString1+=string[i].toLowerCase();
//         newString2+=string[i].toUpperCase();
//      }
// }
//     console.log("Result 1:",newString1);
//     console.log("Result 2:",newString2);

// let str = prompt("Enter your string");
// let start_val = parseInt(prompt("ENTER YOUR STARTING INDEX"));
// // let end_val = parseInt(prompt("ENTER YOUR ENDING INDEX"));
// let new_str = str.slice(start_val); //ending value is non-inclusive and optional
// console.log(new_str);

let str1 = "Hello";
console.log(str1.replace("lo","p"));
let str2 = "Hellolololo";
console.log(str2.replace("lo","p"));
console.log(str2.replaceAll("lo","p"));
console.log(str1.charAt(0));



