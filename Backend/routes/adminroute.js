const express = require("express");
const admin = express.Router();
require('dotenv').config();
// const { pateint } = require("../models/pateint_models");
// const { doctors } = require("../models/doctor_signup_model");
const { connection } = require("../config/db");

//admin login page
const Admin = async (req, res) => {
    try {
        const { username, pass } = req.body;
        if (username === process.env.Admin_user && pass === process.env.Admin_password) {
            res.send({
                status: 200,
                message: "Welcome Admin",
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
        // const data = await pateint.findAll();
        let q = "SELECT * FROM patients";
        connection.query(q, (err, data) => {
            if (data) {
                res.send({
                    status: 200,
                    message: "All Patient",
                    data
                })

            }
            else {
                res.send({
                    status: 404,
                    message: "error while getting patient details",
                    error: err
                })
            }
        });

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
        // const data = await doctors.findAll();
        let q = "SELECT * FROM doctor";
        connection.query(q, (err, data) => {
            if (data) {
                res.send({
                    status: 200,
                    message: "All Doctors",
                    data
                })
            }
            else {
                res.send({
                    status: 404,
                    message: "error while getting doctor details",
                    error: err
                })
            }
        });

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
        // const data = await pateint.upsert({ id: req.params.id, updated: updated });
        let q = `UPDATE patients SET updated: ${updated} WHERE id=${req.params.id}`;
        connection.query(q, (err, data) => {
            if (row) {
                res.json({
                    status: 200,
                    msg: "Details Updated",
                    data
                })
            }
            else {
                res.json({
                    status: 404,
                    msg: "error while updating patient details",
                    err: err
                })
            }
        });


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
        // const data = await pateint.upsert({ id: req.params.id, updated: updated });
        let q = `UPDATE doctor SET updated: ${updated} WHERE id=${req.params.id}`;
        connection.query(q, (err, data) => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Details Updated",
                    data
                })
            }
            else {
                res.json({
                    status: 404,
                    msg: "error while updating doctor details",
                    err: err
                })
            }
        });


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
        // const data = await pateint.destroy({ where: { id: req.params.id } });
        let q = `DELETE FROM patients WHERE id=${req.params.id}`;
        connection.query(q, (err, data) => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Details Deleted",
                    data
                })
            }
            else {
                res.json({
                    status: 404,
                    msg: "error while deleting patient details",
                    err: err
                })
            }
        });
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
        // const data = await doctors.destroy({ where: { id: req.params.id } });
        let q = `DELETE FROM doctor WHERE id=${req.params.id}`;
        connection.query(q, (err, data) => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Details Deleted",
                    data
                })
            }
            else {
                res.json({
                    status: 404,
                    msg: "error while deleting doctor details",
                    err: err
                })
            }
        });


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