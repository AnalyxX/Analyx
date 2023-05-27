const { response } = require("express");
var funcionarioModel = require("../models/funcionarioModel.js");

function listar(req, res) {
    funcionarioModel.listar()
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

function pegarFuncionario(req, res) {
    var matricula = req.body.matriculaAltServer;

    funcionarioModel.pegarFuncionario(matricula)
    if (matricula == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        funcionarioModel.pegarFuncionario(matricula)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length >= 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    }else{
                        res.status(204).send("Nenhum resultado encontrado!")
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

function autenticarFUNC(req, res) {
    var matricula = req.body.matriculaServer;

    if (matricula == undefined) {
        res.status(400).send("Sua matricula está undefined!");
    } else {
        
        funcionarioModel.autenticarFUNC(matricula)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length >= 1) {
                        res.json(response);
                    } else if (resultado.length == 0) {
                        res.status(403).send("(falha na matricula!)");

                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o cadastro da empresa! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var matricula = req.body.razaoServer;
    var setor = req.body.setorServer;
    var numeroSerial = req.body.numeroSerialServer;
    // var funcao = req.body.funcaoServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (matricula == undefined) {
        res.status(400).send("Sua razão social está undefined!");
    } else if (setor == undefined) {
        res.status(400).send("Seu responsável está undefined!");
    } else if (numeroSerial == undefined) {
        res.status(400).send("Seu numeroSerial está undefined!");
    // } else if (funcao == undefined) {
        // res.status(400).send("Sua funcao está undefined!");
    } else {

        funcionarioModel.cadastrar(nome, matricula, setor, numeroSerial)
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

    var nome = req.body.nomenovoServer;
    var matricula = req.body.razaonovoServer;
    var setor = req.body.setornovoServer;
    var numeroSerial = req.body.numeroSerialnovoServer;
    var funcao = req.body.funcaonovoServer;
    var id = req.body.idServer;

    funcionarioModel.alterar(nome, matricula, setor, numeroSerial, funcao, id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao tentar alterar uma empresa! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var id = req.body.idServer;

    funcionarioModel.deletar(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar a empresa: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    pegarFuncionario,
    autenticarFUNC,
    cadastrar,
    alterar,
    deletar
};