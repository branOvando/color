document.getElementById("botonCalcularIMC").addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("mensajeResultado");
  
    if (!peso || !altura || peso <= 0 || altura <= 0)
         {
      resultado.textContent = "Por favor, ingresa valores válidos.";
      return;
    }
  
    const imc = peso / (altura * altura);
    let clasificacion = "";
  
    if (imc < 18.5) 
    {
      clasificacion = "Bajo peso";
    } else if (imc < 25)
    {
      clasificacion = "Peso normal";
    } else if (imc < 30) 
    {
      clasificacion = "Sobrepeso";
    } else 
    {
      clasificacion = "Obesidad";
    }
  
    resultado.textContent = `Tu IMC es ${imc.toFixed(2)} (${clasificacion})`;
});