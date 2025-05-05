"use strict";

document.getElementById("botonCalcularIMC").addEventListener("click", function () {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var resultado = document.getElementById("mensajeResultado");

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor, ingresa valores válidos.";
    return;
  }

  var imc = peso / (altura * altura);
  var clasificacion = "";

  if (imc < 18.5) {
    clasificacion = "Bajo peso";
  } else if (imc < 25) {
    clasificacion = "Peso normal";
  } else if (imc < 30) {
    clasificacion = "Sobrepeso";
  } else {
    clasificacion = "Obesidad";
  }

  resultado.textContent = "Tu IMC es ".concat(imc.toFixed(2), " (").concat(clasificacion, ")");
});
//# sourceMappingURL=script-imc.dev.js.map
