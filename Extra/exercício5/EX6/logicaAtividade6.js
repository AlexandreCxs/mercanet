
function calcula() {

    if (!inputNumeroCarrosVendidos.classList.contains("campo-errado")
        && !inputValorVenda.classList.contains("campo-errado")
        && !inputSalarioFixo.classList.contains("campo-errado")
        && !inputComissaoPorCarro.classList.contains("campo-errado")) {

        var numeroCarrosVendidos = parseFloat(inputNumeroCarrosVendidos.value);
        var valorVenda = parseFloat(inputValorVenda.value);
        var salarioFixo = parseFloat(inputSalarioFixo.value);
        var comissaoPorCarro = parseFloat(inputComissaoPorCarro.value);

        var valorComissaoPorCarro = numeroCarrosVendidos * comissaoPorCarro;
        var valorComissaoPorValor = valorVenda * 0.05;

        var salarioFinal = valorComissaoPorCarro + valorComissaoPorValor + salarioFixo;

        var resuldados = [];
        resuldados.push("Salario Fixo: R$" + salarioFixo.toFixed(2));
        resuldados.push("Comissão por Carro: R$" + valorComissaoPorCarro.toFixed(2));
        resuldados.push("Comissão por Valor: R$" + valorComissaoPorValor.toFixed(2));
        resuldados.push("Salário Final: R$" + salarioFinal.toFixed(2));

        exibeResultado(resuldados);
    } else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }
}

//recebendo valores e inicia as variaveis_______________
var inputNumeroCarrosVendidos = document.querySelector("#numero-carros-vendidos");
var inputValorVenda = document.querySelector("#valor-total-vendas");
var inputSalarioFixo = document.querySelector("#salario");
var inputComissaoPorCarro = document.querySelector("#comissao");

// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputNumeroCarrosVendidos.addEventListener("input", valida(regra, inputNumeroCarrosVendidos, 0, 100000000));
inputValorVenda.addEventListener("input", valida(regra, inputValorVenda, 0, 100000000));
inputSalarioFixo.addEventListener("input", valida(regra, inputSalarioFixo, 0, 100000000));
inputComissaoPorCarro.addEventListener("input", valida(regra, inputComissaoPorCarro, 0, 100000000));


//escuta o evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);

