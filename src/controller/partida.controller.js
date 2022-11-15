const partidaService = require ('../service/partida.service')

const listAll = async (req, res) => {
    const item = await partidaService.listAll()
    res.send(item)
}

const save = async (req, res) => {
    const item = await partidaService.save(req.body)
    res.send(item)
}

const update = async (req, res) => {
    const item = await partidaService.update(req.params.id, req.body)
    res.send(item)
}

const remove = async (req, res) => {
    const item = await partidaService.remove(req.params.id)
    res.send('Item removed with successfull')
}

const listaTime = async (req, res) => { 
    const time = req.params.time
    res.send(await service.listaTime(time))
}

const listaDia = async (req, res) => {
    const data_partida = req.params.data_partida
    res.send(await service.listaDia(data_partida))
}

const listaMes = async (req, res) => {
    const data_partida = req.params.data_partida
    res.send(await service.listaMes(data_partida))
}


module.exports = {
    listAll,
    save,
    update,
    remove,
    listaTime,
    listaDia,
    listaMes
}