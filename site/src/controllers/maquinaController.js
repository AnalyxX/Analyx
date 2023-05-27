var maquinaModel = require("../models/maquinaModel");

function listar(req, res) {
    maquinaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma maquina encontrada!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta de maquinas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function getMaquina(req, res) {
    var maquina = req.params.id;

    maquinaModel.getMaquina(maquina)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao requistar a maquina: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    
    var cpu = req.body.cpuServer;
    var disco = req.body.discoServer;
    var ram = req.body.ramServer;
    var serial = req.body.serialServer;

    if (cpu == undefined) {
        res.status(400).send("Sua cpu está undefined!");
    } else if (disco == undefined) {
        res.status(400).send("Seu disco está undefined!");
    } else if (ram == undefined) {
        res.status(400).send("Sua ram está undefined!");
    } else if (serial == undefined) {
        res.status(400).send("Seu serial está undefined!");

    } else {
        
        maquinaModel.cadastrar(cpu, disco, ram, serial)
            .then(
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
            );
    }
}

function alterar(req, res) {

    var cpu = req.body.cpuServer;
    var disco = req.body.discoServer;
    var ram = req.body.ramServer;
    var serial = req.body.serialServer;
    var id = req.params.id;

    if (cpu == undefined) {
        res.status(400).send("Sua cpu está undefined!");
    } else if (disco == undefined) {
        res.status(400).send("Seu disco está undefined!");
    } else if (ram == undefined) {
        res.status(400).send("Sua ram está undefined!");
    } else if (serial == undefined) {
        res.status(400).send("Seu serial está undefined!");

    } else {
        
        maquinaModel.cadastrar(cpu, disco, ram, serial, id)
            .then(
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
            );
    }
}

function deletar(req, res) {
    var maquina = req.params.id;

    maquinaModel.deletar(maquina)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar a maquina: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar, 
    getMaquina,
    cadastrar,
    alterar,
    deletar
};