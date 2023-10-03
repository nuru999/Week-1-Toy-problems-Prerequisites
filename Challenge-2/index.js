// Write your codes Below //

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
    
    if (speed < speedLimit) {
        console.log("Ok");
        return;
    }
    
    const excessSpeed = speed - speedLimit;
    demeritPoints = Math.floor(excessSpeed / 5);
    
    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}

try {
    const speed = parseInt(prompt("Enter the speed of the car (km/h): "));
    
    if (!isNaN(speed)) {
        calculateDemeritPoints(speed);
    } else {
        console.log("Invalid input. Please enter a valid speed.");
    }
} catch (error) {
    console.log("An error occurred.");
}

