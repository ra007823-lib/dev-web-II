const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];
frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nome = frm.inPaciente.value;
    pacientes.push(nome); // adiciona o nome no final da lista;
    let listas = ""
    pacientes.forEach((paciente,i)=>{
        listas += `${i+1}° - ${paciente} \n`;
    });
    respLista.innerText = listas;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
});

frm.btUrgencia.addEventListener("click",()=>{
    if(!frm.checkValidity()){
        alert("Infrome o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus();
        return
    }
    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);
    let listas = ''
    pacientes.forEach((paciente,i)=>{listas+=`${i+1}° - ${paciente} \n`});
    respLista.innerText = listas
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
});

frm.btAtender.addEventListener("click",()=>{
    //se o tamanho do vetor = 0
    if(pacientes.length==0){
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return
    }
    const atender = pacientes.shift()//remove o primeiro da fila do vetor
    respNome.innerText = atender
    let listas = ""
    pacientes.forEach((paciente,i)=>{(listas +=`${i+1}° - ${paciente}\n`)});
    respLista.innerText = listas
});