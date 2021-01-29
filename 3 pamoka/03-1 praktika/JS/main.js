function random(pradzia, pabaiga) {
    let random = Math.floor(Math.random() * (pabaiga - pradzia + 1) + pradzia);
    return random;
}

let randomSk = random(0, 100);


let resultText = document.querySelector("#resultText");
let resultCount = document.querySelector("#resultCount");
let forma = document.querySelector("#forma");
let spejimai = 1;


forma.addEventListener("submit", function(e) {
    e.preventDefault();
    let spejimas =e.target.elements.input.value;
    // console.log(randomSk);

    if (spejimas > randomSk) {
        resultText.textContent = "The guessed number is bigger!";
        resultCount.textContent =`${spejimai} guesses was done.`;
        spejimai++;
        
    } else if (spejimas < randomSk) {
        resultText.textContent = "The guessed number is smaller!";
        resultCount.textContent =`${spejimai} guesses was done.`;
        spejimai++;
    } else{
        resultText.textContent = "Congrats, you are right!";
        resultCount.textContent =`${spejimai} guesses was done.`;
    }
});

