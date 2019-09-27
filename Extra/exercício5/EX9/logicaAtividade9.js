function calcula() {
    var horasTrabalhadas = parseFloat(inputHorasTrabalhadas.value);
    var salarioHora = parseFloat(inputSalarioHora.value);

    if (!inputHorasTrabalhadas.classList.contains("campo-errado")
        && !inputSalarioHora.classList.contains("campo-errado")) {

        var valorHorasExtras = salarioHora * 1.5;
        var temHoraExtra = false;;

        if (horasTrabalhadas > 160) {
            var numeroHorasExtras = horasTrabalhadas - 160;
            var salarioNormal = salarioHora * (horasTrabalhadas - numeroHorasExtras);
            salarioTotal = salarioNormal + (numeroHorasExtras * valorHorasExtras);
            temHoraExtra = true;
        } else {
            var salarioNormal = salarioHora * horasTrabalhadas;
            salarioTotal = salarioNormal;
            temHoraExtra = false;
        }
        var resultados = [];

        resultados.push("Horas trabalhadas: " + horasTrabalhadas.toFixed(2));
        resultados.push("Salario Normal: R$" + salarioNormal.toFixed(2));
        if (temHoraExtra) {
            resultados.push("Numero de horas Extras: " + numeroHorasExtras.toFixed(2));
            resultados.push("Valor da hora extra: R$" + valorHorasExtras.toFixed(2));
        }
        resultados.push("Salário Total: R$" + salarioTotal.toFixed(2));

        exibeResultado(resultados);
    }else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }

}

//recebendo valores e inicia as variaveis_______________
var inputHorasTrabalhadas = document.querySelector("#horas-trabalhadas");
var inputSalarioHora = document.querySelector("#salario-hora");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputHorasTrabalhadas.addEventListener("input", valida(regra, inputHorasTrabalhadas, 0, 240));
inputSalarioHora.addEventListener("input", valida(regra, inputSalarioHora, 0, 200));

//escuta o evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);

