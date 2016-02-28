var newLetter = prompt('Enter a letter:');

var i = 0;

var j = 0;

for (i = 0; i < 10; i++) {
  for (j = 0; j < i; j++) {
    document.write(newLetter);
  }
  document.write('<br>');
}
