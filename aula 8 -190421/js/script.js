function calcularIMC(){
   let altura = document.getElementById("altura").value;
   let peso = document.getElementById("peso").value;
   document.getElementById("resultadoIMC").innerHTML = (peso /  ((altura / 100) * (altura / 100))).toFixed(2);
}