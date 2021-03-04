//L'utente deve inserire 10 numeri in prompt diversi. La somma di tutti i numeri verrà stampata

var sum = 0;
for (var i = 0; i < 10; i++) {
  var number = parseInt(prompt("Please insert a number"));
  sum = sum + number;
}

document.getElementById('result').innerHTML = sum;
