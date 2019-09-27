function calcula() {
    // Valida campos em branco_______________________
    var todosInputs = [];
    todosInputs.push(inputNome);
    todosInputs.push(inputQuantidade);
    todosInputs.push(inputPrecoUnitario);
    validaCampos(todosInputs);

    if (!inputNome.classList.contains("campo-errado")
        && !inputQuantidade.classList.contains("campo-errado")
        && !inputPrecoUnitario.classList.contains("campo-errado")) {

        var nome = parseFloat(inputNome.value);
        var qunatidade = parseFloat(inputQuantidade.value);
        var precoUnitario = parseFloat(inputPrecoUnitario.value);

        exibeResultado(resultados);
    } else {
        exibeMensagemDeErros("Verifique os campos em Vermelho");
    }

}

function limpaPergunta() {
    document.querySelector(".exibe-inputs").innerHTML = "";
}

function novoProduto() {
    limpaPergunta();
    var inputNome = document.createElement("input");
    inputNome.classList.add("#nome", "digite");
    inputNome.placeholder = "Nome";

    var inputQuantidade = document.createElement("input");
    inputQuantidade.classList.add("#quantidade", "digite");
    inputQuantidade.placeholder = "Quantidade";

    var inputPrecoUnitario = document.createElement("input");
    inputPrecoUnitario.classList.add("#preco-unitario", "digite");
    inputPrecoUnitario.placeholder = "Preço Unitário";

    document.querySelector(".exibe-inputs").appendChild(inputNome);
    document.querySelector(".exibe-inputs").appendChild(inputQuantidade);
    document.querySelector(".exibe-inputs").appendChild(inputPrecoUnitario);

    // Define os valores validos__________________________________
    var regraNome = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
    var regra = /^[0-9]+$/;

    // Define evento de input_______________________________________
    inputNome.addEventListener("input", valida(regraNome, inputNome));
    inputQuantidade.addEventListener("input", valida(regra, inputQuantidade, 0, 50000000000));
    inputPrecoUnitario.addEventListener("input", valida(regra, inputPrecoUnitario, 0, 50000000000));

    document.querySelector("#iniciar").addEventListener("click", function () {
        var produto = {
            nome: "",
            quantidade: 0,
            preco: 0,
            precoFinal: 0
        }
        produto.nome = inputNome.value;
        produto.qunatidade = inputQuantidade.value;
        produto.preco = inputPrecoUnitario.value;

        carrinho.push(produto);
    });
}
var carrinho = [];
//escuta o evendo de click______________________________
document.querySelector("#iniciar").addEventListener("click", novoProduto);