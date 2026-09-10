const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let numero = Number(frm.inNumero.value)
    let divisores = 0;
    let soma = 0;
    let resposta2 = '';
    for(let i = 1; i< numero; i++){
        if(numero % i ==0){
            divisores += i + " ";
            soma +=i;
        }
    }
    if(soma == numero){
        resposta2 += `${numero} É um número perfeito`;
    }
    else{
        resposta2 += `${numero} não é um número perfeito`;
    }
    let resposta1 = `Divisores do ${numero}: ${divisores} (Soma:${soma})`;
    resp1.innerText = resposta1;
    resp2.innerText = resposta2; 
})