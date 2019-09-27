function iniciaExercicios(){
    atv1 ={
        nome:"Execicio 1",
        link:"EX1/logicaAtividade1.html"
    }
    atv2 ={
        nome:"Execicio 2",
        link:"EX2/logicaAtividade2.html"
    }
    atv3 ={
        nome:"Execicio 3",
        link:"EX3/logicaAtividade3.html"
    }
    atv4 ={
        nome:"Execicio 4",
        link:"EX4/logicaAtividade4.html"
    }
    atv5 ={
        nome:"Execicio 5",
        link:"EX5/logicaAtividade5.html"
    }
    atv6 ={
        nome:"Execicio 6",
        link:"EX6/logicaAtividade6.html"
    }
    atv7 ={
        nome:"Execicio 7",
        link:"EX7/logicaAtividade7.html"
    }
    atv8 ={
        nome:"Execicio 8",
        link:"EX8/logicaAtividade8.html"
    }
    atv9 ={
        nome:"Execicio 9",
        link:"EX9/logicaAtividade9.html"
    }
    atv10 ={
        nome:"Execicio 10",
        link:"EX10/logicaAtividade10.html"
    }
    atv11 ={
        nome:"Execicio 11",
        link:"EX11/logicaAtividade11.html"
    }
    atv12 ={
        nome:"Execicio 12",
        link:"EX12/logicaAtividade12.html"
    }
    atv13 ={
        nome:"Execicio 13",
        link:"EX13/logicaAtividade13.html"
    }
    atv14 ={
        nome:"Execicio 14",
        link:"EX14/logicaAtividade14.html"
    }
    aux.push(atv1);
    aux.push(atv2);
    aux.push(atv3);
    aux.push(atv4);
    aux.push(atv5);
    aux.push(atv6);
    aux.push(atv7);
    aux.push(atv8);
    aux.push(atv9);
    aux.push(atv10);
    aux.push(atv11);
    aux.push(atv12);
    aux.push(atv13);
    variavel = 32;
    atv14.nome =  variavel*1.5;
    aux.push(atv14);

}

var container = document.querySelector(".container");
var aux = [];
iniciaExercicios();

for (var i = 0; i < aux.length; i++) {
    var li = document.createElement("ol");
    var link = document.createElement("a");
    link.href = aux[i].link;
    link.textContent = aux[i].nome;
    li.appendChild(link);
    container.appendChild(li);
}