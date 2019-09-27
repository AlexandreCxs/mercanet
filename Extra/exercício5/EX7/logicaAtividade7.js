function calcula() {
    // Valida campos em branco_______________________
    var todosInputs = [];
    todosInputs.push(inputNota1);
    todosInputs.push(inputNota2);
    todosInputs.push(inputNota3);
    validaCampos(todosInputs);

    // Verifica campos errados____________________________
    if (!inputNota1.classList.contains("campo-errado")
        && !inputNota2.classList.contains("campo-errado")
        && !inputNota3.classList.contains("campo-errado")) {
        
            var notas = [];
        // Alimenta Array de notas_____________________
        notas.push(parseFloat(inputNota1.value));
        notas.push(parseFloat(inputNota2.value));
        notas.push(parseFloat(inputNota3.value));
        // Pesos das notas_____________________________
        var pesoNota1 = 2;
        var pesoNota2 = 3;
        var pesoNota3 = 5;
        var conceito;

        var media = (notas[0] * pesoNota1 + notas[1] * pesoNota2 + notas[2] * pesoNota3) / (pesoNota1 + pesoNota2 + pesoNota3);

        if (media >= 9) {
            conceito = "A";
        } else if (media >= 7.5) {
            conceito = "B";
        } else if (media >= 6) {
            conceito = "C";
        } else {
            conceito = "D";
        }

        var resultados = [];
        resultados.push("A média do aluno é: " + media);
        resultados.push("A média conseitual do aluno é: " + conceito);

        exibeResultado(resultados);
    } else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }
}

//recebendo valores e inicia as variaveis_______________
var inputNota1 = document.querySelector("#nota1");
var inputNota2 = document.querySelector("#nota2");
var inputNota3 = document.querySelector("#nota3");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputNota1.addEventListener("input", valida(regra, inputNota1, 0, 10));
inputNota2.addEventListener("input", valida(regra, inputNota2, 0, 10));
inputNota3.addEventListener("input", valida(regra, inputNota3, 0, 10));

//Define evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);


