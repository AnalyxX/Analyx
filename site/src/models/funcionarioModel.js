var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select * from funcionario f join empresa e on f.fkEmpresa = e.id join funcionario g on f.fkGestor = g.id join setor s on f.fkSetor = s.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarFuncionario(matricula) {
    var instrucao = `
        SELECT f.id,f.nome,f.matricula,f.fkSetor, f.fkEmpresa, fkGestor FROM funcionario f Left JOIN especificacaoMaquina m ON f.fkMaquina = m.id WHERE matricula = '${matricula}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function autenticarFUNC(matricula) {
    var instrucao = `
    SELECT f.id,f.nome,f.matricula,f.fkSetor, f.fkGestor, f.fkEmpresa FROM funcionario f LEFT JOIN especificacaoMaquina m ON f.fkMaquina = m.id where matricula = '${matricula}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar(nome, matricula, empresa, gestor, setor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", nome, matricula, empresa, gestor, setor);
    if (gestor == 'null') {
        var instrucao = `
        INSERT INTO funcionario (nome, matricula, fkEmpresa, fkSetor)
        VALUES ('${nome}', '${matricula}', '${empresa}','${setor}');
    `;

    } else {
        var instrucao = `
        INSERT INTO funcionario (nome, matricula, fkEmpresa, fkGestor, fkSetor)
        VALUES ('${nome}', '${matricula}', '${empresa}', '${gestor}','${setor}');
    `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterar(nome, matricula, setor, empresa, gestor, id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", nome, matricula, setor, empresa, gestor, id);
    var instrucao = `
        UPDATE funcionario SET 
        nome = '${nome}',
        matricula = '${matricula}',
        fkSetor = '${setor}',
        fkEmpresa = '${empresa}',
        fkGestor = '${gestor}'
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
