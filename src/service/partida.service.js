const {partida} = require('../models/Index') 

 const listAll = async () => {
    return item = await partida.findAll()
}

const save = async data => {
    return item = await partida.create(data)
}

const update = async (partidaId, data) => {
    return item = await partida.update(data, {
        where: {
            id_partida: partidaId
        }
    })
}

const remove = async partidaId =>{
    return item = await partida.destroy({
        where:{
            id_partida: partidaId
        }
    })
}

module.export = {
listAll,
save,
update,
remove
}
