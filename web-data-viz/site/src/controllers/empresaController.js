var empresaModel = require("../models/empresaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarEmpresa(req, res) {
    var emallEmpres = req.body.emailServer
    empresaModel.listarEmpresa()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function listarFuncionario(req, res) {
    var nome = req.body.nomeFuncionarioServer;
    var email = req.body.emailFuncionarioServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        empresaModel.listarFuncionario(nome, email).then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }


}
function autenticarEmpresa(req, res) {
    var email = req.body.emailFuncionarioServer;
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {
        empresaModel.autenticarEmpresa(email)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

function cadastrarFuncionario(req, res) {
    var nomeFuncionario = req.body.nomeFuncionarioServer;
    var emailFuncionario = req.body.emailFuncionarioServer;
    var senhaFuncionario = req.body.senhaFuncionarioServer;
    var telefoneFuncionario = req.body.telefoneFuncionarioServer;
    var empresaFuncionario = req.body.empresaFuncionarioServer;
    var supervisor = req.body.supevisorOfFuncionario;
    if (nomeFuncionario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailFuncionario == null) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaFuncionario == null) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefoneFuncionario == null) {
        res.status(400).send("Seu telefoneFuncionario está undefined!");
    } else if (empresaFuncionario == null) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (supervisor == null) {
        res.status(400).send("Seu supervisor está undefined!");
    } else {
        empresaModel.cadastrarFuncionario(nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, supervisor).then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }


}
function cadastrarEmpresa(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeFuncionario = req.body.nomeFuncionarioServer;
    var razaoSocial = req.body.razaoSocialServer;
    var cnpj = cnpj = req.body.cnpjServer;
    var telefone = req.body.telefoneServer;
    var telefone1 = req.body.telefoneOptionalServer;
    var email = req.body.dominioServer;

    // Faça as validações dos valores
    if (nomeFuncionario == undefined) {
        res.status(400).send("O nome do responsável está undefined!");
    } else if (razaoSocial == undefined) {
        res.status(400).send("A razão social está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("O CNPJ está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("O telefone está undefined!");
    } else if (telefone1 == undefined) {
        telefone = "";
    } else if (email == undefined) {
        res.status(400).send("O email está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivoempresaModel.js
        empresaModel.cadastrarEmpresa(nomeResponsavel, razaoSocial, cnpj, telefone, telefone1, email,)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEndereco(req, res) {

    var cep = req.body.cepServer;
    var bairro = req.body.cepServer;
    var rua = req.body.ruaServer;
    var numero = req.body.numeroServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;

    empresaModel.cadastrarEndereco(cep, bairro, rua, numero, estado, cidade).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


function entrarFuncionario(req, res) {

    var email = req.params.email;
    var senha = req.params.senha;

    console.log(email);
    console.log(senha);

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        empresaModel.entrarFuncionario(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


module.exports = {
    cadastrarEndereco,
    cadastrarEmpresa,
    cadastrarFuncionario,
    entrarFuncionario,
    listarEmpresa,
    listarFuncionario,
    autenticarEmpresa

}