var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.post("/cadastrar", function (req, res) {
    maquinaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    maquinaController.listar(req, res);
});

router.get("/pegarMaquina/:id", function (req, res) {
    maquinaController.getMaquina(req, res);
});

router.put("/alterar/:id", function (req, res) {
    maquinaController.alterar(req, res);
});

router.delete("/deletar/:id", function (req, res) { 
    maquinaController.deletar(req, res);
});

module.exports = router;