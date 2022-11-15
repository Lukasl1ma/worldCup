const express = require('express')
const partidaController = require('../controller/partida.controller')
const router = express.Router()

router.get('/', partidaController.listAll)
router.post('/', partidaController.save)
router.put('/', partidaController.update)
router.delete('/',partidaController.remove)
router.get('/:time', partidaController.listaTime)
router.get('/dia/:dia', partidaController.listaDia)
router.get('/mes/:mes', partidaController.listaMes)

module.exports = router
