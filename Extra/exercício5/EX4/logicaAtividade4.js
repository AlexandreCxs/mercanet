function ajusteIndividual() {
    ajustaIndividual = true;
    reescrevePergunta("Qual colaborador receberá o reajuste: ");
    mostraFuncionarios();
    btnProximo = criaBotaoProximo("Próximo");
    btnProximo.addEventListener("click", function () {
        selecaoDeFuniconario = document.querySelector(".selecionaFuncionario").value;
        solicitaSalario(selecaoDeFuniconario);
    });
}

function ajusteTodosFuncionarios() {
    reescrevePergunta("Digite o salário atual dos funcionários: ");
    for (i = 0; i < listaDeFuncionarios.length; i++) {
        var nomeSalario = document.createElement("label");
        nomeSalario.for = "nomeSalario";
        nomeSalario.textContent = listaDeFuncionarios[i].nome + ": "
        var inputSalario = document.createElement("input");
        inputSalario.type = "text";
        inputSalario.id = "nomeSalario"
        inputSalario.placeholder = "Salário";
        inputSalario.classList.add("digite","salario-individual");
        
        respostas.appendChild(nomeSalario);
        respostas.appendChild(inputSalario);
    }

    btnProximo = criaBotaoProximo("Próximo");
    btnProximo.addEventListener("click", function () {
        salarios = document.querySelectorAll(".salario-individual");
        for (i = 0; i < listaDeFuncionarios.length; i++) {
            atualizaFuncionario(i, parseFloat(salarios[i].value), reajuste);
        }
        desejaImprimir();
    });

}

function desejaImprimir() {
    reescrevePergunta("Deseja imprimir todos os Funcionários?");
    var btnSim = document.createElement("button");
    btnSim.textContent = "Sim";
    btnSim.classList.add("botao-sim");
    var btnNao = document.createElement("button");
    btnNao.textContent = "Não";
    btnNao.classList.add("botao-nao");

    respostas.appendChild(btnSim);
    if (ajustaIndividual) {
        respostas.appendChild(btnNao);
    }

    btnSim.addEventListener("click", imprimeFuncionario);
    btnNao.addEventListener("click", imprimeFuncionarioIndivudual);


}

function criaBotaoProximo(nome) {
    var btnProximo = document.createElement("button");
    btnProximo.textContent = nome;
    btnProximo.classList.add("botao-proximo");

    respostas.appendChild(btnProximo);
    return btnProximo;
}

function solicitaConsultaIndividual() {
    reescrevePergunta("O ajuste será individual?");

    var btnSim = document.createElement("button");
    btnSim.textContent = "Sim";
    btnSim.classList.add("botao-sim");
    var btnNao = document.createElement("button");
    btnNao.textContent = "Não";
    btnNao.classList.add("botao-nao");

    respostas.appendChild(btnSim);
    respostas.appendChild(btnNao);

    btnSim.addEventListener("click", ajusteIndividual);
    btnNao.addEventListener("click", ajusteTodosFuncionarios);
}

function solicitaReajuste() {
    var inputReajuste = document.createElement("input");
    inputReajuste.type = "text";
    inputReajuste.placeholder = "Digite o valor do reajuste";
    inputReajuste.classList.add("reajuste","digite");

    respostas.appendChild(inputReajuste);

    btnProximo = criaBotaoProximo("Próximo");
    btnProximo.addEventListener("click", function () {
        reajuste = parseFloat(document.querySelector(".reajuste").value)

        if (isNaN(reajuste) || !valida(0, 100, reajuste)) {
            alert("Valor digitado é inválido\n Digite um valor positivo menor que 100");
        } else {
            solicitaConsultaIndividual();
        }
    });
}

function solicitaSalario(posicao) {
    reescrevePergunta("Digite o Salário atual do " + listaDeFuncionarios[posicao].nome + ": ");

    var inputSalario = document.createElement("input");
    inputSalario.type = "text";
    inputSalario.placeholder = "Digite o salário atual";
    inputSalario.classList.add("salario","digite");

    respostas.appendChild(inputSalario);

    if (ajustaIndividual) {

        btnProximo = criaBotaoProximo("Próximo");
        respostas.appendChild(btnProximo);

        btnProximo.addEventListener("click", function () {
            salarioAnterior = parseFloat(document.querySelector(".salario").value);
            if (isNaN(reajuste) || !valida(salarioAnterior, salarioAnterior, salarioAnterior)) {
                alert("Valor digitado é inválido\n Digite um valor positivo igual ou maior que o salário anterior");
            } else {
                atualizaFuncionario(posicao, salarioAnterior, reajuste);
                adicionou = true;
                if (adicionou) {
                    desejaImprimir();
                }
            }
        });

    }
}

function valida(min, max, atual) {
    if (min > atual) {
        return false;
    }
    if (max < atual) {
        return false;
    }
    return true;
}

function atualizaFuncionario(posicao, salarioAnterior, reajuste) {
    listaDeFuncionarios[posicao].salarioAnterior = salarioAnterior;
    listaDeFuncionarios[posicao].ajuste = reajuste;
    listaDeFuncionarios[posicao].salarioAtual = calcula(salarioAnterior, reajuste);
}

function reescrevePergunta(frase) {
    limpaRespostas();
    pergunta.textContent = frase;

}

function limpaRespostas() {
    respostas.innerHTML = "";
}

function mostraFuncionarios() {
    var select = document.createElement("select");
    select.classList.add("selecionaFuncionario");

    respostas.appendChild(select);
    for (i = 0; i < listaDeFuncionarios.length; i++) {
        var valor = document.createElement("option");
        valor.textContent = listaDeFuncionarios[i].nome;
        valor.value = i;
        valor.nodeType = "checkbox"
        select.appendChild(valor);
    }
}

function criaFuncionario(nome) {
    funcionario = {
        nome: nome,
        salarioAnterior: 100,
        ajuste: 0,
        salarioAtual: 100
    }
    listaDeFuncionarios.push(funcionario);
}

function calcula(salario, ajuste) {
    return salario = salario + (ajuste * salario / 100);
}

function imprimeFuncionario() {
    reescrevePergunta("Lista de Funcionários");
    limpaRespostas();
    var resuldado = document.querySelector(".exibe-resultado");

    tabela = document.createElement("table");
    tabela.class = "tabela-funcionarios"
    resuldado.appendChild(tabela);

    trNome = document.createElement("tr");
    tabela.appendChild(trNome);

    li = document.createElement("th");
    li.textContent = "Nome";
    trNome.appendChild(li);

    li = document.createElement("th");
    li.textContent = "Salario Anterior";
    trNome.appendChild(li);

    li = document.createElement("th");
    li.textContent = "Salario Atual";
    trNome.appendChild(li);

    for (i = 0; i < listaDeFuncionarios.length; i++) {
        trNome = document.createElement("tr");
        tabela.appendChild(trNome);

        li = document.createElement("td");
        li.textContent = listaDeFuncionarios[i].nome;
        trNome.appendChild(li);

        li = document.createElement("td");
        li.textContent = "R$" + listaDeFuncionarios[i].salarioAnterior.toFixed(2);
        trNome.appendChild(li);

        li = document.createElement("td");
        li.textContent = "R$" + listaDeFuncionarios[i].salarioAtual.toFixed(2);
        trNome.appendChild(li);

    }
    resuldado.classList.remove("invisivel");
    resuldado.classList.add("visivel");
}

function imprimeFuncionarioIndivudual() {
    reescrevePergunta("Lista de Funcionário");
    limpaRespostas();
    tabela = document.createElement("table");
    tabela.class = "tabela-funcionarios"
    respostas.appendChild(tabela);

    trNome = document.createElement("tr");
    tabela.appendChild(trNome);

    li = document.createElement("th");
    li.textContent = "Nome";
    trNome.appendChild(li);

    li = document.createElement("th");
    li.textContent = "Salario Anterior";
    trNome.appendChild(li);

    li = document.createElement("th");
    li.textContent = "Salario Atual";
    trNome.appendChild(li);

    trNome = document.createElement("tr");
    tabela.appendChild(trNome);

    li = document.createElement("td");
    li.textContent = listaDeFuncionarios[selecaoDeFuniconario].nome;
    trNome.appendChild(li);

    li = document.createElement("td");
    li.textContent = "R$" + listaDeFuncionarios[i].salarioAnterior.toFixed(2);
    trNome.appendChild(li);

    li = document.createElement("td");
    li.textContent = "R$" + listaDeFuncionarios[i].salarioAtual.toFixed(2);
    trNome.appendChild(li);


}

//recebendo valores e inicia as variaveis_______________
var pergunta = document.querySelector(".pergunta");
var respostas = document.querySelector(".respostas");
var listaDeFuncionarios = [];
var salarioAnterior;
var reajuste = 0;
var adicionou = false;
var ajustaIndividual = false;

// Criando Funcionários___________________________________
criaFuncionario("Alexandre");
criaFuncionario("Bernardo");
criaFuncionario("Diego");
criaFuncionario("Eder");
criaFuncionario("Gabriel");
criaFuncionario("João");
criaFuncionario("Leticia");
criaFuncionario("Patricia");
criaFuncionario("Rafael");
criaFuncionario("Tiago");

// Inicia, primeira pergunta______________________________
reescrevePergunta("Digite o valor do reajuste: ");
solicitaReajuste(); 