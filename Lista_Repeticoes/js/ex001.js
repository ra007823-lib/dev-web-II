const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let fruta = frm.inFruta.value;
    let numero = Number(frm.inNumero.value);
    let resposta = "";

    for (let i = 0; i < numero; i++) {
        if (i == 0){ 
            resposta += fruta; 
        } else { 
            resposta += " * " + fruta; 
        }
    }
    resp.innerText = resposta;
});
