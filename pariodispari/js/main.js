//1. Far "scommettere" l'utente su pari o dispari.
//2. Far scegliere all'utente un numero da 1 a 5.
//3. Generare un numero random che sarà la "scelta" del computer.
//4. Sommare i due numeri
//4.1 e dichiarare chi ha vinto.

var scommessa = prompt('Scegli pari o dispari');
var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
var numeroRandom = generaRandomMinMax(1, 5);
var sommaNumeri = (numeroUtente + numeroRandom);
var risultato = pariDispari(sommaNumeri);
if (risultato === scommessa.toLowerCase()) {
    console.log('Hai vinto');
} else {
    console.log('hai perso');
}





function generaRandomMinMax(min, max) {
    var numeroRandom = Math.Floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}

function pariDispari (val) {
    if (val % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}
