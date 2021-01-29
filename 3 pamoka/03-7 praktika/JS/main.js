let text = document.querySelector('#text');

let mainPic = document.querySelector('#mainPic');

let pic1 = document.querySelector('#pic1');
let pic2 = document.querySelector('#pic2');
let pic3 = document.querySelector('#pic3');
let pic4 = document.querySelector('#pic4');

pic1.addEventListener('click', function(){
    mainPic.setAttribute('src', 'IMG/kalnai.jpg');
    text.innerHTML = 'Kalnai';
});

pic2.addEventListener('click', function(){
    mainPic.setAttribute('src', 'IMG/balionai.jpg');
    text.innerHTML = 'Oro balionai';
});

pic3.addEventListener('click', function(){
    mainPic.setAttribute('src', 'IMG/road.jpg');
    text.innerHTML = 'Kelias';
});

pic4.addEventListener('click', function(){
    mainPic.setAttribute('src', 'IMG/dangus.jpg');
    text.innerHTML = 'Dangus';
});