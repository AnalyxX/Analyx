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

router.get("/getFuncName", function (req, res) {
    dashboardController.getFuncName(req, res);
});

router.get("/getLatencyValue/:id", function (req, res) {
    dashboardController.getLatencyValue(req, res);
});

router.get("/getDataPackages/:id", function (req, res) {
    dashboardController.getDataPackages(req, res);
});

module.exports = router;