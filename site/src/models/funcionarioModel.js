var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM funcionario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarFuncionario(matricula) {
    var instrucao = `
        SELECT id,nome,matricula,fkSetor, numeroSerial, funcao FROM funcionario WHERE matricula = '${matricula}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function autenticarFUNC(matricula) {
    var instrucao = `
    SELECT f.id,f.nome,f.matricula,f.fkSetor, m.numeroSerial FROM funcionario f LEFT JOIN especificacaoMaquina m ON f.fkMaquina = m.id where matricula = '${matricula}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar(nome, matricula, setor, numeroSerial) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", nome, matricula, setor, numeroSerial, funcao);
    var instrucao = `
        INSERT INTO funcionario (nome, matricula, setor, numeroSerial)
        VALUES ('${nome}', '${matricula}', '${setor}', '${numeroSerial}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterar(nome, matricula, setor, numeroSerial, funcao, id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", nome, matricula, setor, numeroSerial, funcao,id);
    var instrucao = `
        UPDATE funcionario SET 
        nome = '${nome}',
        matricula = '${matricula}',
        setor = '${setor}',
        numeroSerial = '${numeroSerial}',
        funcao = '${funcao}'
        WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", id);
    var instrucao = `
        DELETE FROM funcionario WHERE id = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    pegarFuncionario,
    autenticarFUNC,
    cadastrar,
    alterar,
    deletar
}
