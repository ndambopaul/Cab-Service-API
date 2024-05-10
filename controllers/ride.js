const Driver = require("../models/driver");

const request_ride = async(req, res) => {
    const { customerLocation } = req.body;
    
    // Find nearby drivers sorted by distance
    const nearbyDrivers = await Driver.find({
        currentLocation: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [customerLocation.longitude, customerLocation.latitude]
                }
            }
        }
    }).sort({ rating: -1 });

    if (nearbyDrivers.length === 0) {
        return res.status(404).json({ message: "No drivers available nearby." });
    }

    const closestDriver = nearbyDrivers[0];
    res.json({ message: "Ride assigned to driver.", driver: closestDriver });
}

module.exports = {
    request_ride
}