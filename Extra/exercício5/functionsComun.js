function exibeResultado(frase) {
    // Limpa erros__________________________________
    var divErros = document.querySelector(".exibe-erros");
    divErros.classList.add("invisivel");
    // Mostra mensagem de resultado__________________________________
    var divResultado = document.querySelector(".exibe-resultado");
    divResultado.innerHTML = "";
    if (Array.isArray(frase)) {
        for (var i = 0; i < frase.length; i++) {
            var p = document.createElement("p");
            p.textContent = frase[i];
            divResultado.appendChild(p);
        }
    } else {
        var p = document.createElement("p");
        p.textContent = frase;
        divResultado.appendChild(p);
    }

    divResultado.classList.remove("invisivel");
}

function exibeMensagemDeErros(frase) {
    // Limpa resultado__________________________________
    var divResultado = document.querySelector(".exibe-resultado");
    divResultado.classList.add("invisivel");
    // Mostra mensagem de erros__________________________________

    var divErros = document.querySelector(".exibe-erros");
    divErros.innerHTML = "";

    if (Array.isArray(frase)) {
        for (var i = 0; i < frase.length; i++) {
            var p = document.createElement("p");
            p.textContent = frase[i];
            divErros.appendChild(p);
            divErros.classList.remove("invisivel");
        }
    }else{
        var p = document.createElement("p");
        p.textContent = frase;
        divErros.appendChild(p);
        divErros.classList.remove("invisivel");
    }

}

function valida(regra, campo, minimo, maximo) {
    return function () {
        if (!this.value.match(regra)) {
            campo.classList.add("campo-errado");
        } else if (campo.value < minimo || campo.value > maximo) {
            campo.classList.add("campo-errado");
        } else {
            campo.classList.remove("campo-errado");
        }
    }
}

function validaCampos(campos) {
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value == "") {
            campos[i].classList.add("campo-errado");
        }
    }
}