// Calcola la somma e la media dei numeri da 0 a 10
var sum = 0;

for (var i = 0; i < 10; i++) {
  var sum = sum + i;
  var average = sum / i;
}

document.getElementById('sum').innerHTML = "The sum of the numbers from 1 to 10 is: " + sum;
document.getElementById('average').innerHTML = "The average of the numbers from 1 to 10 is: " + average;
