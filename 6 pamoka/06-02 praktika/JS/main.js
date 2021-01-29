
function Book(pavadinimas, autorius, leidimoMetai, puslapiuSkaicius, kaina) {
    this.pavadinimas = pavadinimas;
    this.autorius = autorius;
    this.leidimoMetai = leidimoMetai;
    this.puslapiuSkaicius = puslapiuSkaicius;
    this.kaina = kaina;
}

let knyga = new Book('pavadinimas1', 'autorius1', 1989, 156, 8.99);
let knyga2 = new Book('pavadinimas2', 'autorius2', 1955, 123, 13);
let knyga3 = new Book('pavadinimas3', 'autorius3', 2001, 87, 4.99);

let knygos = [knyga, knyga2, knyga3];

function printAll() {
    knygos.forEach(knyga => console.log(knyga));
}

function incresePrice(amount) {
    knygos.forEach(knyga => knyga.kaina += knyga.kaina * amount / 100);
}

function filterBooks(pages) {
    knygos.forEach(knyga => {
        if (knyga.puslapiuSkaicius > pages) {
            console.log(knyga);
        }
    });
}
