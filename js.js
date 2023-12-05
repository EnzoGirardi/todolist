let botaoadiconar = document.getElementById("adicionar");
let containertarefa = document.getElementById("containertarefa");
let campoinput = document.getElementById("camporesultado")
let botaolimpar = document.getElementById("limpar");
let botaolimpar2 = document.getElementById("limpar2")
let tarefacompleta = document.getElementById("containertarefacompleta")

botaoadiconar.addEventListener("click", function(test){ //No botaoadicionar, quando ele ouvir o "click", irá criar a function
    if(campoinput.value.trim() !== ""){

    let paragrafo = document.createElement("p"); //criei uma let que irá criar um elemento, no caso <p>
    paragrafo.classList.add('paragrafoestilo'); //o classlist funciona para adicionar css ao <p> acima
    paragrafo.innerText = campoinput.value; //o innertext server para adicionar o nome da tarefa que está escrito no campo para o <p> criado
    containertarefa.appendChild(paragrafo); //o campo containertarefa será onde o <p> será acrescentado com o AppendChild
    campoinput.value = "" //após todo uso o valor do campoinput será reiniciado para nada
    paragrafo.addEventListener("click", function(){ //no paragrafo, quando ele ouvir o "click", irá criar a function
        containertarefa.removeChild(paragrafo); //quando você clicar no <p>(paragrafo), ele será removido do containertarefa e será anexado no tarefacompleta, outra lista abaixo
        tarefacompleta.appendChild(paragrafo);
    })
    botaolimpar.addEventListener("click", function(){ //No botaolimpar, quando ele ouvir o "click", irá criar a function
        containertarefa.removeChild(paragrafo); //quando você clicar no buttonlimpar, ele será removido do containertarefa e será anexado no tarefacompleta, outra lista abaixo
        tarefacompleta.appendChild(paragrafo);
    })
    botaolimpar2.addEventListener("click", function(){
        tarefacompleta.removeChild(paragrafo); //Adicionei um último button na lista de tarefas completas que, após o "click", todas as tarefas prontas serão apagadas
    })
    
}})
document.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        test();
    }
})