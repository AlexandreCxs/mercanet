function calcula() {
    // Valida campos em branco_______________________
    var todosInputs = [];
    todosInputs.push(inputAnos);
    todosInputs.push(inputMeses);
    todosInputs.push(inputDias);
    validaCampos(todosInputs);

    if (!inputAnos.classList.contains("campo-errado")
        && !inputMeses.classList.contains("campo-errado")
        && !inputDias.classList.contains("campo-errado")) {

        var anos = parseInt(inputAnos.value);
        var mes = parseInt(inputMeses.value);
        var dias = parseInt(inputDias.value);

        var total = (anos * 365) + (mes * 30) + dias;

        exibeResultado("Sua idade é " + total + " dias");
    } else {
        var erros = [];

        erros.push("Verifique os campos em Vermelho");
        erros.push("Os campos devem ser preenchidos:");
        erros.push("Anos: 0 até 150");
        erros.push("Meses: 0 até 12");
        erros.push("Dias: 0 até 30");
        exibeMensagemDeErros(erros);

    }
}
//recebendo valores e inicia as variaveis_______________
var inputAnos = document.querySelector("#anos");
var inputMeses = document.querySelector("#meses");
var inputDias = document.querySelector("#dias");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputAnos.addEventListener("input", valida(regra, inputAnos, 0, 150));
inputMeses.addEventListener("input", valida(regra, inputMeses, 0, 12));
inputDias.addEventListener("input", valida(regra, inputDias, 0, 30));

var bottonCalcular = document.querySelector("#calcular");
bottonCalcular.addEventListener("click", calcula);

