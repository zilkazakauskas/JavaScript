let btnSmall = document.querySelector('#mazesnis');
let btnLarge = document.querySelector('#didesnis');

let img = document.querySelector('img');

btnSmall.addEventListener('click', function(){
    img.setAttribute('class', 'small');
});

btnLarge.addEventListener('click', function(){
    img.setAttribute('class','large');
});