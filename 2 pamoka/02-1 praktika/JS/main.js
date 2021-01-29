let btnGreen = document.querySelector("#btnZalia");
let btnYellow = document.querySelector("#btnGeltona");
let btnRed = document.querySelector("#btnRaudona");

let p =document.querySelector("p");

btnGreen.addEventListener("click", function(){
    p.setAttribute("class", "zalia");
});

btnYellow.addEventListener("click", function(){
    p.setAttribute("class","geltona");
});

btnRed.addEventListener("click", function(){
    p.setAttribute("class","raudona");
});