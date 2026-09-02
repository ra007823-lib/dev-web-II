frm = document.querySelector("form");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const n = Number(frm.inNumero.value);
    
    document.querySelector("h3").innerText = n %2==0 ? "o numero é par" : "o numero é impar";
    
})