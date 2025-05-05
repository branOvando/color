"use strict";

var grid = document.getElementById('numberGrid');
var button = document.getElementById('toggleButton');
var isOriginal = true;
var numbersOriginal = [1, 2, 3, 4, 5, 6];
var numbersReversed = [6, 5, 4, 3, 2, 1];

function renderNumbers(numbers) {
  grid.innerHTML = '';
  numbers.forEach(function (num) {
    var div = document.createElement('div');
    div.textContent = num;
    grid.appendChild(div);
  });
}

renderNumbers(numbersOriginal);
button.addEventListener('click', function () {
  isOriginal = !isOriginal;

  if (isOriginal) {
    renderNumbers(numbersOriginal);
  } else {
    renderNumbers(numbersReversed);
  }
});
//# sourceMappingURL=col.dev.js.map
