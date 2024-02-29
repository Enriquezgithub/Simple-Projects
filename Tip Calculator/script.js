const calculate = document.getElementById('calculate');

const total = document.getElementById('total');

//using function and then event
// function totalValue() {
//     const bill = document.getElementById('bill').value;
//     const tip = document.getElementById('tip').value;   
    
//     const cal = bill * (1 + tip /100);
//     total.innerHTML = `Total: P${cal.toFixed(2)}`;
// }

// calculate.addEventListener('click', totalValue)

//direct event
calculate.addEventListener('click', ()=>{
    const bill = document.getElementById('bill').value;
    const tip = document.getElementById('tip').value;
    
    const cal = bill * (1 + tip /100);
    total.innerHTML = `Total: P${cal.toFixed(2)}`;
})