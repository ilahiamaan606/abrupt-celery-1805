const sequelize = require("sequelize");
const seq = require("../config/db");



const user = seq.define("user", {
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
})


module.exports = {user};