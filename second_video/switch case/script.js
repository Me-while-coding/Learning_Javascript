let a = parseFloat(prompt("enter first number!"));
let b = parseFloat(prompt("enter second number!"));
let op = prompt("Enter an operator(+,-,/,%,*)!");
let result;

switch (op) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "/":
    result = a / b;
    break;
  case "*":
    result = a * b;
    break;
  case "%":
    result = a % b;
    break;
    default:
        console.log("Not a valid operator");
        result = "cant be defined";
}

console.log(`${a} ${op} ${b} = ${result}`);
