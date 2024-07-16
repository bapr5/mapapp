const { type } = require('@testing-library/user-event/dist/type')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    return sequelize.define("users", {
        id : {
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        name : {
            type: Sequelize.STRING(225),
        },
        email : {
            type: Sequelize.STRING(225),
        },
        phone : {
            type: Sequelize.STRING(225),
        }},{
            timestamps: false,
            tableName:'cars'
        })

}