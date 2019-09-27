function calcula() {

    if (!inputMacasVendidas.classList.contains("campo-errado")) {
        
        var unidades = parseInt(inputMacasVendidas.value);
        var valorMacas = 0;
        var total = 0;

        if (unidades < 12) {
            valorMacas = 1.3;
        } else {
            valorMacas = 1;
        }

        total = unidades * valorMacas;

        if (unidades % 12 == 0) {
            total -= (total * 0.05);
        }

        exibeResultado("Valor Total: R$" + total.toFixed(2));
    } else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }

}

//recebendo valores e inicia as variaveis_______________
var inputMacasVendidas = document.querySelector("#macas-vendidas");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputMacasVendidas.addEventListener("input", valida(regra, inputMacasVendidas, 0, 100000000));
//escuta o evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);