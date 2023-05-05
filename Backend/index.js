const express = require("express");
const app = express();
const cors = require("cors");
const {users} = require("./routes/user_routes");
const {seq} = require("./config/db");
require("dotenv").config();


app.get("/",(req,res)=>{
    res.json("Welcome to Hospital Appointment Booking Backend Side")
})


app.use(cors({origin:"*"}));
app.use(express.json());
app.use("/users",users);



seq.sync().then(() => {
    app.listen(process.env.port, () => {
        console.log(`Server is running on http://localhost:${process.env.port}`);

    })
})




/* const express = require("express");
const sequelize = require("sequelize");
const app = express();
app.use(express.json());
const { Model, DataTypes } = require("sequelize");
const seq = new sequelize('hospital_appointment_booking_system', 'root', 'Mysql@0410', {
    host: 'localhost',
    dialect: 'mysql'
});
const user = seq.define("user", {
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
})

const slot = seq.define("slot", {
    pateintID: DataTypes.INTEGER,
    pateintname: DataTypes.STRING,
    appointmentDate: DataTypes.STRING,
    appointmentTime: DataTypes.INTEGER,
    doctorID: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
})
const doctor = seq.define("doctor", {
    department: DataTypes.STRING,
    slotAvailable: DataTypes.INTEGER,
    slotID: {
        type: DataTypes.INTEGER,
        References: {
            model: slot,
            key: "id"
        }
    }
})



seq.sync().then(() => {
    app.listen(4500, () => {
        console.log("Server is running on port 4500");

    })
})
 */