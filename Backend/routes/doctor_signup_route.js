const { doctors } = require("../models/doctor_signup_model");
const express = require("express");
const doc = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer")
const { connection } = require("../config/db")
doc.post("/signup", async (req, res) => {
    console.log(req.body);
    let { name, email, password, role, description, department } = req.body;

    try {
        // const [results, metadata] = await doctors.sequelize.query(`SELECT * FROM doctors WHERE email = '${email}'`);
        let q = `SELECT * FROM doctor WHERE email = '${email}'`;
        connection.query(q, (err, row) => {
            if (row.length != 0) {
                res.json("Email Already Signed Up");
            }
            else if (row.length == 0) {
                bcrypt.hash(password, Number(process.env.salt), async (err, hash) => {
                    if (hash) {
                        // await doctors.create({ name, email, role, password: hash, department, description })
                        let q1 = `INSERT INTO doctor (name, email, password, department, description,role ) VALUES ( "${name}","${email}","${hash}", "${department}", '${description}',"${role}")`;
                        connection.query(q1, (err1, data) => {
                            if (data) {
                                res.json("signup Successfully")
                            }
                            else {
                                console.log(err1);
                                res.json("Please try again")
                            }
                        })
                    }
                    else {
                        res.json("Error Hashing Password")
                    }
                })
            }
        });
        // if (row.length != 0) {
        //     res.json("Email Already Signed Up");
        // }
        // else {
        //     bcrypt.hash(password, Number(process.env.salt), async (err, hash) => {
        //         if (hash) {
        //             await doctors.create({ name, email, role, password: hash, department, description })
        //             res.json("Signup Succesfull");
        //         }
        //         else {
        //             res.json("Error Hashing Password")
        //         }
        //     })
        // }
    } catch (error) {
        res.json("ERROR");
    }

})




doc.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
        // const [results, metadata] = await doctors.sequelize.query(`SELECT * FROM doctors WHERE email = '${email}'`);
        let q = `SELECT * FROM doctor WHERE email = '${email}'`;
        connection.query(q, (err, data) => {
            if (data.length == 0) {
                res.json("User Not Found Signup Please");
            }
            else {
                console.log(data);
                let pass = data[0].password;
                bcrypt.compare(password, pass, (err, result) => {
                    if (result) {
                        let token = jwt.sign({ email: email }, process.env.key, { expiresIn: '24h' });
                        res.cookie("token", token);
                        res.json({ "msg": "Login Succesfull", "token": token, "data": data[0] });
                    }
                    else {
                        res.json("Password Incorrect")
                    }
                })
            }
        });
        // if (row.length == 0) {
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



doc.post("/mail_verify", (req, res) => {

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


module.exports = { doc };