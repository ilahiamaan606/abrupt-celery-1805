const express = require("express");
const app = express();
const cors = require("cors");
const { users } = require("./routes/user_routes");
const { ap } = require("./routes/all_route")
const { doc } = require("./routes/doctor_signup_route");
const { seq } = require("./config/db");
const cookieParser = require('cookie-parser');
const { admin, Admin } = require("./routes/adminroute");
require("dotenv").config();


app.get("/", (req, res) => {
    res.json("Welcome to Hospital Appointment Booking Backend Side")
})


app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());
app.use("/users", users);
app.use("/ap", ap);
app.use("/admin", admin);
app.use("/adminLogin", Admin);
app.use("/doc", doc);

// seq.sync().then(() => {
//     app.listen(process.env.port, () => {
//         console.log(`Server is running on http://localhost:${process.env.port}`);

//     })
// })


app.listen(process.env.port, () => {
    console.log(`Server is running on http://localhost:${process.env.port}`);

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
