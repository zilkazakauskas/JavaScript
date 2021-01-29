let btnDark= document.querySelector('#btnDark');
let btnColor= document.querySelector('#btnColor');

let img = document.querySelector('img');

btnDark.addEventListener('click', function(){
    img.setAttribute('class', 'dark');
});

btnColor.addEventListener('click', function(){
    img.setAttribute('class', 'color');
});