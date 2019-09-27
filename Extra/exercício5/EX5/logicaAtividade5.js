function calcula() {
    var custo = parseFloat(inputCusto.value);

    if (!inputCusto.classList.contains("campo-errado")) {

        var valorDistribuidor = custo * percentualDistribuidor / 100;
        var valorImpostos = custo * percentualImpostos / 100;

        var total = valorDistribuidor + valorImpostos + custo;
        exibeResultado("Valor do carro: R$" + total.toFixed(2));
    }else {
        exibeMensagemDeErros("Verifique o campo em Vermelho");
    }

}

//recebendo valores e inicia as variaveis_______________
var inputCusto = document.querySelector("#custo-fabril");
var percentualDistribuidor = 28;
var percentualImpostos = 45;

// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputCusto.addEventListener("input", valida(regra, inputCusto, 0, 100000000000000000));

//escuta o evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);

