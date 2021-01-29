let btn = document.querySelector('#add');

let task = document.querySelector('#task');
let list = document.querySelector('#list');


btn.addEventListener('click', function () {
    if (task.value != '') {
        list.innerHTML =list.innerHTML + '<li>'+ task.value + '</li>';
        task.value = '';
    }
});