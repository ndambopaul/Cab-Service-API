const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async(req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email });

        if(!user) return res.status(404).send({"error": `User with email: ${email} does not exist`});

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch) return res.status(400).send({"error": "Passwords do not match"});

        const token = jwt.sign({ user: { id: user.id } }, '1234', { expiresIn: '1h' });

        return res.send({ token }).status(201)

    } catch (error) {
        console.log(error.message);
        return res.status(400).send({"error": `${error.message}`})
    }
}

module.exports = { login }