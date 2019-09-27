function validaContagem(total, brancos, nulos, validos) {
    if (brancos + nulos + validos == total) {
        return true;
    } else {
        return false;
    }
}

function calcula() {
    // Valida campos em branco_______________________
    var todosInputs = [];
    todosInputs.push(inputTotal);
    todosInputs.push(inputBrancos);
    todosInputs.push(inputNulos);
    todosInputs.push(inputValidos);
    validaCampos(todosInputs);
    var erros = [];

    if (!inputTotal.classList.contains("campo-errado")
        && !inputBrancos.classList.contains("campo-errado")
        && !inputNulos.classList.contains("campo-errado")
        && !inputValidos.classList.contains("campo-errado")) {

        var total = parseInt(inputTotal.value);
        var brancos = parseInt(inputBrancos.value);
        var nulos = parseInt(inputNulos.value);
        var validos = parseInt(inputValidos.value);

        if (validaContagem(total, brancos, nulos, validos)) {
            var resultados = [];
            var brancoPercentual = brancos * 100 / total;
            var nuloPercentual = nulos * 100 / total;
            var validoPercentual = validos * 100 / total;

            resultados.push("Total de votos Brancos: " + brancoPercentual + "%");
            resultados.push("Total de votos Nulos: " + nuloPercentual + "%");
            resultados.push("Total de votos Validos: " + validoPercentual + "%");
            exibeResultado(resultados);
        } else {
            erros.push("A soma de Brancos, Nulos e Validos devem ser igual ao Total de elteitores.");
            exibeMensagemDeErros(erros);
        }
    } else {
        erros.push("Verifique os campos em Vermelho");
        exibeMensagemDeErros(erros);
    }
}

//recebendo valores e inicia as variaveis_______________
var inputTotal = document.querySelector("#total");
var inputBrancos = document.querySelector("#brancos");
var inputNulos = document.querySelector("#nulos");
var inputValidos = document.querySelector("#validos");
var btnCalcular = document.querySelector("#calcular");

// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputTotal.addEventListener("input", valida(regra, inputTotal, 0, 50000000));
inputBrancos.addEventListener("input", valida(regra, inputBrancos, 0, 50000000));
inputNulos.addEventListener("input", valida(regra, inputNulos, 0, 50000000));
inputValidos.addEventListener("input", valida(regra, inputValidos, 0, 50000000));

//escuta o evendo de click______________________________
btnCalcular.addEventListener("click", calcula);

