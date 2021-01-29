let btn = document.querySelector('#btnEqual');

let sk1 = document.querySelector('#firstNumber');
let sk2 = document.querySelector('#secondNumber');
let form = document.querySelector('#form1');

btn.addEventListener('click', function () {
    if (sk1.value != '' && sk2.value != '') {
        form.setAttribute('onsubmit','return false');

        let sum = Number(sk1.value) + Number(sk2.value);
        document.getElementById('sum').innerHTML = sum;
    }
});
