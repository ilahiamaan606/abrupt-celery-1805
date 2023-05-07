const sequelize = require("sequelize");
const { seq } = require("../config/db");
const { Model, DataTypes } = require("sequelize");

const slot = seq.define("slot", {
    pateintID: DataTypes.INTEGER,
    pateintname: DataTypes.STRING,
    appointmentDate: DataTypes.DATE,
    appointmentTime: DataTypes.TIME,
    doctorID: DataTypes.INTEGER,
    status: DataTypes.STRING
})

module.exports = { slot };