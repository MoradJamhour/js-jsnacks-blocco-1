// L'utente deve inserire 2 parole. Prima verrà stampata la piu corta poi la piu lunga


// Imput parole
var word1 = prompt("Please insert the first number").trim();

var word2 = prompt("Please insert the second number").trim();

//Controllo parole
if (word1.length < word2.length) {
  document.getElementById('result').innerHTML = word1 + " (" + word1.length + " characters)" + " is shorter than " + word2 + " (" + word2.length + " characters)";
}

if (word2.length < word1.length) {
  document.getElementById('result').innerHTML = word2 + " (" + word2.length + " characters)" + " is shorter than " + word1 + " (" + word1.length + " characters)";
}

if(word1.length == word2.length) {
  document.getElementById('result').innerHTML = word1 + " (" + word1.length + " characters)" + " and " + word2 + " (" + word2.length + " characters)" + " are equal";
}
