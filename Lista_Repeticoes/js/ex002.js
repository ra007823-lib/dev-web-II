const frm = document.querySelector("form");
const resp =  document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let numero = Number(frm.inNumero.value);
    let ano = Number(frm.inAno.value);
    let resposta = "";
    let mult = numero;

    for(let i = 1;i <= ano; i++){
        if(i == 1){
            mult *= 2
        }
        else{
            mult *= 3  
        }
        resposta += `${i}° Ano: ${mult} Chinchilas \n`
    }
    resp.innerText = resposta
})