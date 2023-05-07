require('dotenv').config();

const Admin = async (req, res) => {
    try {
        const { username, pass } = req.body;
        if (username === process.env.Admin_user && password === process.env.Admin_password) {
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

module.exports = { Admin };