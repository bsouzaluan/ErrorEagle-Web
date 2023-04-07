function abrirLogin() {
    var cadastroId = document.querySelector(".cadastro");
    var loginId = document.querySelector(".login");
    cadastroId.style = "display:none"
    console.log("Abrir login")
    loginId.style = "display:flex;"
}
function abrirCadastro() {
    var cadastroId = document.querySelector(".cadastro");
    var loginId = document.querySelector(".login");
    loginId.style = "display:none;"
    console.log("Abrir cadastro")
    cadastroId.style = "display:flex;"
}
function closeCadastro() {
    var cadastroId = document.querySelector(".cadastro");
    cadastroId.style = "display:none"
}
function closeLogin() {
    var loginId = document.querySelector(".login");
    loginId.style = "display:none;"

}

function checkCamposCadastroEmpresa() {
    var razaoSocial = inpRazaoSocial.value
    var cnpj = inpCNPJ.value
    var telefone1 = inpTelefone1.value
    var telefone = inpTelefone.value
    var nomeFuncionario = nomeCadastro.value
    var emailFuncionario = inpEmailCadastro.value
    var telefoneFuncionario = inpTelefoneFuncionario.value
    var senhaVar = inpSenhaCadastro.value
    var senhaConfirmVar = inpSenhaConfirmacao.value

    let hasEmptyFields = false; // flag para verificar se há campos vazios

    if (razaoSocial === "") {
        inpRazaoSocial.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpRazaoSocial.style = "border: 1px solid #ccc; ";
    }

    if (cnpj === "") {
        inpCNPJ.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpCNPJ.style = "border: 1px solid #ccc; ";
    }

    if (telefone1 === "") {
        inpTelefone1.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpTelefone1.style = "border: 1px solid #ccc; ";
    }

    if (telefone === "") {
        inpTelefone.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpTelefone.style = "border: 1px solid #ccc; ";
    }

    if (nomeFuncionario === "") {
        nomeCadastro.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        nomeCadastro.style = "border: 1px solid #ccc; ";
    }

    if (emailFuncionario === "") {
        inpEmailCadastro.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpEmailCadastro.style = "border: 1px solid #ccc; ";
    }



    if (telefoneFuncionario === "") {
        inpTelefoneFuncionario.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpTelefoneFuncionario.style = "border: 1px solid #ccc; ";
    }

    if (senhaVar === "") {
        inpSenhaCadastro.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpSenhaCadastro.style = "border: 1px solid #ccc; ";
    }

    if (senhaConfirmVar === "") {
        inpSenhaConfirmacao.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpSenhaConfirmacao.style = "border: 1px solid #ccc; ";
    }


    if (hasEmptyFields) {
        Swal.fire({
            title: 'Preencha todos os campos',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        return false;
    }

    if (inpSenhaCadastro.value != inpSenhaConfirmacao.value) {
        inpSenhaConfirmacao.style = "border: 3px solid #ff0000 ;";
        inpSenhaCadastro.style = "border: 3px solid #ff0000 ;";
        Swal.fire({
            title: 'Senhas não coincidem',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        return false;
    }
    return true; // retorna verdadeiro se não há campos vazios
}

function limparErros() {
    nomeVar = nomeCadastro.value;
    razaoSocial = inpRazaoSocial.value;
    cnpj = inpCNPJ.value;
    telefone = inpTelefone.value;
    telefone1 = inpTelefone1.value;
    emailVar = inpEmailCadastro.value;
    senhaVar = inpSenhaCadastro.value;
    confirmacaoSenhaVar = inpSenhaConfirmacao.value;
    const limpar = setTimeout(() => {
        nomeCadastro.style = " border: 1px solid #ccc; "
        inpRazaoSocial.style = " border: 1px solid #ccc; "
        inpCNPJ.style = " border: 1px solid #ccc; ;"
        inpTelefone.style = " border: 1px solid #ccc; "
        inpTelefone1.style = " border: 1px solid #ccc; "
        inpTelefoneFuncionario.style = " border: 1px solid #ccc; "
        inpEmailCadastro.style = " border: 1px solid #ccc; "
        inpSenhaCadastro.style = " border: 1px solid #ccc; "
        inpSenhaConfirmacao.style = " border: 1px solid #ccc; "
    }, 5000)

}

function validarLogin() {
    var emailVar = inpEmailLogin.value;
    var senhaVar = inpSenhaLogin.value;

    let hasEmptyFields = false; // flag para verificar se há campos vazios

    if (emailVar === "") {
        inpEmailLogin.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpEmailLogin.style = "border: 1px solid #ccc; ";
    }

    if (senhaVar === "") {
        inpSenhaLogin.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;

    } else {
        inpSenhaLogin.style = "border: 1px solid #ccc;";
    }

    if (hasEmptyFields == true) {
        Swal.fire({
            title: 'Preencha todos os campos',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        console.log("hasEmptyFields")
        return false;
    }

    // Aqui você pode adicionar a lógica para verificar se o email e senha são válidos.
    // Isso depende da forma como você está autenticando o usuário, seja por meio de um banco de dados ou outra fonte de dados.

    return true; // retorna verdadeiro se não há campos vazios
}


function entrar() {

    // aguardar();
    if (validarLogin() == true) {
        var emailVar = inpEmailLogin.value;
        var senhaVar = inpSenhaLogin.value;

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
                        console.log(json);
                        console.log(JSON.stringify(json));

                        sessionStorage.EMAIL_USUARIO = json.email;
                        sessionStorage.NOME_USUARIO = json.nome;
                        sessionStorage.ID_USUARIO = json.id;

                        setTimeout(function () {

                            window.location = "./dashboard/cards.html";
                        }, 1000); // apenas para exibir o loading
                    });
                } else {
                    console.log("Houve um erro ao tentar realizar o login!");

                    resposta.text().then((texto) => {
                        console.error(texto);
                        //finalizarAguardar(texto);
                    });
                }
            })
            .catch(function (erro) {
                console.log(erro);
            });
    } else {
        console.log("Erro na validação")
    }

    return false;
}
function cadastrarEmpresaFuncionarioResponsavel() {
    //aguardar();
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var cep = inpCep.value;
    var bairro = inpBairro.value;
    var rua = inpRua.value;
    var numero = inpNumero.value;
    var estado = inpEstado.value;
    var cidade = inpCidade.value;

    var nomeFuncionario = nomeCadastro.value;
    var emailFuncionario = inpEmailCadastro.value;
    var telefoneFuncionario = inpTelefoneFuncionario.value;
    var senhaVar = inpSenhaCadastro.value;

    var razaoSocial = inpRazaoSocial.value;
    var cnpj = inpCNPJ.value;
    var telefone1 = inpTelefone1.value;
    var telefone = inpTelefone.value;
    var dominioVar = emailFuncionario.match(/@(.*)$/);


    var idEmpresaAtual;
    var idEnderecoAtual;
    // emailServer: emailVar,
    // senhaServer: senhaVar,

    if (checkCamposCadastroEmpresa()) {


        fetch("/empresa/cadastrar/endereco", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                cepServer: cep,
                bairroServer: bairro,
                ruaServer: rua,
                numeroServer: numero,
                estadoServer: estado,
                cidadeServer: cidade
            }),
        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {

                resposta.json().then((json) => {
                    idEnderecoAtual = json.id;
                })
                // cardErro.style.display = "block";

                //mensagem_erro.innerHTML =
                // "Cadastro realizado com sucesso! Redirecionando para tela de Login...";



                // limparFormulario();
                // finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                // finalizarAguardar();
            });


        fetch("/empresa/cadastrar/empresa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                razaoSocialServer: razaoSocial,
                cnpjServer: cnpj,
                telefoneServer: telefone,
                telefoneOptionalServer: telefone1,
                dominioServer: dominioVar,
                fkEnderecoServer: idEnderecoAtual
            }),
        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {

                resposta.json().then((json) => {

                    idEmpresaAtual = json.id;

                })
                // cardErro.style.display = "block";

                //mensagem_erro.innerHTML =
                // "Cadastro realizado com sucesso! Redirecionando para tela de Login...";



                // limparFormulario();
                // finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                // finalizarAguardar();
            });

        fetch("/empresa/cadastrar/funcionario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeFuncionarioServer: nomeFuncionario,
                emailFuncionarioServer: emailVar,
                senhaFuncionarioServer: senhaVar,
                telefoneFuncionarioServer: telefoneFuncionario,
                empresaFuncionarioServer: idEmpresaAtual
            }),
        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                // cardErro.style.display = "block";

                //mensagem_erro.innerHTML =
                // "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "index.html";
                }, "2000");

                // limparFormulario();
                // finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                // finalizarAguardar();
            });

        return false;
    } else {
        console.log("Não entrou no cadastro")
    }

    // Enviando o valor da nova input

}

// btnSairShow();

//Mask Test
//CleaverJS lib de masks
new Cleave('.input-phone', {
    delimiters: ['(', ') ', ' - '],
    blocks: [0, 2, 5, 4]
});
new Cleave('.input-phone1', {
    delimiters: ['(', ') ', ' - '],
    blocks: [0, 2, 5, 4]
});
new Cleave('.input-phone2', {
    delimiters: ['(', ') ', ' - '],
    blocks: [0, 2, 5, 4]
});

new Cleave('.cnpjMask', {
    delimiters: ['.', '.', '/', '-'],
    blocks: [2, 3, 3, 4, 2],

});