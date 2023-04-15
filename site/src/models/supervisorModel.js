var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarFuncionario(nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, empresaFuncionario, fkSupervisor) {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, empresaFuncionario);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into Funcionario (email, senha, nome, telefone, fkEmpresa, fkSupervisor) values 
    ( '${emailFuncionario}', '${senhaFuncionario}' , '${nomeFuncionario}' , '${telefoneFuncionario}' ,${empresaFuncionario}, ${fkSupervisor});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarUsuario(idFuncionario) {

    var instrucao = `update funcionario SET statusFuncionario = 0 where idFuncionario = ${idFuncionario}`


    return database.executar(instrucao);
}

function listarFuncionarios(idEmpresa) {
    console.log(idEmpresa)
    var instrucao = `SELECT idFuncionario, nome, email, senha, telefone, fkEmpresa, fkSupervisor
    FROM ErrorEagle.Funcionario where fkEmpresa = ${idEmpresa};
    `
    return database.executar(instrucao);
}


module.exports = {
    cadastrarFuncionario,
    deletarUsuario, listarFuncionarios
};