function calcula() {
    var base = inputBase.value;
    var altura = inputAltura.value;

    // Valida campos em branco_______________________
    var todosInputs = [];
    todosInputs.push(inputBase);
    todosInputs.push(inputAltura);
    validaCampos(todosInputs);

    if (!inputBase.classList.contains("campo-errado")
        && !inputAltura.classList.contains("campo-errado")) {
        exibeResultado("A área é: " + (base * altura).toFixed(2));
    } else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }
}
//recebendo valores e inicia as variaveis_______________
var inputBase = document.querySelector("#base");
var inputAltura = document.querySelector("#altura");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

inputBase.addEventListener("input", valida(regra, inputBase, 0, 10000));
inputAltura.addEventListener("input", valida(regra, inputAltura, 0, 10000));

//Define evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);