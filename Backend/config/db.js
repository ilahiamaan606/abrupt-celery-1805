// const sequelize = require("sequelize");
// const seq = new sequelize('hospital_appointment_booking_system', 'root', 'Mysql@0410', {
//     host: 'localhost',
//     dialect: 'mysql'
// });


// module.exports = { seq };
require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect();


module.exports = { connection };