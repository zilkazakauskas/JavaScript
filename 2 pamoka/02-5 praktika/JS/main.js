let form = document.querySelector('#form');
let btnComment = document.querySelector('#btnComment');
let btnSubmit = document.querySelector('#btnSubmit');

btnComment.addEventListener('click', function(){
    form.setAttribute('id', '');
});

btnSubmit.addEventListener('click', function(){
    if(document.getElementById('nameBox').value !== '' 
    && document.getElementById('commentBox').value !== ''){
    alert('Dekojame uz jusu nuomone!');
}
});
