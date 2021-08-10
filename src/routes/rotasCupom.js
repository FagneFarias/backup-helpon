
const { Router } = require('express')
const router = Router()

const cupomController = require('../controller/cupomController')

router.post('/inserir', cupomController.inserirCupom)
router.put('/atualizar', cupomController.atualizarCupom)
router.get('/listar', cupomController.listarCupons)




module.exports = router;
