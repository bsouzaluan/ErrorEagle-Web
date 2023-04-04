var empresaModel = require("../models/empresaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarEmpresa(req, res) {
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

    if (email.)

        empresaModel.listarFuncionario();
}
function autenticarEmpresa() {
    empresaModel.autenticarEmpresa();
}

function cadastrarFuncionario(req, res) {
    empresaModel.cadastrarFuncionario()
}

function entrarFuncionario(req, res) {

    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

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
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function cadastrarEmpresa(req, res) {
    var nomeResponsavel = req.body.nomeServer;
    var razaoSocial = req.body.razaoSocialServer;
    var cnpj = cnpj = req.body.cnpjServer;
    var telefone = req.body.telefoneServer;
    var telefone1 = req.body.telefoneOptionalServer;
    var email = req.body.emailServer;
    empresaModel.cadastrarEndereco()
}
function cadastrarFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeFuncionarioServer;
    var email = req.body.emailFuncionarioServer;
    var senha = req.body.senhaServer;
    var telefone = req.body

    // Faça as validações dos valores
    if (nomeResponsavel == undefined) {
        res.status(400).send("O nome do responsável está undefined!");
    } else if (razaoSocial == undefined) {
        res.status(400).send("A razão social está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("O CNPJ está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("O telefone está undefined!");
    } else if (email == undefined) {
        res.status(400).send("O email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("A senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivoempresaModel.js
        empresaModel.cadastrar(nomeResponsavel, razaoSocial, cnpj, telefone, email, senha)
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

module.exports = {
    entrarFuncionario,
    cadastrarEmpresa,
    cadastrarFuncionario,
    listarFuncionarios,
    autenticarEmpresa,
    listarEmpresa,
    testar
}