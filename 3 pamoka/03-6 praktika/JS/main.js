let btn = document.querySelector('.btn');

let idOfSelect = document.querySelector('#id_of_select');
let container = document.querySelector('.container');

btn.addEventListener('click', function () {
    if (idOfSelect.value == '1') {
        container.setAttribute('id', 'spring');
    } else if (idOfSelect.value == '2') {
        container.setAttribute('id', 'summer');
    } else if (idOfSelect.value == '3') {
        container.setAttribute('id', 'autumn');
    } else if (idOfSelect.value == '4') {
        container.setAttribute('id', 'winter');
    } else {
        return false;
    }
});