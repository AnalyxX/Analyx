var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.post("/cadastrar", function (req, res) {
    funcionarioController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    funcionarioController.listar(req, res);
});

router.post("/pegarFuncionario", function (req, res) {
    funcionarioController.pegarFuncionario(req, res);
});

router.post("/autenticarFUNC", function (req, res) {
    funcionarioController.autenticarFUNC(req, res);
});


router.put("/alterar/", function (req, res) {
    funcionarioController.alterar(req, res);
});

router.delete("/deletar", function (req, res) { 
    funcionarioController.deletar(req, res);
});

module.exports = router;