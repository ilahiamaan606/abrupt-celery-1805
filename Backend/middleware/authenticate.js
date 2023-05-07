const jwt = require('jsonwebtoken');
// const fs = require('fs');
const authenticate = (req,res,next) => {
const token = req.headers.authorization;

if(!token){
    res.send({
        status:false,
        message:'login again with right credentials'
        
    })
}

jwt.verify(token,process.env.JWT_SECRET,(err,decoded){
if(err){
    res.send({
        status:false,
        message:'login again with right credentials',
        err:err.message,
    })
}else{
    const userRole = decoded.role;
    req.body.userRole = userRole;
    next();
}
});
}