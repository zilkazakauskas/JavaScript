let btn = document.querySelector('#submit');

let height = document.querySelector('#height');
let weight = document.querySelector('#weight');

let kmiValue = document.querySelector('#kmi');

btn.addEventListener('click', function () {
    if (height.value != '' && weight.value != '') {
        kmi = Number(weight.value) / Math.pow(((Number(height.value)) / 100), 2);
        kmiValue.innerHTML ='Jusu KMI yra: ' + kmi.toFixed(2);
    }
});