const User = require("../models/user");


const register = async(req, res) => {
    const userData = req.body;

    try {
        const existingUser = await User.findOne({"email": userData.email})

        if (existingUser) return res.status(400).send({"error": `User with email: ${userData.email}`})

        return res.send({ userData }).status(201)

    } catch (error) {
        console.log(error.message);
        return res.status(400).send({"error": `${error.message}`})
    }
}

module.exports = {
    register
}