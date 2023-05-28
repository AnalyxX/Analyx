var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/pegarUsuario", function (req, res) {
    usuarioController.pegarUsuario(req, res);
});

router.post("/autenticarUSU", function (req, res) {
    usuarioController.autenticarUSU(req, res);
});

router.put("/alterar", function (req, res) {
    usuarioController.alterar(req, res);
});

router.delete("/deletar", function (req, res) {
    usuarioController.deletar(req, res);
});

module.exports = router;