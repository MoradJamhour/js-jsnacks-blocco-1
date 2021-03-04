//L'utente inserisce il suo nome e il software controlla se è in lista e comunica se può partecipare alla festa.

var guests = ["Jay", "Nick", "Daisy", "Tom", "Myrtle", "Jordan", "Morad"];

var name = prompt("What is your name?");

var check = false;

for (var i = 0; i < guests.length && !check; i++) {
  if (name.toUpperCase() == guests[i].toUpperCase()) {
    var check = true;
  }
}

document.getElementById('list').innerHTML = "All the guests are: " + guests ;

if (check) {
  document.getElementById('outcome').innerHTML = name + ", i don't know how you got yourself on the list, but you may enter."
} else {
  document.getElementById('outcome').innerHTML = name + ", as you can see you're not on the list, so at least you should go read the book"
}
