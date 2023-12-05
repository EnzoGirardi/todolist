let botaoadiconar = document.getElementById("adicionar");
let containertarefa = document.getElementById("containertarefa");
let campoinput = document.getElementById("camporesultado")
let botaolimpar = document.getElementById("limpar");
let botaolimpar2 = document.getElementById("limpar2")
let tarefacompleta = document.getElementById("containertarefacompleta")


function adicionarTarefa() { // Função para adicionar uma tarefa
    if (campoinput.value.trim() !== "") { // Verifica se o campo de input não está vazio
        let paragrafo = document.createElement("p"); // Cria um parágrafo (<p>) para a nova tarefa
        paragrafo.classList.add('paragrafoestilo'); // Adiciona uma classe ao parágrafo para aplicar estilos (se necessário)
        paragrafo.innerText = campoinput.value; // Define o texto do parágrafo com o valor do campo de input
        containertarefa.appendChild(paragrafo); // Adiciona o parágrafo ao container de tarefas pendentes
        campoinput.value = ""; // Limpa o valor do campo de input
        campoinput.focus(); // Define o foco de volta ao campo de input
        paragrafo.addEventListener("click", function () { // Adiciona um ouvinte de evento para o clique no parágrafo
            containertarefa.removeChild(paragrafo);// Remove o parágrafo do container de tarefas pendentes
            tarefacompleta.appendChild(paragrafo);// Adiciona o parágrafo ao container de tarefas completas
            campoinput.focus(); // Define o foco de volta ao campo de input
        });
        botaolimpar.addEventListener("click", function () { // Adiciona um ouvinte de evento para o clique no botão de limpar
            containertarefa.removeChild(paragrafo); // Remove o parágrafo do container de tarefas pendentes
            tarefacompleta.appendChild(paragrafo); // Adiciona o parágrafo ao container de tarefas completas
            campoinput.focus(); // Define o foco de volta ao campo de input
        });
        botaolimpar2.addEventListener("click", function () { // Adiciona um ouvinte de evento para o clique no segundo botão de limpar 
            tarefacompleta.removeChild(paragrafo);// Remove o parágrafo do container de tarefas completas
            campoinput.focus(); // Define o foco de volta ao campo de input
        });
    }
}
// Adiciona um ouvinte de evento para o clique no botão de adicionar
botaoadiconar.addEventListener("click", adicionarTarefa);
// Adiciona um ouvinte de evento para a tecla Enter
document.addEventListener("keypress", function (event) { // Verifica se a tecla pressionada é Enter (código 13)
    if (event.keyCode === 13) { // Chama a função para adicionar uma tarefa
        adicionarTarefa();
    }
});
