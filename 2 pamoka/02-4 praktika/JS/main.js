let btnTop = document.querySelector('#btnTop');
let btnBottom = document.querySelector('#btnBottom');

let pavadinimasTop = document.querySelector('#pavadinimasTop');
let pavadinimasBottom = document.querySelector('#pavadinimasBottom');

btnTop.addEventListener('click', function(e){
    if(pavadinimasTop.classList.contains('pavadinimas1')){
    pavadinimasTop.setAttribute('class', '');
    }else{
        pavadinimasTop.setAttribute('class', 'pavadinimas1');
    }
});

btnBottom.addEventListener('click', function(){
    if(pavadinimasBottom.classList.contains('pavadinimas2')){
    pavadinimasBottom.setAttribute('class', '');
    }else{
        pavadinimasBottom.setAttribute('class', 'pavadinimas2');
    }
});