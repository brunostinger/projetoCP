document.getElementById("nome").onclick = function(){
    this.style.backgroundColor = "yellow";
    this.style.fontSize  = "30px";

}

document.getElementById("sobrenome").addEventListener("click",  function(){
    this.style.backgroundColor = "yellow";
})

document.getElementById("sobrenome").addEventListener("click",  function(){
    this.style.color = "red";
})



document.getElementById("mensagem").addEventListener("keypress", apagarBranco)

function apagarBranco(event){
    console.log(event.srcElement.value)
}

document.body.addEventListener("click", startTime);


function setTimer(){
    setInterval(function() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        document.getElementById("timer").innerHTML ="Tempo restante para preenchimento: "+ h+":"+m+":"+s
    }, 1000); 
} 


function startTime (){
    var today = new Date()
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();


    document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 1000);
}
