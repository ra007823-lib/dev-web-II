// cria referêcia ao form e aos elementos h3 e h4

const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const reps2 = document.querySelector('h4');
// cria um 'ouvinte' 
frm.addEventListener("submit",(e)=>{
    const titulo  = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);
    const horas  = Math.floor(duracao / 60);
    const minutos = (duracao % 60);
    resp1.innerText = titulo;
    reps2.innerText = ` ${horas} hora(s) e ${minutos} minuto(s)`;
    e.preventDefault();

});
