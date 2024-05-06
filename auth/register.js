const User = require("../models/user");
const bcrypt = require("bcryptjs");

const register = async(req, res) => {
    const userData = req.body;

    try {
        const existingUser = await User.findOne({"email": userData.email})

        if (existingUser) return res.status(400).send({"error": `User with email: ${userData.email}`})

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const user = new User({
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            username: userData.username,
            phone_number: userData.phone_number,
            role: userData.role,
            password: hashedPassword
        });
        await user.save();

        if(!user) return res.status(400).send({"error": "Something went wrong!!"})

        return res.send({ "message": "User successfully created!!" }).status(201)

    } catch (error) {
        console.log(error.message);
        return res.status(400).send({"error": `${error.message}`})
    }
}

module.exports = {
    register
}