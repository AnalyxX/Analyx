var database = require("../database/config");

function getUseCpuByFuncId(id) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select f.id,
	f.nome,
    c.id 'id_comp',
	c.uso,
	tp.tipoComponente
	from funcionario f
		join especificacaoMaquina em 
			on em.id = f.id
		join monitoramento m
			on em.id = m.maquina
		join componente c
			on m.id = c.monitoramento
		join tipoComponente tp
			on tp.id = c.tipoComponente
		where tp.tipoComponente = "cpu" and f.id = 1
		order by c.id desc
		limit 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getUseDiscByFuncId(id) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select f.id,
	f.nome,
    c.id 'id_comp',
	c.uso,
	tp.tipoComponente
	from funcionario f
		join especificacaoMaquina em 
			on em.id = f.id
		join monitoramento m
			on em.id = m.maquina
		join componente c
			on m.id = c.monitoramento
		join tipoComponente tp
			on tp.id = c.tipoComponente
		where tp.tipoComponente = "disco" and f.id = 1
		order by c.id desc
		limit 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getUseRamByFuncId(id) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select f.id,
	f.nome,
    c.id 'id_comp',
	c.uso,
	tp.tipoComponente
	from funcionario f
		join especificacaoMaquina em 
			on em.id = f.id
		join monitoramento m
			on em.id = m.maquina
		join componente c
			on m.id = c.monitoramento
		join tipoComponente tp
			on tp.id = c.tipoComponente
		where tp.tipoComponente = "ram" and f.id = 1
		order by c.id desc
		limit 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    getUseCpuByFuncId,
    getUseDiscByFuncId,
    getUseRamByFuncId
}
