
function listarFuncionarios() {
    var empresa = sessionStorage.FK_EMPRESA;
    var funcionarios;

    fetch(`/gerenciadorUsuario/listarFuncionarios/${empresa}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");

            if (resposta.ok) {
                resposta.json().then((json) => {

                    funcionarios = json;
                    for (var i = 0; i < funcionarios.length;) {

                        if (funcionarios[i].fkSupervisor == null) {



                        } else {

                            listaAtivosDiv.innerHTML += `<div class="item"> <span class="nomeItemLista">Nome: ${funcionarios[i].nome}</span> <span class="emailItemLista">Email: ${funcionarios[i].email}</span> <span
                        class="telefoneItemLista"> Telefone: ${funcionarios[i].telefone}  </span>
                         
                    <button class="btnDelete" onclick="deleteFuncionario(${funcionarios[i].idFuncionario})">Remover Acesso</button>`
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


}
listarFuncionarios()

function limparLista() {
    listaAtivosDiv.innerHTML = "";
    listaInativosDiv.innerHTML = ""
}

function listarFuncionariosInativos() {
    var empresa = sessionStorage.FK_EMPRESA;
    var funcionarios;

    fetch(`/gerenciadorUsuario/listarFuncionariosInativos/${empresa}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");

            if (resposta.ok) {
                resposta.json().then((json) => {

                    funcionarios = json;
                    for (var i = 0; i < funcionarios.length;) {

                        if (funcionarios[i].fkSupervisor == null) {



                        } else {

                            listaInativosDiv.innerHTML += `<div class="item"> <span class="nomeItemLista">Nome: ${funcionarios[i].nome}</span> <span class="emailItemLista">Email: ${funcionarios[i].email}</span> <span
                        class="telefoneItemLista"> Telefone: ${funcionarios[i].telefone}  </span>
                   `
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


}
listarFuncionariosInativos()





async function deleteFuncionario(idFuncionario) {

    const { value: password } = await Swal.fire({
        title: 'Digite a sua senha',
        input: 'password',
        inputLabel: 'Senha supervisor',
        inputPlaceholder: '',
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off'
        }
    })

    var emailVar = sessionStorage.EMAIL_USUARIO;
    var senhaVar = password;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
    fetch(`empresa/autenticar/funcionario/${emailVar}/${senhaVar}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!");

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then((json) => {
                    console.log(JSON.stringify(json));

                    if (password == json.senha) {
                        fetch(`/gerenciadorUsuario/deletar/funcionario/${idFuncionario}`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                            .then(function (resposta) {
                                console.log("ESTOU NO THEN DO listar()!");

                                if (resposta.ok) {
                                    resposta.json().then((json) => {
                                        limparLista()
                                        listarFuncionarios()
                                        listarFuncionariosInativos()
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
                        Swal.fire(`Usuario selecionado não possue mais acesso`)
                    } else {
                        Swal.fire(`Senha Invalida`)
                    }

                    sessionStorage.SENHA_USUARIO = json.senha;

                });
            } else {
                console.log("Houve um erro ao tentar validar senha");

                resposta.text().then((texto) => {
                    console.error(texto);
                    //finalizarAguardar(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });


    return false;






}
// for (var i = 0; i < funcionarios.length; i++) {

//     console.log(funcionarios[i] + "testeyhstggfd");

// 

