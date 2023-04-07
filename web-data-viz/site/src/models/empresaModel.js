var database = require("../database/config")

function listar() {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM EMPRESA;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarFuncionario(email, senha) {
    console.log("ACESSEI O Empresas MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
    select f.email, f.senha
		from Funcionario as f WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarEndereco(cep, bairro, rua, numero, estado, cidade) {

    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEndereco(): ", cep, bairro, rua, numero, estado, cidade)
    var instrucao = `insert into Endereco (cep, bairro, rua, numero, estado, cidade) values 
    ('${cep}','${bairro}','${rua}',${numero},'${estado}','${cidade}');`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function cadastrarFuncionario(nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, supervisor) {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, supervisor);

}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO EMPRESA (name, email, password) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar, entrarFuncionario, listar, cadastrarEndereco, cadastrarFuncionario
};