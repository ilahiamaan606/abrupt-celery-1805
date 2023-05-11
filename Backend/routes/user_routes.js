const { pateint } = require("../models/pateint_models");
const express = require("express");
const users = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer")
const { connection } = require("../config/db")

users.post("/signup", async (req, res) => {
    let { name, email, password, role } = req.body;

    try {
        // const [results, metadata] = await pateint.sequelize.query(`SELECT * FROM pateints WHERE email = '${email}'`);
        let q = `SELECT * FROM patients WHERE email = '${email}'`;
        connection.query(q, (err, results) => {
            if (results.length != 0) {
                res.json("Email Already Signed Up");
            }
            else {
                bcrypt.hash(password, Number(process.env.salt), async (err, hash) => {
                    if (hash) {
                        let q = `INSERT INTO patients (name, email, role, password) VALUES ('${name}', '${email}', '${role}','${hash}')`
                        // await pateint.create({ name, email, role, password: hash })
                        connection.query(q, (err, data) => {
                            if (data) {
                                res.json("Signup Succesfully");
                            }
                            else {
                                res.json("Please Try Again!")
                            }
                        })

                    }
                    else {
                        res.json("Error Hashing Password")
                    }
                })
            }

        });
        // if (results.length != 0) {
        //     res.json("Email Already Signed Up");
        // }
        // else {
        //     bcrypt.hash(password, Number(process.env.salt), async (err, hash) => {
        //         if (hash) {
        //             await pateint.create({ name, email, role, password: hash })
        //             res.json("Signup Succesfull");
        //         }
        //         else {
        //             res.json("Error Hashing Password")
        //         }
        //     })
        // }
    } catch (error) {
        console.log(error)
        res.json("ERROR");
    }

})





users.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
        // const [results, metadata] = await pateint.sequelize.query(`SELECT * FROM pateints WHERE email = '${email}'`);
        let q = `SELECT * FROM patients WHERE email = '${email}'`;
        connection.query(q, (err, results) => {
            if (results.length != 0) {
                let pass = results[0].password;

                bcrypt.compare(password, pass, (err, result) => {
                    if (result) {
                        let token = jwt.sign({ email: email }, process.env.key, { expiresIn: '24h' });
                        res.cookie("token", token);
                        res.json({ "msg": "Login Succesfull", "token": token, "data": results[0] });

                    }
                    else {
                        res.json("Password Incorrect")
                    }
                })

            }
            else {
                res.json("User Not Found Signup Please");
            }

        });
        // if (results.length == 0) {
        //     res.json("User Not Found Signup Please");
        // }
        // else {
        //     let pass = results[0].password;

        //     bcrypt.compare(password, pass, (err, result) => {
        //         if (result) {
        //             let token = jwt.sign({ email: email }, process.env.key, { expiresIn: '24h' });
        //             res.cookie("token", token);
        //             res.json({ "msg": "Login Succesfull", "token": token, "data": results[0] });

        //         }
        //         else {
        //             res.json("Password Incorrect")
        //         }
        //     })
        // }
    } catch (error) {
        res.json("Error");
    }
})




users.post("/mail_verify", (req, res) => {

    let { email, otp } = req.body;
    console.log(email, otp)

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'booking.hospital12@gmail.com',
            pass: 'ubzppikhwbasdlzc'
        }
    });

    let mailOptions = {
        from: 'booking.hospital12@gmail.com',
        to: `${email}`,
        subject: 'OTP ',
        text: `Your Otp is ${otp}`
    };

    // send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.json('Email sent successfully');
        }
    });

})


module.exports = { users };

