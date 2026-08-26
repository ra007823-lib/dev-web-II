const frm = document.querySelector("form");
const resp1 = document.querySelector("#inResp1");
const resp2 = document.querySelector("#inResp2");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nome = frm.inNome.value;
    const nota1 = frm.inNota1.value;
    const nota2 = frm.inNota2.value;

    const media = (nota1 + nota2)/2;

    resp1.innerText=`Média das notas ${media.toFixed(2)}`;

    if(media>=7){
        resp2.innerText=`parabéns ${nome}! Você foi aprovado(a)!`;
        resp2.style.color="green";
    }
    else if(media>=4){
        resp2.innerText=`antenção ${nome}! Você esta em exame!`;
        resp2.style.color="yellow";
    }
    else{
        resp2.innerText=`Ops ${nome}! Você foi reprovado(a)!`;
        resp2.style.color="red";
    }
})
