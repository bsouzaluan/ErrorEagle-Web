var express = require("express");
var router = express.Router();

router.post("/cadastrar/funcionario", function (req, res) {
    supervisorController.cadastrarFuncionario(req, res);
})

module.exports = router;