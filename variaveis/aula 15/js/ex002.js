const frm = document.querySelector("form");
const respDica = document.querySelector("#outDica");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const erros = []
const sorteado = Math.floor(Math.random()*100)+1;
const CHANCES = 6;
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    if(numero == sorteado){
        respDica.innerText=`Parabéns!! número sorteado ${sorteado}`
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe";
    }
    else{
        if(erros.includes(numero)){
            //se o número existe no vetor erros (já apostou)
            alert(`Vocẽ já apostou o número ${numero}. Tente outro...`);
        }
        else{
            //adiciona o número no vetor erros
            erros.push(numero);
            const numErros = erros.length;
            const numChanches = CHANCES - numErros;
            respErros.innerText= `${numErros} ${(erros.join(","))}`;
            respChances.innerText = numChanches;
            if(numChanches == 0){
                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe";
                respDica.innerText = `Game Over!! Número sorteado ${soreteado}`;
            }
            else{
                const dica = numero < sorteado?"maior":"menor";
                respDica.innerText= `Dica: tente um número ${dica} que o número ${numero}.`;
            }
        }

    }
    frm.inNumero.value = "";
    frm.inNumero.focus();
}) 
frm.btNovo.addEventListener("click",()=>{
    location.reload;
})