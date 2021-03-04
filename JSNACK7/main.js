// Stampa le potenze di 2 fino ad un risultato massimo di 1000.

var a = 2;

for (var i = 0; i < 10; i++) {
  if ((a*2) < 1000) {
    var a = a*2;
    document.getElementById('result').innerHTML += a + " ";
  }
}
