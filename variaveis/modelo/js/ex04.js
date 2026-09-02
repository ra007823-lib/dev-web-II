const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");
const resp3 = document.querySelector("#outresp3");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const saque = Number(frm.inSaque.value);
    
    if(saque%10 != 0){
        alert("Valor inválido para notas disponiveis(R$10,00 / R$50,00 / R$100,00)")
        frm.inSaque.focus();
        return;
    }
    const notasCem = Math.floor(saque/100);
    let resto = saque%100
    const notasCiquenta = Math.floor(resto/50);
    resto = saque%50;   
    const notasDez = Math.floor(saque/10);

    if (notasCem> 0){
        resp1.innerText = `Notas de R$100,00 : ${notasCem}`;
    }
    if (notasCiquenta> 0){
        resp2.innerText = `Notas de R$50,00 : ${notasCiquenta}`;
    }
    if (notasDez> 0){
        resp3.innerText = `Notas de R$10,00 : ${notasDez}`;
    }
});

