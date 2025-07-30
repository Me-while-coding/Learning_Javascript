
const populate = async (value,from_currency,to_currency,to_currencyName)=>{
    let myStr = ``;
 const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_BxqszVvYJUrGcudqOl1nQcKpsDF5MHP51PpTBSkV&base_currency="+from_currency;
 let response = await fetch(url);
 let rjson = await response.json();
 console.log(rjson);
 rjsonData = rjson["data"]
     myStr+=`<tr>
               <td>${to_currencyName}</td>
               <td>${rjsonData[to_currency]["code"]}</td>
               <td>${(rjsonData[to_currency]["value"] * value).toFixed(2)}</td>
             </tr>`
 
 const tableBody = document.querySelector("tbody");
 tableBody.innerHTML = myStr;
 document.querySelector(".output .wrong_input").style.display = "none";
 document.querySelector(".output .success").style.display = "block";
 
}

const btn = document.querySelector(".btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const value = parseFloat(document.querySelector("input[name='quantity']").value);
    console.log(value);
    const from_currency = document.querySelector("select[name='fromcurrency']").value;
    const to_currency = document.querySelector("select[name='tocurrency']").value;
    const to_currencySelect = document.querySelector("select[name='tocurrency']");
    const to_currencyName = to_currencySelect.options[to_currencySelect.selectedIndex].innerText;
    if(value>0.0 && !isNaN(value))
     populate(value,from_currency,to_currency,to_currencyName);
    else
     {
        document.querySelector(".output .wrong_input").style.display = "block";
        document.querySelector(".output .success").style.display = "none";
     }
})

