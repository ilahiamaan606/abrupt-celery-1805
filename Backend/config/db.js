const sequelize = require("sequelize");
const seq = new sequelize('hospital_appointment_booking_system', 'root', 'Aa@82548254', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports={seq};