frm = document.querySelector("form");
resp = document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const velPerm = Number(frm.inPermitida.value);
    const velCond = Number(frm.inCondutor.value);
    if((velPerm + (velPerm*.2)) >= velCond){
        resp.innerText = "Multa Leve."
    }
    if((velPerm + (velPerm*.2)<=(velCond))){
        resp.innerText = "Multa Grave."
    }
    
})