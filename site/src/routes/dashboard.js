var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/useCpu", function (req, res) {
    dashboardController.useCpu(req, res);
});

router.get("/useDisc", function (req, res) {
    dashboardController.useDisc(req, res);
});

router.get("/useRam", function (req, res) {
    dashboardController.useRam(req, res);
});

router.get("/useRede", function (req, res) {
    dashboardController.useRede(req, res);
});

module.exports = router;