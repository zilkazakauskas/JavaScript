let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let klase1 = document.getElementById('text1').getAttribute('class');
let klase2 = document.getElementById('text2').getAttribute('class');

text1.addEventListener('focus', function(){
    text1.setAttribute('class', klase1 + ' text1');
});

text1.addEventListener('blur', function(){
    text1.setAttribute('class', klase1);
});

text2.addEventListener('focus', function(){
    text2.setAttribute('class', klase2 + ' text2');
});

text2.addEventListener('blur', function(){
    text2.setAttribute('class', klase2);
});