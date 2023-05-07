const authent = (role) => {
    return (req, res, next) => {

        let user_role = req.query.role;
        console.log(user_role);
        console.log("userRole", user_role);
        if (role.includes(user_role)) {
            next();
        }
        else {
            res.send("You are not authorized");
        }
    }
}


module.exports = {
    authent
}