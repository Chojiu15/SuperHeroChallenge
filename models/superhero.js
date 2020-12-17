'use-strict'
const models = require('../models')

module.exports = (sequelize, DataTypes) => {
    const SuperHero = sequelize.define('SuperHero', {
        name : DataTypes.STRING,
        power : DataTypes.STRING,
        vilain : DataTypes.BOOLEAN
    }, {
        timestamps : false 
    })

    return SuperHero
}