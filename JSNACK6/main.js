//L'utente inserirà N numeri. Il software dovrà calcolare il cubo dei primi N numeri.

var n = parseInt(prompt("Write a number:"));

for (var i = 1; i <= n; i++) {
  var cube = i*i*i;
  document.getElementById('result').innerHTML += cube + "<br>";
}
