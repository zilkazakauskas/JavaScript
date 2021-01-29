let skaicius = document.querySelector('#skaicius');
let veiksmas = document.querySelector('#veiksmas');
let btn = document.querySelector('#btn');

let btnIstorija = document.querySelector('#btnIstorija');
let btnRusiuoti = document.querySelector('#btnRusiuoti');
let irasuIstorija = document.querySelector('#irasuIstorija');
let btnClear = document.querySelector('#btnClear');

let tekstas = document.querySelector('#tekstas');
let likutis = document.querySelector('#likutis');

let balanse = 300;
let israsas = [];

//pagrindiniai veiksmai ir istorijos masyvo pildymas

btn.addEventListener('click', function () {
    if (skaicius.value > 0) {
        if (veiksmas.value == 'papildyti') {
            balanse += parseInt(skaicius.value);
            likutis.innerHTML = balanse;

            israsas = JSON.parse(localStorage.getItem('israsas'));
            if (israsas == null) {
                israsas = [];
            }
            israsas.push('+' + skaicius.value);
            localStorage.setItem('israsas', JSON.stringify(israsas));

        } else if (veiksmas.value == 'pasiimti' && balanse > 0) {
            balanse -= parseInt(skaicius.value);
            likutis.innerHTML = balanse;

            israsas = JSON.parse(localStorage.getItem('israsas'));
            if (israsas == null) {
                israsas = [];
            }
            israsas.push('-' + skaicius.value);
            localStorage.setItem('israsas', JSON.stringify(israsas));

        } else {
            alert('Nepakankamas likutis!');
        }
    }
});

//isveda operaciju istorija

btnIstorija.addEventListener('click', function(){
    israsas = JSON.parse(localStorage.getItem('israsas'));
    irasuIstorija.innerHTML = 'Įrašų istorija: ';
    israsas.map((item) => {
        const span = document.createElement('span');
        const textnode = document.createTextNode(item+' ');
        span.append(textnode);

        if (item < 0) {
            span.classList.add('red');
        } else if (item > 0) {
            span.classList.add('green');
        }

        irasuIstorija.appendChild(span);
    });
});

//rusiavimas

btnRusiuoti.addEventListener('click',function(){
    israsas = JSON.parse(localStorage.getItem('israsas'));
    israsas.sort(function(a, b){
        return a - b
    });
  irasuIstorija.innerHTML ='Įrašų istorija: ' +israsas;
});

//istorijos isvalymas

btnClear.addEventListener('click', function(){
    localStorage.clear();
    irasuIstorija.innerHTML = 'Įrašų istorija: tuscia'
});