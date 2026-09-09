frm = document.querySelector("form");
resp = document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const velPerm = Number(frm.inPermitida.value);
    const velCond = Number(frm.inCondutor.value);
    if(velCond <= velPerm){
        resp.innerText = "Sem multa."
    }
    else if(velCond <= (velPerm + (velPerm*.2))){
        resp.innerText = "Multa leve."
    }
    else{
        resp.innerText = "Multa leve."
    }
    
})