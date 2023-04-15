
var empresa = sessionStorage.FK_EMPRESA;
var funcionarios;
var listaDiv = document.getElementById("listaItens")
fetch(`/supervisor/listarFuncionarios/${empresa}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(function (resposta) {
        console.log("ESTOU NO THEN DO listar()!");

        if (resposta.ok) {
            resposta.json().then((json) => {
                console.log(json);
                funcionarios = json;
                console.log("Funcionarios: ", funcionarios);
                for (var i = 0; i < funcionarios.length;) {

                    if (funcionarios[i].fkSupervisor == null) {

                    } else {
                        listaDiv.innerHTML += ` <div>
                        ${funcionarios[i].nome}
                        ${funcionarios[i].email}
                        ${funcionarios[i].fkSupervisor}
                        </div> `
                    }
                    i++;
                }
            });
        } else {
            console.log("Houve um erro ao tentar Lista");
            resposta.text().then((texto) => {
                console.error(texto);
            });
        }
    })
    .catch(function (erro) {
        console.log(erro);
    });


// for (var i = 0; i < funcionarios.length; i++) {

//     console.log(funcionarios[i] + "testeyhstggfd");

// 

