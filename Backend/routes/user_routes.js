const {user} = require("../models/user_models");
const express = require("express");
const users = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

users.post("/signup",async(req,res)=>{
    let {name,email,password,role,department} = req.body;
     
    try {
        const [results, metadata] = await user.sequelize.query(`SELECT * FROM users WHERE email = '${email}'`);
        if(results.length!=0){
           res.json("Email Already Signed Up");
        }
        else {
            bcrypt.hash(password,Number(process.env.salt),async(err,hash)=>{
                if(hash){
                    await user.create({name,email,role,password:hash,department})
                    res.json("Signup Succesfull");
                }
                else {
                    res.json("Error Hashing Password")
                }
            })
        }
    } catch (error) {
        res.json("ERROR");
    }
    
})




users.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    try {
        const [results, metadata] = await user.sequelize.query(`SELECT * FROM users WHERE email = '${email}'`);
        if(results.length==0){
            res.json("User Not Found Signup Please");
        }
        else {
            let pass = results[0].password;
            bcrypt.compare(password,pass,(err,result)=>{
                if(result){
                    let token = jwt.sign({email:email},process.env.key,{expiresIn:'24h'});
                    res.cookie("token",token);
                    res.json("Login Succesfull");
                }
                else {
                    res.json("Password Incorrect")
                }
            })
        }
    } catch (error) {
        res.json("Error");
    }
})


module.exports={users};