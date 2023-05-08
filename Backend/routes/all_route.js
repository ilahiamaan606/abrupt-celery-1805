const express = require("express");
const ap = express.Router();

const { pateint } = require("../models/pateint_models");
const { slot } = require("../models/slot_model");
const { doctor } = require("../models/doctor_signup_model");
const { authenticate } = require("../middleware/authenticate.js")
const { authent } = require("../middleware/authent")
ap.use(authenticate)
//all users     admin 
ap.get(`/users/`, authent(["admin"]), async (req, res) => {
    try {
        const datapateint = await pateint.findAll();
        // const datadoctor = await doctor.findAll();
        res.status(200).json({
            isError: false,
            msg: "All Users",
            datapateint
            // datadoctor
        })
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
ap.post("/slotbook/:userID", authent(["pateint"]), async (req, res) => {
    try {
        const { pateintID, pateintname, appointmentDate, appointmentTime, doctorID, status } = req.body;
        let data = await slot.create({ pateintID, pateintname, appointmentDate, appointmentTime, doctorID, status });
        res.status(200).json({
            isError: false,
            msg: "Appointment Created Successfully!",
            data
        })
        res.status(200).json({
            isError: false,
        })
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
        const data = await slot.findAll({
            where: {
                doctorID: req.params.id
            }
        });
        res.status(200).json({
            isError: false,
            msg: "All Doctors",
            data
        })

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
    try {
        const data = await slot.upsert({ id: req.params.id, status })
        res.status(200).json({
            isError: false,
            msg: "Status Updated Successfully",
            data
        })

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
        let data = await slot.findAll({ where: { pateintID: req.params.id } })
        res.status(200).json({
            isError: false,
            msg: "Status Updated Successfully",
            data
        })
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





module.exports = { ap };