const Driver = require("../models/driver");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const get_drivers = async(req, res) => {
    const drivers = await Driver.find({});
    res.send(drivers).status(200);
}

const onboard_driver = async(req, res) => {
    const { first_name, last_name, email, username, phone_number, password, role, currentLocation, rating } = req.body;

    try {
        const existingUser = await User.findOne({ email })

        if(existingUser) return res.status(400).send({"error": `User with email: ${email} already exists`})

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            username: username,
            phone_number: phone_number,
            role: role,
            password: hashedPassword
        });
        await user.save();

        const driver = new Driver({
            user: user.id,
            currentLocation: currentLocation,
            rating: rating
        });
        await driver.save();

        res.send({"success": "Driver profile created successfully"}).status(201)

    } catch (error) {
        console.log(error.message);
        return res.status(400).send({"error": `${error.message}`})
    }
}

module.exports = {
    get_drivers,
    onboard_driver
}