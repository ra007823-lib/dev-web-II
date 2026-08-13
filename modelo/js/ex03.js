const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// criando o ouvinte
frm.addEventListener("submit", (e) => {

    

    const veiculo = document.querySelector('#inVeiculo').value;
    const preco = Number(document.querySelector('#inPreco').value);
    const parc = Number(document.querySelector('#inParcelas').value);

    const entrada = preco * 0.5;
    const parcela = (preco * 0.5) / parc;

    resp1.innerText = "Promoção: " + veiculo;
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+ ${parc}x de R$ ${parcela.toFixed(2)}`;

    e.preventDefault();
    
});