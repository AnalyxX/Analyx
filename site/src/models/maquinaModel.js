var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM especificacaoMaquina;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getMaquina(numeroSerial) {
    var instrucao = `
        SELECT id,fkCpu,fkDisco,fkRam,numeroSerial FROM especificacaoMaquina WHERE numeroSerial = '${numeroSerial}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(cpu, disco, ram, serial) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", cpu, disco, ram, serial);
    var instrucao = `
        INSERT INTO especificacaoMaquina (cpu, disco, ram, serial)
        VALUES ('${cpu}', '${disco}', '${ram}', '${serial}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterar(cpu, disco, ram, serial, serialVelho) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", cpu, disco, ram, serial,serialVelho);
    var instrucao = `
        UPDATE especificacaoMaquina SET 
        fkCpu = '${cpu}',
        fkDisco = '${disco}',
        fkRam = '${ram}',
        numeroSerial = '${serial}'
        WHERE numeroSerial = '${serialVelho}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function deletar(id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", id);

    try {
        // Excluir registros relacionados em 'monitoramento'
        var instrucaoComponente = `DELETE FROM componente WHERE fkMonitoramento IN (SELECT id FROM monitoramento WHERE fkMaquina = ${id});`;
        console.log("Executando a instrução SQL para deletar registros em 'componente': \n" + instrucaoComponente);
        await database.executar(instrucaoComponente);

        var instrucaoMonitoramento = `DELETE FROM monitoramento WHERE fkMaquina = ${id};`;
        console.log("Executando a instrução SQL para deletar registros em 'monitoramento': \n" + instrucaoMonitoramento);
        await database.executar(instrucaoMonitoramento);
        
        // Excluir a especificação da máquina
        var instrucaoEspecificacao = `DELETE FROM especificacaoMaquina WHERE id = ${id};`;
        console.log("Executando a instrução SQL para deletar a especificação da máquina: \n" + instrucaoEspecificacao);
        await database.executar(instrucaoEspecificacao);
        
        console.log("Deleção concluída com sucesso.");
    } catch (error) {
        console.error("Houve um erro ao deletar a máquina:", error);
    }
    return database.executar(instrucaoMonitoramento,instrucaoEspecificacao,instrucaoComponente);
}

module.exports = {
    listar,
    getMaquina,
    cadastrar,
    alterar,
    deletar
}
