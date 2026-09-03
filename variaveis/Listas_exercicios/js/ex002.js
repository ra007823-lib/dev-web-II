const form  = document.querySelector('form');
const resp = document.querySelector('h3');

form.addEventListener("submit", (e)=>{
    const valorh = Number(form.inValor.value);
    const tempo = Number(form.inTempo.value);
    const pagar = (valorh* tempo);
    resp.innerText = `Valor a pagar sera de R$${pagar.toFixed(2)}!`;
    e.preventDefault();
})