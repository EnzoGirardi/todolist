let botaoadiconar = document.getElementById("adicionar");
let containertarefa = document.getElementById("containertarefa");
let campoinput = document.getElementById("camporesultado")
let botaolimpar = document.getElementById("limpar")

botaoadiconar.addEventListener("click", function(){
    let paragrafo = document.createElement("p");
    paragrafo.classList.add('paragrafoestilo');
    paragrafo.innerText = campoinput.value; 
    containertarefa.appendChild(paragrafo);
    campoinput.value = ""
    paragrafo.addEventListener("click", function(){
        containertarefa.removeChild(paragrafo);

    })
    botaolimpar.addEventListener("click", function(){
        containertarefa.removeChild(paragrafo);
   
    })
    
})

