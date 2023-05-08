const express = require("express");
const admin = express.Router();
require('dotenv').config();
const { pateint } = require("../models/pateint_models");
const { doctor } = require("../models/doctor_signup_model");

//admin login page
const Admin = async (req, res) => {
    try {
        const { username, pass } = req.body;
        if (username === process.env.Admin_user && pass === process.env.Admin_password) {
            res.send({
                status: 200,
                message: "Welcome to Admin",
                Location: ""
            })
        } else {
            res.send({
                status: 404,
                message: "You are not authorized",
                error: error
            })
        }
    } catch (error) {
        res.send({
            status: 404,
            message: "You are not authorized",
            error: error
        })
    }
}

//admin routes

//getting patient information
admin.get('/patient', async (req, res) => {
    try {
        const data = await pateint.findAll();
        res.send({
            status: 200,
            message: "All Patient",
            data
        })
    } catch (error) {
        res.send({
            status: 404,
            message: "error while getting patient details",
            error: error
        })
    }
})


//getting doctor information
admin.get('/doctor', async (req, res) => {
    try {
        const data = await doctor.findAll();
        res.send({
            status: 200,
            message: "All Doctors",
            data
        })
    } catch (error) {
        res.send({
            status: 404,
            message: "error while getting doctor details",
            error: error
        })
    }
})

//updating Patient information
admin.put("/Patient_update/:id", async (req, res) => {

    let updated = req.body;
    try {
        const data = await pateint.upsert({ id: req.params.id, updated: updated });
        res.json({
            status: 200,
            msg: "Details Updated",
            data
        })

    }
    catch (err) {
        res.json({
            status: 404,
            msg: "error while updating patient details",
            err: err
        })
    }
})

//updating Doctor information
admin.put("/Doctor_update/:id", async (req, res) => {
    let updated = req.body;
    try {
        const data = await pateint.upsert({ id: req.params.id, updated: updated });
        res.json({
            status: 200,
            msg: "Details Updated",
            data
        })

    }
    catch (err) {
        res.json({
            status: 404,
            msg: "error while updating doctor details",
            err: err
        })
    }
})

//deleting Patient information
admin.delete("/Patient_delete/:id", async (req, res) => {
    try {
        const data = await pateint.destroy({ id: req.params.id });
        res.json({
            status: 200,
            msg: "Details Deleted",
            data
        })

    }
    catch (err) {
        res.json({
            status: 404,
            msg: "error while deleting patient details",
            err: err
        })
    }
})

//Deleting Doctor information
admin.delete("/Doctor_delete/:id", async (req, res) => {
    try {
        const data = await doctor.destroy({ id: req.params.id });
        res.json({
            status: 200,
            msg: "Details Deleted",
            data
        })

    }
    catch (err) {
        res.json({
            status: 404,
            msg: "error while deleting doctor details",
            err: err
        })
    }
})
module.exports = { Admin, admin };