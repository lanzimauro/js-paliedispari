//Verifica se una parola è palindroma.
//1. far inserire una parola all'utente.
//2. inverto la parola inserita.
//3. verifico se è palindroma o no.

var parolaInserita = prompt('Inserisci una parola').toLowerCase();
var parolaPalindroma = palindroma(parolaInserita);
console.log(parolaInserita);
console.log(parolaPalindroma);

if (parolaInserita == parolaPalindroma) {
    console.log('la parola è Palindroma');
} else {
    console.log('la parola non è Palindroma');
}

function palindroma(parola) {
    var parolaReverse = '';
    for (var i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i];
    }
    return parolaReverse;
}
