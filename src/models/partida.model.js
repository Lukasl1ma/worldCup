module.exports = (sequelize, DataTypes) => {
    const Partida = sequelize.define('partida', {
        id_partida:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        time_casa: DataTypes.STRING,
        gol_casa: DataTypes.INTEGER,
        time_fora: DataTypes.STRING,
        gol_fora: DataTypes.INTEGER,
        data_partida: DataTypes.DATE
    },{
        timestamps: false,
        freezeTableName: true
    })
    return Partida
}