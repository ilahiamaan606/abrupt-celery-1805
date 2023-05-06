const express = require("express");
const ap = express.Router();

const { user } = require("../models/user_models");
const { slot } = require("../models/slot_model");
const { doctor } = require("../models/doctor_model");




ap.get("/users", async (req, res) => {
    try {
        const data = await user.findAll();
        res.status(200).json({
            isError: false,
            msg: "All Users",
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

ap.post("/slotbook/:userID", async (req, res) => {
    try {
        const { pateintID, pateintname, appointmentDate, appointmentTime, status } = req.body;
        let data = await slot.create({ pateintID, pateintname, appointmentDate, appointmentTime, status });
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

ap.get("/doctor", async (req, res) => {
    try {
        const data = await doctor.findAll();
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

ap.post("/doctor/:id", async (req, res) => {

    let { userID, doctorid, status } = req.body;
    try {
        const data = await slot.findAll({ pateintID: userID, doctorID: doctorid })
        data.status = status;
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

module.exports = { ap };