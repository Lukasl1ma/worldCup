const partidaService = require ('../service/partida.service')

const listAll = async (req,res) => {
    const item = await partidaService.listAll()
    res.senf(item)
}

const save = async (req,res) => {
    const item = await partidaService.save(req.body)
    res.send(item)
}

const update = async (req,res) => {
    const item = await partidaService.update(req.params.id, req.body)
    res.send(item)
}

const remove = async (req,res) => {
    const item = await partidaService.remove(req.params.id)
    res.send('Item removed with successfull')
}

module.exports = {
    listAll,
    save,
    update,
    remove,
}