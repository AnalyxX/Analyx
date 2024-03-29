var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/getUseCpuByFuncId/:id", function (req, res) {
    dashboardController.getUseCpuByFuncId(req, res);
});

router.get("/getUseDiscByFuncId/:id", function (req, res) {
    dashboardController.getUseDiscByFuncId(req, res);
});

router.get("/getUseRamByFuncId/:id", function (req, res) {
    dashboardController.getUseRamByFuncId(req, res);
});

router.get("/getLatencyValue/:id", function (req, res) {
    dashboardController.getLatencyValue(req, res);
});

router.get("/getDataPackages/:id", function (req, res) {
    dashboardController.getDataPackages(req, res);
});

router.get("/getListFunc", function (req, res) {
    dashboardController.getListFunc(req, res);
});

router.get("/getArrayIdFunc/:id", function (req, res) {
    dashboardController.getArrayIdFunc(req, res);
});

router.get("/getArrayListFuncWithId/:id", function (req, res) {
    dashboardController.getArrayListFuncWithId(req, res);
});

module.exports = router;