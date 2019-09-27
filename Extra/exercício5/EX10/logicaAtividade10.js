function calcula() {
     // Valida campos em branco_______________________
     var todosInputs = [];
     todosInputs.push(inputSalarioFixo);
     todosInputs.push(inputValorVendas);
     validaCampos(todosInputs);
     
    if (!inputSalarioFixo.classList.contains("campo-errado")
        && !inputValorVendas.classList.contains("campo-errado")) {

        var salarioFixo = parseFloat(inputSalarioFixo.value);
        var valorVendas = parseFloat(inputValorVendas.value);

        var valorComissaoEspecial = 0;
        var valorComissao = 0;

        if (valorVendas > 1500) {
            valorComissao = 1500 * 0.03;
            valorComissaoEspecial = (valorVendas - 1500) * 0.05;
        } else {
            valorComissao = valorVendas * 0.03;
        }

        var salarioTotal = salarioFixo + valorComissao + valorComissaoEspecial;
        console.log(valorComissaoEspecial);
        console.log(valorComissao);
        console.log(salarioTotal);
        exibeResultado("Salario total: " + salarioTotal);
    } else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }

}

//recebendo valores e inicia as variaveis_______________
var inputSalarioFixo = document.querySelector("#salario-fixo");
var inputValorVendas = document.querySelector("#valor-vendas");
// Define os valores validos__________________________________
var regra = /^[0-9]+$/;

// Define evento de input_______________________________________
inputSalarioFixo.addEventListener("input", valida(regra, inputSalarioFixo, 0, 50000000000));
inputValorVendas.addEventListener("input", valida(regra, inputValorVendas, 0, 50000000000));

//escuta o evendo de click______________________________
document.querySelector("#calcular").addEventListener("click", calcula);

