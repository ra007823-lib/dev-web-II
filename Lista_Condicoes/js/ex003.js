frm = document.querySelector("form");
resp1 = document.querySelector("#outResp1");
resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let tempo;
    let troco;
    const valor = Number(frm.inValor.value);

if (valor < 1.00) {
    resp1.innerText = "Valor Insuficiente";
} else if (valor < 1.75) {
    tempo = 30;
    troco = valor - 1.00;

    resp1.innerText = "Tempo: " + tempo + " minutos\n" 
    resp2.innerText= "Troco: R$ " + troco.toFixed(2);
} else if (valor < 3.00) {
    tempo = 60;
    troco = valor - 1.75;

    resp1.innerText = "Tempo: " + tempo + " minutos\n";
    resp2.innerText = "Troco: R$ " + troco.toFixed(2);
} else {
    tempo = 120;
    troco = valor - 3.00;

    resp1.innerText = "Tempo: " + tempo + " minutos\n";
    resp2.innerText = "Troco: R$ " + troco.toFixed(2);
}
});