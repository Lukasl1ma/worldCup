const {partida} = require('../models/Index')
const { Op } = require('sequelize') 

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

const listaTime = async time => {
    return await partida.findAll({
        where:{
            [Op.or]: [
                {time_casa: time},
                {time_fora: time}
            ]
        }
    })
}

const listaDia = async dia => {   
    return await match.findAll({
        where:
            sequelize.literal(`extract(day from data_partida) = ${dia}`)
      })

}

const listaMes = async mes => {   
    return await match.findAll({
        where:
            sequelize.literal(`extract(month from data_partida) = ${mes}`)
      })

}



module.export = {
listAll,
save,
update,
remove,
listaTime,
listaDia,
listaMes
}
