var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select * from especificacaoMaquina e join cpu c on e.fkCpu = c.id join ram r on e.fkRam = r.id join disco d on e.fkDisco = d.id;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getMaquina(hostName) {
    var instrucao = `
        SELECT id,fkCpu,fkDisco,fkRam,hostName FROM especificacaoMaquina WHERE hostName = '${hostName}';
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

function alterar(cpu, disco, ram, hostName, hostNameVelho) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", cpu, disco, ram, hostName,hostNameVelho);
    var instrucao = `
        UPDATE especificacaoMaquina SET 
        fkCpu = '${cpu}',
        fkDisco = '${disco}',
        fkRam = '${ram}',
        hostName = '${hostName}'
        WHERE hostName = '${hostNameVelho}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function deletar(id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", id);

    try {
        
        var instrucaoComponente = `DELETE FROM pacote WHERE fkMaquina = ${id};`;
        console.log("Executando a instrução SQL para deletar registros em 'componente': \n" + instrucaoComponente);
        await database.executar(instrucaoComponente);
        // Excluir registros relacionados em 'monitoramento'
        
        var instrucaoComponente = `DELETE FROM alerta WHERE fkMaquina = ${id};`;
        console.log("Executando a instrução SQL para deletar registros em 'componente': \n" + instrucaoComponente);
        await database.executar(instrucaoComponente);

        var instrucaoComponente = `DELETE FROM componente WHERE fkMaquina = ${id};`;
        console.log("Executando a instrução SQL para deletar registros em 'componente': \n" + instrucaoComponente);
        await database.executar(instrucaoComponente);

        var instrucaoMonitoramento = `DELETE FROM monitoramento WHERE fkMaquina = ${id};`;
        console.log("Executando a instrução SQL para deletar registros em 'monitoramento': \n" + instrucaoMonitoramento);
        await database.executar(instrucaoMonitoramento);

        var instrucaoFuncionario = `UPDATE funcionario SET fkMaquina = NULL WHERE fkMaquina = ${id};`;
        console.log("Executando a instrução SQL para deletar registros em 'monitoramento': \n" + instrucaoFuncionario);
        await database.executar(instrucaoFuncionario);
        
        // Excluir a especificação da máquina
        var instrucaoEspecificacao = `DELETE FROM especificacaoMaquina WHERE id = ${id};`;
        console.log("Executando a instrução SQL para deletar a especificação da máquina: \n" + instrucaoEspecificacao);
        await database.executar(instrucaoEspecificacao);
        
        console.log("Deleção concluída com sucesso.");
    } catch (error) {
        console.error("Houve um erro ao deletar a máquina:", error);
    }
    return database.executar(instrucaoMonitoramento,instrucaoEspecificacao,instrucaoComponente,instrucaoFuncionario);
}

module.exports = {
    listar,
    getMaquina,
    cadastrar,
    alterar,
    deletar
}
