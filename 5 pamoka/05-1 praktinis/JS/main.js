function random(pradzia, pabaiga) {
    let random = Math.floor(Math.random() * (pabaiga - pradzia + 1) + pradzia);
    return random;
}

let randomSk = random(0, 100);


let resultText = document.querySelector("#resultText");
let resultCount = document.querySelector("#resultCount");
let forma = document.querySelector("#forma");
let number = document.querySelector('#number');
let spejimai = 1;

let neteisingiSpejimai= [];


forma.addEventListener("submit", function(e) {
    e.preventDefault();
    let spejimas =e.target.elements.input.value;

    if (spejimas > randomSk) {
        resultText.textContent = "The guessed number is bigger!";
        resultCount.textContent =`${spejimai} guesses was done.`;
        spejimai++;
        
        neteisingiSpejimai = JSON.parse(localStorage.getItem('neteisingi'));
        if(neteisingiSpejimai == null){
            neteisingiSpejimai=[];
        }
        neteisingiSpejimai.push(spejimas);
        localStorage.setItem('neteisingi', JSON.stringify(neteisingiSpejimai));

    } else if (spejimas < randomSk) {
        resultText.textContent = "The guessed number is smaller!";
        resultCount.textContent =`${spejimai} guesses was done.`;
        spejimai++;

        neteisingiSpejimai = JSON.parse(localStorage.getItem('neteisingi'));
        if(neteisingiSpejimai == null){
            neteisingiSpejimai=[];
        }
        neteisingiSpejimai.push(spejimas);
        localStorage.setItem('neteisingi', JSON.stringify(neteisingiSpejimai));

    } else{
        resultText.textContent = "Congrats, you are right!";
        resultCount.textContent =`${spejimai} guesses was done.`;
        console.log(localStorage.getItem('neteisingi'));
        localStorage.clear();
    }
});
