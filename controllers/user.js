const User = require("../models/user");

const getUsers = async(req, res) => {
    try {
        const user = await User.findById({"_id": req.user.id})

        if(user.role === "admin") {
            const users = await User.find({})
            res.send(users).status(200)
        } else if (user.role === "driver" || user.role === "passenger") {
            res.status(200).send(user)
        }

    } catch (error) {
        console.log(error.message);
        return res.status(400).send({"error": `${error.message}`})
    }
}

const getUserProfile = async(req, res) => {
    const user = await User.findById({"_id": req.user.id})
    res.status(200).send(user)
}

module.exports = { 
    getUsers,
    getUserProfile
 }