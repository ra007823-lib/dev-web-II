const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const lado1 = Number(frm.inLado1.value);
    const lado2 = Number(frm.inLado2.value);
    const lado3 = Number(frm.inLado3.value);

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        resp1.innerText = "Os lados podem formar um triângulo.";

        if (lado1 === lado2 && lado2 === lado3) {
            resp2.innerText = "Triângulo Equilátero.";

        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            resp2.innerText = "Triângulo Isósceles.";

        } else {
            resp2.innerText = "Triângulo Escaleno.";
        }

    } else {
        resp1.innerText = "Os lados NÃO podem formar um triângulo.";
        resp2.innerText = "";
    }
});
