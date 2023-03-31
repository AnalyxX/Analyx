var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    empresaController.listar(req, res);
});

router.get("/pegarEmpresa/:id", function (req, res) {
    empresaController.getEmpresa(req, res);
});

router.put("/alterar/:id", function (req, res) {
    empresaController.alterar(req, res);
});

router.delete("/deletar/:id", function (req, res) { 
    empresaController.deletar(req, res);
});

