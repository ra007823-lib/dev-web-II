const form  = document.querySelector('form');
const resp = document.querySelector('#a1');
const resp1 = document.querySelector('#a2');

form.addEventListener("submit", (e)=>{
    const nome = (form.inProduto.value);
    const preco = Number(form.inValor.value);
    const valor = (preco*3)- (preco *.16666);
    const valorp = (valor*.16666);
    resp.innerText = `Promoção de 3 un de ${nome} por R$${Math.round(valor)}!`;
    resp1.innerText = `O 3° produto sai por R$${Math.round(valorp.toFixed(2))}!`;
    e.preventDefault();
})