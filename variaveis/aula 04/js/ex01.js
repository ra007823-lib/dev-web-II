const frm = document.querySelector('form');
const resp = document.querySelector("h3");
//cria um 'ouvinte' de envento, acionado quando o botão submit for clicado
frm.addEventListener("submit",(e)=> {
    const nome = frm.InNome.value; // obtem valor da cx de texto
    resp.innerText = `Olá ${nome}`;
    e.preventDefault();// evita o envio do form
})