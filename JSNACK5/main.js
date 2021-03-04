//Chiedi all'utente di inserire un numero per sei volte. se è dispari inseriscilo nell'array.

var numbers = [];

for (var i = 0; i < 6; i++) {
  var number = prompt("Write a number:")

  if (number%2) {
    numbers.push(number);
  }
}

document.getElementById('odd').innerHTML = "All the odd numbers among the ones you chose are on this list: " + numbers ;
