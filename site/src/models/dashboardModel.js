var database = require("../database/config");

function getUseCpuByFuncId(id) {
	console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
	var instrucao = `
    select top 5 f.id,
	f.nome,
    c.id 'id_comp',
	c.uso,
	tp.tipoComponente,
	m.hora
	from funcionario f
		join especificacaoMaquina em 
			on em.id = f.fkMaquina
		join monitoramento m
			on em.id = m.fkMaquina
		join componente c
			on m.id = c.fkMonitoramento
		join tipoComponente tp
			on tp.id = c.fkTipoComponente
		where tp.tipoComponente = 'cpu' and f.id = ${id}
		order by c.id desc;`;
	console.log("Executando a instrução SQL: \n" + instrucao);
	return database.executar(instrucao);
}

function getUseDiscByFuncId(id) {
	console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
	var instrucao = `
	select top 1 f.id,
	f.nome,
    c.id 'id_comp',
	c.uso,
	tp.tipoComponente,
	m.hora
	from funcionario f
		join especificacaoMaquina em 
			on em.id = f.fkMaquina
		join monitoramento m
			on em.id = m.fkMaquina
		join componente c
			on m.id = c.fkMonitoramento
		join tipoComponente tp
			on tp.id = c.fkTipoComponente
		where tp.tipoComponente = 'disco' and f.id = ${id}
		order by c.id desc;`;
	console.log("Executando a instrução SQL: \n" + instrucao);
	return database.executar(instrucao);
}

function getUseRamByFuncId(id) {
	console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
	var instrucao = `
	select top 5 f.id,
	f.nome,
    c.id 'id_comp',
	c.uso,
	tp.tipoComponente,
	m.hora
	from funcionario f
		join especificacaoMaquina em 
			on em.id = f.fkMaquina
		join monitoramento m
			on em.id = m.fkMaquina
		join componente c
			on m.id = c.fkMonitoramento
		join tipoComponente tp
			on tp.id = c.fkTipoComponente
		where tp.tipoComponente = 'ram' and f.id = ${id}
		order by c.id desc;`;
	console.log("Executando a instrução SQL: \n" + instrucao);
	return database.executar(instrucao);
}

function getLatencyValue(id) {
	console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
	var instrucao = `
    select top 1 f.id,
	f.nome,
    p.id 'id_pacote',
    p.latencia
	from funcionario f
		join especificacaoMaquina em
			on em.id = f.fkMaquina
		join monitoramento m
			on em.id = m.fkMaquina
		join pacote p
			on m.id = p.fkMonitoramento
		where f.id = ${id}
		order by p.id desc;`;
	console.log("Executando a instrução SQL: \n" + instrucao);
	return database.executar(instrucao);
}

function getDataPackages(id) {
	console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
	var instrucao = `
    select top 20 f.id,
	f.nome,
    p.id 'id_pacote',
    p.bytesRecebidos,
    p.bytesEnviados,
    p.pacotesRecebidos,
    p.pacotesEnviados
	from funcionario f
		join especificacaoMaquina em
			on em.id = f.fkMaquina
		join monitoramento m
			on em.id = m.fkMaquina
		join pacote p
			on m.id = p.fkMonitoramento
		where f.id = ${id}
		order by p.id`;
	console.log("Executando a instrução SQL: \n" + instrucao);
	return database.executar(instrucao);
}

function getListFunc() {
	console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
	var instrucao = `
	select TOP 3 f.id,
    f.matricula,
    f.nome,
    a.fkTipoComponente,
    a.fkMonitoramento,
    a.nivelGravidade 
    from funcionario f 
        join especificacaoMaquina em
        on f.fkMaquina = em.id
        join monitoramento m
        on m.fkMaquina = em.id
        join alerta a 
        on a.fkMonitoramento = m.id
        order by m.id desc;`;
	console.log("Executando a instrução SQL: \n" + instrucao);
	return database.executar(instrucao);
}

function getArrayListFuncWithId(id) {
	console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
	var instrucao = `
	select TOP 3 f.id,
    f.matricula,
    f.nome,
    a.fkTipoComponente,
    a.fkMonitoramento,
    a.nivelGravidade 
    from funcionario f 
        join especificacaoMaquina em
        on f.fkMaquina = em.id
        join monitoramento m
        on m.fkMaquina = em.id
        join alerta a 
        on a.fkMonitoramento = m.id
		where f.id = ${id}
        order by m.id desc;
	`;
	console.log("Executando a instrução SQL: \n" + instrucao);
	return database.executar(instrucao);
}

function getArrayIdFunc(id) {
	console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
	var instrucao = `
	select f.id from funcionario f
	where fkGestor = ${id}
	`;
	console.log("Executando a instrução SQL: \n" + instrucao);
	return database.executar(instrucao);
}


module.exports = {
	getArrayListFuncWithId,
	getArrayIdFunc,
	getUseCpuByFuncId,
	getUseDiscByFuncId,
	getUseRamByFuncId,
	getLatencyValue,
	getDataPackages,
	getListFunc
}
