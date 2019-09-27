function calcula() {
    // Valida campos em branco_______________________
    var todosInputs = [];
    todosInputs.push(inputQuantidadeAtual);
    todosInputs.push(inputQuantidadeMinima);
    todosInputs.push(inputQuantidadeMaxima);
    validaCampos(todosInputs);

    var quantidadeAtual = parseFloat(inputQuantidadeAtual.value);
    var quantidadeMinima = parseFloat(inputQuantidadeMinima.value);
    var quantidadeMaxima = parseFloat(inputQuantidadeMaxima.value);

    if (validaQuantidadesNoEstoque(quantidadeAtual, quantidadeMinima, quantidadeMaxima)) {
        if (!inputQuantidadeAtual.classList.contains("campo-errado")
            && !inputQuantidadeMinima.classList.contains("campo-errado")
            && !inputQuantidadeMaxima.classList.contains("campo-errado")) {

            var resultados = [];
            var mediaEstoque = (quantidadeMinima + quantidadeMaxima) / 2;

            if (quantidadeAtual >= mediaEstoque) {
                resultados.push("Não efetuar compra");
            } else {
                resultados.push("Efetuar compra");
            }
            resultados.push("A média em esteque é " + mediaEstoque);
            exibeResultado(resultados);
        } else {
            exibeMensagemDeErros("Verifique os campos em Vermelho");
        }
    } else {
        var erros = [];
        erros.push("Verifique os Valores Digitados");
        erros.push("Quantidade Atual não pode ser maior que o máximo");
        erros.push("Quantidade Maxima não pode ser menor que o minimo");
        erros.push("Quantidade Minima não pode ser maior que o máximo");
        exibeMensagemDeErros(erros);
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
var inputQuantidadeAtual = document.querySelector("#qunatidade-atual");
var inputQuantidadeMinima = document.querySelector("#qunatidade-minima");
var inputQuantidadeMaxima = document.querySelector("#qunatidade-maxima");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputQuantidadeAtual.addEventListener("input", valida(regra, inputQuantidadeAtual, 0, 50000000000));
inputQuantidadeMinima.addEventListener("input", valida(regra, inputQuantidadeMinima, 0, 50000000000));
inputQuantidadeMaxima.addEventListener("input", valida(regra, inputQuantidadeMaxima, 0, 50000000000));

//escuta o evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);