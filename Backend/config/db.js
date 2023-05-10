const sequelize = require("sequelize");
const seq = new sequelize('hospital_appointment_booking_system', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = { seq };