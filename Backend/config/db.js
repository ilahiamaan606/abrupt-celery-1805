const sequelize = require("sequelize");
const seq = new sequelize('hospital_appointment_booking_system', 'root', 'Anandhupa9526332548', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = { seq };