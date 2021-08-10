
const { Router } = require('express')
const router = Router()
const uploadConfig = require('../config/upload')
const multer = require('multer')

const upload = multer(uploadConfig)

const usuarioController = require('../controller/usuarioController')

//OBS: profilePicture é o nome do campo onde as imagens serão enviadas
router.post('/inserir', upload.single('profilePicture'), usuarioController.inserirUsuario)
router.delete('/remover', usuarioController.removerUsuario)
router.put('/atualizar', usuarioController.atualizarUsuario)
router.get('/listar', usuarioController.listarUsuarios)
router.post('/login', usuarioController.loginUsuarios)

module.exports = router;
