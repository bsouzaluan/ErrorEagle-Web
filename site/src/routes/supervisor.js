var express = require("express");
var router = express.Router();

var supervisorController = require("../controllers/supervisorController");

router.post("/cadastrar/funcionario", function (req, res) {
    supervisorController.cadastrarFuncionario(req, res);
})

router.post("/deletar/funcionario", function (req, res) {
    supervisorController.deletarFuncionario(req, res);
})

router.get("/listarFuncionarios/:empresa", function (req, res) {
    supervisorController.listarFuncionarios(req, res);
})

module.exports = router;