let prices = [250,645,300,900,50];

let newPrice; let idx = 0;

for(let price of prices){
    newPrice = price*0.9;
    prices[idx] = newPrice;
    idx++;
}

console.log(prices);

