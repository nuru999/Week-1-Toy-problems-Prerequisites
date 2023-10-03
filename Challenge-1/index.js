// write your code here //

function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

try {
    const mark = parseFloat(prompt("Enter student's marks (0-100): "));
    
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        const grade = calculateGrade(mark);
        console.log(`Grade: ${grade}`);
    } else {
        console.log("Marks should be between 0 and 100.");
    }
} catch (error) {
    console.log("Invalid input. Please enter a valid number.");
}
