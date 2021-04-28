

document.getElementById("cumprimentar").addEventListener("click",  function(){
    document.getElementById("alert").innerHTML="Olá"
})

document.getElementById("alterarFundo").addEventListener("click",  function(event){
   console.log("ss")
    document.body.style.backgroundColor="green";
})

document.getElementById("imagem").addEventListener("mousemove",  function(event){
    document.getElementById("alert").innerHTML="Imagem selecionada na posicao: X:"+event.clientX +" - Y:"+event.clientY
})

document.getElementById("imagem").addEventListener("mouseout",  function(){
    document.getElementById("alert").innerHTML=""
})

document.getElementById("imagem2").addEventListener("click",  function(){
    document.getElementById("alert").innerHTML="Imagem 2 clicada"
})

document.body.addEventListener("click", function(event){
    //if(event.target.id!="alterarFundo")
       // this.style.backgroundColor="red";
})

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
})
