
const calculate_ride_cost = (ride_distance) => {
    let ride_cost = 0;
    let cost_per_km = 35;

    if (ride_distance <= 2) {
        cost_per_km = 50;
        ride_cost = ride_distance * cost_per_km;
    } else if (ride_distance > 2 && ride_distance <= 20) {
        cost_per_km = 40;
        ride_cost = ride_distance * cost_per_km;
    } else {
        ride_cost = ride_distance * cost_per_km
    }
    
    return ride_cost
}

module.exports = {
    calculate_ride_cost
}