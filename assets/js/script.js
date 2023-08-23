/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

let age = Number(prompt("Inserisci la tua età"))
let distance = Number(prompt("Inserisci i kilometri che devi percorrere"))

console.log(age, distance);

let price

if (age<18) {
    price = distance * 0.21 * 0.8
} else if (age>65) {
    price = distance * 0.21 * 0.6
} else {
    price = distance * 0.21
}

console.log(price);

let actualPrice = price.toFixed(2)

console.log(actualPrice);

document.getElementById("ticket").innerHTML = "Il prezzo del tuo biglietto è di " + actualPrice + " Euro";