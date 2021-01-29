let number = document.querySelector('#number');
let btn = document.querySelector('#btn');
let progressBar = document.querySelector('#progressBar');

btn.addEventListener('click', function () {
    if (number.value != '') {
        if (number.value > -1 && number.value < 40) {
            progressBar.setAttribute('class', 'progress-bar bg-danger');
            progressBar.setAttribute('style', 'width: ' + number.value + '%');
            number.value = '';
        } else if (number.value > 39 && number.value < 70) {
            progressBar.setAttribute('class', 'progress-bar bg-info');
            progressBar.setAttribute('style', 'width: ' + number.value + '%');
            number.value = '';
        } else if(number.value > 69 && number.value < 101){
            progressBar.setAttribute('class', 'progress-bar bg-success');
            progressBar.setAttribute('style', 'width: ' + number.value + '%');
            number.value = '';
        }
    }
});