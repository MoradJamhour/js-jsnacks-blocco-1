// L'utente deve inserire 2 numeri. Il maggiore verra stampato


// Imput numeri
var number1 = parseInt(prompt("Please insert the first number"));

var number2 = parseInt(prompt("Please insert the second number"));

//Controllo numeri
if (number1 > number2) {
  document.getElementById('result').innerHTML = number1 + " is greater than the second number you typed";
}

else if (number2 > number1) {
  document.getElementById('result').innerHTML = number2 + " is greater than the first number you typed";
}

else if(number1 == number2) {
  document.getElementById('result').innerHTML = number1 + number2 + " are equal";
}
