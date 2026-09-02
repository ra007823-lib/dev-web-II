frm = document.querySelector("form");
resp = document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const n = Number(frm.inNumber.value);
    const resp.innerText= n %2==0 ? "o numero é par" : "o numero é impar"
    resp
    
})