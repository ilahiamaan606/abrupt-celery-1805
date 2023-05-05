const user = require("../models/user_models");
const express = require("express");
const users = express.Router();

users.post("/signup",async(req,res)=>{
    let {name,email,password,role,speciality} = req.body;
    /* try {
        const [results, metadata] = await user.query(`SELECT * FROM user WHERE email = '${email}'`);
        res.send(results);
    } catch (error) {
        res.send(error);
    } */
    try {
        await user.create({
            name,
            email,
            password,
            role,
            speciality
        })
        res.json("Data Created")
    } catch (error) {
        res.json(error);
    }
})


module.exports={users};