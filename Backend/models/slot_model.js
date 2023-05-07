const sequelize = require("sequelize");
const { seq } = require("../config/db");
const { Model, DataTypes } = require("sequelize");

const slot = seq.define("slot", {
    pateintID: DataTypes.INTEGER,
    pateintname: DataTypes.STRING,
    appointmentDate: DataTypes.STRING,
    appointmentTime: DataTypes.INTEGER,
    doctorID: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
})

module.exports = { slot };