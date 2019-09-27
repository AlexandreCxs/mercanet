function calcula() {
    // Valida campos em branco_______________________
    var todosInputs = [];
    todosInputs.push(inputNumeroConta);
    todosInputs.push(inputSaldo);
    todosInputs.push(inputDebito);
    todosInputs.push(inputCredito);
    validaCampos(todosInputs);

    if (!inputNumeroConta.classList.contains("campo-errado")
        && !inputSaldo.classList.contains("campo-errado")
        && !inputDebito.classList.contains("campo-errado")
        && !inputCredito.classList.contains("campo-errado")) {
        var saldo = parseFloat(inputSaldo.value);
        var debito = parseFloat(inputDebito.value);
        var credito = parseFloat(inputCredito.value);
        var saldoTotal = saldo - debito + credito;
        var resultados = [];
        if (saldoTotal < 0) {
            resultados.push("Seu saldo é negativo");
        }else if(saldoTotal == 0){
            resultados.push("Seu saldo estão Zerado");
        }else{
            resultados.push("Seu saldo é Positivo");
        }
        resultados.push("Saldo total: R$ " + saldoTotal.toFixed(2));
        exibeResultado(resultados);
    } else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }

}

//recebendo valores e inicia as variaveis_______________
var inputNumeroConta = document.querySelector("#numero-conta");
var inputSaldo = document.querySelector("#saldo");
var inputDebito = document.querySelector("#debito");
var inputCredito = document.querySelector("#credito");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputNumeroConta.addEventListener("input", valida(regra, inputNumeroConta, 0, 50000000000));
inputSaldo.addEventListener("input", valida(regra, inputSaldo, 0, 50000000000));
inputDebito.addEventListener("input", valida(regra, inputDebito, 0, 50000000000));
inputCredito.addEventListener("input", valida(regra, inputCredito, 0, 50000000000));

//escuta o evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);

