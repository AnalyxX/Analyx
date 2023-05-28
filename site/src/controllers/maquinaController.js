var maquinaModel = require("../models/maquinaModel");

function listar(req, res) {
    maquinaModel.listar()
    .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length > 0) {
            console.log(resultado);
            res.json(resultado);

        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function getMaquina(req, res) {
    var hostName = req.body.hostNameAltServer;

    maquinaModel.getMaquina(hostName)
    if (hostName == undefined) {
        res.status(400).send("Seu hostName está undefined!");
    } else {

        maquinaModel.getMaquina(hostName)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length >= 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    }else{
                        res.status(403).send("Email e/ou senha inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar empresar! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

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

    var cpu = req.body.cpunovoServer;
    var disco = req.body.disconovoServer;
    var ram = req.body.ramnovoServer;
    var hostName = req.body.hostNamenovoServer;
    var hostNameVelho =  req.body.hostNameVelhoServer;

    if (cpu == undefined) {
        res.status(400).send("Sua cpu está undefined!");
    } else if (disco == undefined) {
        res.status(400).send("Seu disco está undefined!");
    } else if (ram == undefined) {
        res.status(400).send("Sua ram está undefined!");
    } else if (hostName == undefined) {
        res.status(400).send("Seu serial está undefined!");
    } else if (hostNameVelho == undefined) {
        res.status(400).send("Seu serial está undefined!");

    } else {
        
        maquinaModel.alterar(cpu, disco, ram, hostName, hostNameVelho)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao tentar alterar uma maquina! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res) {
    var maquina = req.body.idServer;

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