const express = require('express')
const partidaController = require('../controller/partida.controller')
const router = express.Router()

router.get('/', partidaController.listAll)
router.post('/', partidaController.save)
router.put('/', partidaController.update)
router.delete('/',partidaController.remove)
