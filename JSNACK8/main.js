//L'utente inserirà un numero 4 4 cifre. Il software calcolerà la somma delle singole cifre

var number = prompt("Write a 4 digit number:");

var sum = 0;

for (var i = 0; i < number.length; i++) {
  var sum = sum + parseInt(number.charAt(i));
}

document.getElementById('result').innerHTML = "The sum of integers in this number " + number + " is: " + sum;
