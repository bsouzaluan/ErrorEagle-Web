var empresaModel = require("../models/supervisorModel");

var sessoes = [];

function cadastrarFuncionario(req, res) {
    var nomeFuncionario = req.body.nomeFuncionarioServer;
    var emailFuncionario = req.body.emailFuncionarioServer;
    var senhaFuncionario = req.body.senhaFuncionarioServer;
    var telefoneFuncionario = req.body.telefoneFuncionarioServer;
    var empresaFuncionario = req.body.empresaFuncionarioServer;
    var fkSupervisor = req.body.fkSupervisorServer;


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
    } else if (fkSupervisor == null) {
        res.status(400).send("ID resposável está undefined!");
    }
    else {
        supervisorModel.cadastrarFuncionario(nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, empresaFuncionario, fkSupervisor).then(
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

function deletarUsuario(req, res) {
    var idFuncionario = req.body.idFuncionarioServer;

    if (idFuncionario == undefined) {
        res.status(400).send("Seu idFuncionario está undefined!");

    } else {
        supervisorModel.deletarUsuario(idFuncionario).then(
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
module.exports = {
    cadastrarFuncionario,
    deletarUsuario
}