"use strict";

var esRojo = false;
var boton = document.getElementById('botonColor');
boton.addEventListener('click', function () {
  if (esRojo) {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'red';
  }

  esRojo = !esRojo;
});
//# sourceMappingURL=script.dev.js.map
