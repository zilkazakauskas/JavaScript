let img = document.querySelector('#image');
let imgBottom = document.querySelector('#imageBottom');

let btnLeft = document.querySelector('#left');
let btnRight = document.querySelector('#right');
let btnHidden = document.querySelector('#hidden');
let btnBottom = document.querySelector('#bottom');
let btnReset = document.querySelector('#reset');

btnLeft.addEventListener('click', function(){
    img.setAttribute('class','left');
});

btnRight.addEventListener('click', function(){
    img.setAttribute('class','right');
});

btnHidden.addEventListener('click', function(){
    img.setAttribute('class','hidden');
});

btnBottom.addEventListener('click', function(){
    img.setAttribute('class','hidden');
    imgBottom.setAttribute('class', 'normal');
});

btnReset.addEventListener('click', function(){
    img.setAttribute('class','normal');
    imgBottom.setAttribute('class', 'hidden');
});