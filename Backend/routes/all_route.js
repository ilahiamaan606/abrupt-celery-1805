const express = require("express");
const ap = express.Router();
require("dotenv").config();
const mysql = require('mysql2/promise')

const { pateint } = require("../models/pateint_models");
const { slot } = require("../models/slot_model");
const { doctors } = require("../models/doctor_signup_model");
const { authenticate } = require("../middleware/authenticate.js")
const { authent } = require("../middleware/authent")
const { connection } = require("../config/db");


ap.use(authenticate)
//all users     admin 
ap.get(`/users/`, authent(["admin"]), async (req, res) => {
    try {
        const q1 = "SELECT * FROM patients";
        connection.query(q1, (err, datapateint) => {
            if (rows) {
                const q2 = "SELECT * FROM doctor";
                connection.query(q2, (err2, datadoctor) => {
                    if (rows2) {
                        res.status(200).json({
                            isError: false,
                            msg: "All Users",
                            datapateint,
                            datadoctor
                        })
                    }
                    if (err2) {
                        res.status(400).json({
                            isError: true,
                            msg: "Please Try Again!",
                            err2
                        })
                    }
                })
            }
            else {
                res.status(400).json({
                    isError: true,
                    msg: "Please Try Again!",
                    err
                })
            }

        });
        // const datapateint = await pateint.findAll();
        // const datadoctor = await doctors.findAll();
        // const q2 = "SELECT * FROM doctor";
        // const [rows1] = await connection.promise().query(q2);
        // res.status(200).json({
        //     isError: false,
        //     msg: "All Users",
        //     rows,
        //     rows1
        // })
    }
    catch (err) {
        res.status(400).json({
            isError: true,
            msg: "Please Try Again!",
            err
        })
    }
})
//user slots booking     users
ap.post("/slotbook", authent(["pateint"]), async (req, res) => {
    try {
        let { pateintID, pateintname, appointmentDate, appointmentTime, doctorID, status, description } = req.body;
        // let data = await slot.create({ pateintID, pateintname, appointmentDate, appointmentTime, doctorID, status, description });
        let q = `INSERT INTO slots (pateintID, pateintname, appointmentDate, appointmentTime, doctorID, status, description ) VALUES ('${pateintID}', '${pateintname}', '${appointmentDate}', '${appointmentTime}', '${doctorID}', '${status}', '${description}' )`
        console.log(req.body);
        console.log(q);
        connection.query(q, (err, data) => {
            if (data) {
                res.status(200).json({
                    isError: false,
                    msg: "Appointment Created Successfully!",
                    data
                })
            }
            else {
                res.status(400).json({
                    isError: true,
                    msg: "Please Try Again!",
                    err
                })
            }
        });


    }
    catch (err) {
        res.status(400).json({
            isError: true,
            msg: "Please Try Again!",
            err
        })
    }
})
//slots list wrt doctor id         doctor
ap.get("/doctor/:id", authent(["doctor"]), async (req, res) => {
    try {
        // const data = await slot.findAll({
        //     where: {
        //         doctorID: req.params.id
        //     }
        // });
        let q = `SELECT * FROM slots WHERE doctorID=${req.params.id}`;
        connection.query(q, (err, data) => {
            if (data) {
                res.status(200).json({
                    isError: false,
                    msg: "All Doctors",
                    data
                })
            }
            else {
                res.status(400).json({
                    isError: true,
                    msg: "Please Try Again!",
                    err
                })
            }
        });


    }
    catch (err) {
        res.status(400).json({
            isError: true,
            msg: "Please Try Again!",
            err
        })
    }
})
//slot updation|user slot updation     doctor/pateint
ap.put("/status/:id", authent(["doctor", "pateint"]), async (req, res) => {

    let { status } = req.body;
    // console.log("req.body", status);
    try {
        // const data = await slot.upsert({ id: req.params.id, status })

        let q = `UPDATE slots SET status='${status}' WHERE id=${req.params.id}`;
        connection.query(q, (err, data) => {
            if (data) {
                res.status(200).json({
                    isError: false,
                    msg: "Status Updated Successfully",
                    data
                })
            }
            else {
                res.status(400).json({
                    isError: true,
                    msg: "Please Try Again!",
                    err
                })
            }
        });


    }
    catch (err) {
        res.status(400).json({
            isError: true,
            msg: "Please Try Again!",
            err
        })
    }
})
// appoinment status             pateint
ap.get("/userstatus/:id", authent(["pateint"]), async (req, res) => {
    try {
        // let data = await slot.findAll({ where: { pateintID: req.params.id } })
        let q = `SELECT * FROM slots WHERE pateintID=${req.params.id}`;
        connection.query(q, (err, data) => {
            if (data) {
                res.status(200).json({
                    isError: false,
                    msg: "Status Updated Successfully",
                    data
                })
            }
            else {
                res.status(400).json({
                    isError: true,
                    msg: "Please Try Again!",
                    err
                })
            }
        });

    }
    catch (err) {
        res.status(400).json({
            isError: true,
            msg: "Please Try Again!",
            err
        })
    }
})


//middleware update


//all doctor
ap.get(`/doctor/`, authent(["doctor", "pateint"]), async (req, res) => {
    try {
        // const datadoctor = await doctors.findAll();
        let q = `SELECT * FROM doctor`;
        connection.query(q, (err, datadoctor) => {
            if (datadoctor) {
                res.status(200).json({
                    isError: false,
                    msg: "All Users",
                    datadoctor
                })
            }
            else {
                res.status(400).json({
                    isError: true,
                    msg: "Please Try Again!",
                    err
                })
            }
        });

    }
    catch (err) {

        res.status(400).json({
            isError: true,
            msg: "Please Try Again!",
            err
        })
    }
})

// All slot
ap.get("/allslot", authent(["pateint", "doctor"]), async (req, res) => {
    try {
        // let data = await slot.findAll()
        let q = `SELECT * FROM slots`;
        connection.query(q, (err, data) => {
            if (data) {
                res.status(200).json({
                    isError: false,
                    msg: " ALL SLOTS ",
                    data
                })
            }
            else {
                res.status(400).json({
                    isError: true,
                    msg: "Please Try Again!",
                    err
                })
            }
        });

    }
    catch (err) {
        res.status(400).json({
            isError: true,
            msg: "Please Try Again!",
            err
        })
    }
})

// slots list wrt pateint id 
ap.get("/pateint/:id", authent(["pateint"]), async (req, res) => {
    try {
        // const data = await slot.findAll({
        //     where: {
        //         pateintID: req.params.id
        //     }
        // });
        let q = `SELECT * FROM slots WHERE pateintID=${req.params.id}`;
        connection.query(q, (err, data) => {
            if (data) {
                res.status(200).json({
                    isError: false,
                    msg: "All appointment of pateint",
                    data
                })
            }
            else {
                res.status(400).json({
                    isError: true,
                    msg: "Please Try Again!",
                    err
                })
            }
        });


    }
    catch (err) {
        res.status(400).json({
            isError: true,
            msg: "Please Try Again!",
            err
        })
    }
})





module.exports = { ap };