let nums = [3,45,68,91,234,564,67.49];

nums.forEach((val)=>console.log(val*val));

let newArr = nums.map((val)=>{return val**2});
console.log(newArr);