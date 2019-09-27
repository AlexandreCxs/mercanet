function calcula() {
    // Valida campos em branco_______________________
    var todosInputs = [];
    todosInputs.push(inputQuantidadeCombustivel);
    validaCampos(todosInputs);


    if (!inputQuantidadeCombustivel.classList.contains("campo-errado")) {
        var quantidadeCombustivel = parseFloat(inputQuantidadeCombustivel.value);
        var combustivel = selectCombustivel.value;
        var resultados = [];
        var desconto, valorFinal;

        if (Object.is(combustivel, "gasolina")) {
            var precoGasolina = 4.59;
            if (quantidadeCombustivel <= 25) {
                desconto = 0.04;
            } else {
                desconto = 0.06;
            }
            valorFinal = quantidadeCombustivel * precoGasolina;
            valorFinal -= valorFinal * desconto;

            resultados.push("Valor final da Gasolina: R$ " + valorFinal.toFixed(2));

        } else if (Object.is(combustivel, "alcool")) {
            var precoAlcool = 3.78;
            if (quantidadeCombustivel <= 20) {
                desconto = 0.03;
            } else {
                desconto = 0.05;
            }
            valorFinal = quantidadeCombustivel * precoAlcool;
            valorFinal -= valorFinal * desconto;

            resultados.push("Valor final da Álcool: R$ " + valorFinal.toFixed(2));
        }

        exibeResultado(resultados);
    } else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }

}
function validaQuantidadesNoEstoque(atual, minimo, maximo) {
    if (atual <= maximo && minimo < maximo && maximo > minimo) {
        return true;
    } else {
        return false;
    }
}

//recebendo valores e inicia as variaveis_______________
var inputQuantidadeCombustivel = document.querySelector("#qunatidade");
var selectCombustivel = document.querySelector(".tipo-combustivel");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputQuantidadeCombustivel.addEventListener("input", valida(regra, inputQuantidadeCombustivel, 0, 50000000000));

//escuta o evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);