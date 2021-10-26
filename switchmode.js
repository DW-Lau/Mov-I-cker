const btnSwitch = document.querySelector(".switch");

const bndHeader=document.querySelector("header");
const clrSection=document.querySelector("section");
const clrFooter=document.querySelector("footer");


function night(){

    bndHeader.classList.remove("day");
    clrSection.classList.remove("day");
    clrFooter.classList.remove("day");

    bndHeader.classList.add("night");
    clrSection.classList.add("night");
    clrFooter.classList.add("night");

    btnSwitch.textContent="jour";
}
function day(){

    bndHeader.classList.remove("night");
    clrSection.classList.remove("night");
    clrFooter.classList.remove("night");

    bndHeader.classList.add("day");
    clrSection.classList.add("day");
    clrFooter.classList.add("day");

    btnSwitch.textContent="nuit";
}
btnSwitch.addEventListener("click",function(){
    if(bndHeader.className==="day"){
        night();
    }else{
        console.log("good night")
        day();
    }
});