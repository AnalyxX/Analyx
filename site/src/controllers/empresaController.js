var empresaModel = require("../models/empresaModel");

function listar(req, res) {
    empresaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma empresa encontrada!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta de empresas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pegarEmpresa(req, res) {
    var cnpj = req.body.cnpjAltServer;

    empresaModel.pegarEmpresa(cnpj)
    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else {

        empresaModel.pegarEmpresa(cnpj)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
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

    var cnpj = req.body.cnpjServer;
    var razaoSocial = req.body.razaoServer;
    var responsavel = req.body.responsavelServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;

    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (razaoSocial == undefined) {
        res.status(400).send("Sua razão social está undefined!");
    } else if (responsavel == undefined) {
        res.status(400).send("Seu responsável está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Sua telefone está undefined!");
    } else {

        empresaModel.cadastrar(cnpj, razaoSocial, responsavel, email, telefone)
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

    var cnpj = req.body.cnpjnovoServer;
    var razaoSocial = req.body.razaonovoServer;
    var responsavel = req.body.responsavelnovoServer;
    var email = req.body.emailnovoServer;
    var telefone = req.body.telefonenovoServer;
    var id = req.body.idServer;

    empresaModel.alterar(cnpj, razaoSocial, responsavel, email, telefone, id)
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
    var empresa = req.params.id;

    empresaModel.deletar(empresa)
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
    pegarEmpresa,
    cadastrar,
    alterar,
    deletar
};