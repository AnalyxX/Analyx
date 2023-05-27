var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarEmpresa(cnpj) {
    var instrucao = `
        SELECT id,cnpj,razaoSocial,responsavel, email, telefone FROM empresa WHERE cnpj = '${cnpj}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(cnpj, razaoSocial, responsavel, email, telefone) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", cnpj, razaoSocial, responsavel, email, telefone);
    var instrucao = `
        INSERT INTO empresa (cnpj, razaoSocial, responsavel, email, telefone)
        VALUES ('${cnpj}', '${razaoSocial}', '${responsavel}', '${email}', '${telefone}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterar(cnpj, razaoSocial, responsavel, email, telefone, id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", cnpj, razaoSocial, responsavel, email, telefone,id);
    var instrucao = `
        UPDATE empresa SET 
        cnpj = '${cnpj}',
        razaoSocial = '${razaoSocial}',
        responsavel = '${responsavel}',
        email = '${email}',
        telefone = '${telefone}'
        WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", id);
    var instrucao = `
        DELETE FROM empresa WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    pegarEmpresa,
    cadastrar,
    alterar,
    deletar
}
