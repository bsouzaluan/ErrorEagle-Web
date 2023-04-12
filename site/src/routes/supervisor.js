var express = require("express");
var router = express.Router();

router.post("/cadastrar/funcionario", function (req, res) {
    supervisorController.cadastrarFuncionario(req, res);
})

router.post("/deletar/funcionario", function (req, res) {
    supervisorController.deletarFuncionario(req, res);
})


module.exports = router;