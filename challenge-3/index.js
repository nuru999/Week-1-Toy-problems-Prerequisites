// Write your codes Below //
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates
    const taxRates = [
        { lowerLimit: 0, upperLimit: 24000, rate: 10.0 },
        { lowerLimit: 24001, upperLimit: 32333, rate: 25.0 },
        { lowerLimit: 32334, upperLimit: 500000, rate: 30.0 },
        { lowerLimit: 500001, upperLimit: 800000, rate: 32.5 },
        { lowerLimit: 800000, upperLimit: Infinity, rate: 35.0 }
    ];
    
    // Constants for other parameters
    const personalRelief = 2400;
    const insuranceRelief = 5000;
    const nssfEmployeeRate = 0.06;
    
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
    
    // Calculate PAYE tax
    let tax = 0;
    for (const { lowerLimit, upperLimit, rate } of taxRates) {
        if (grossSalary >= lowerLimit && grossSalary <= upperLimit) {
            tax = (grossSalary - lowerLimit) * (rate / 100);
            break;
        }
    }
    
    // Calculate NHIF deductions (You can add NHIF logic here)
    const nhif = 0; // Calculate NHIF based on your NHIF rates
    
    // Calculate NSSF deductions
    const nssfEmployee = Math.min(grossSalary * nssfEmployeeRate, 18000);
    
    // Calculate net salary
    const netSalary = grossSalary - tax - nhif - nssfEmployee;
    
    return {
        "Gross Salary": grossSalary,
        "Tax (PAYE)": tax,
        "NHIF Deductions": nhif,
        "NSSF Deductions": nssfEmployee,
        "Net Salary": netSalary
    };
}

try {
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));
    
    if (!isNaN(basicSalary) && !isNaN(benefits)) {
        const result = calculateNetSalary(basicSalary, benefits);
        for (const key in result) {
            console.log(`${key}: ${result[key].toFixed(2)} Ksh`);
        }
    } else {
        console.log("Invalid input. Please enter valid numbers.");
    }
} catch (error) {
    console.log("An error occurred.");
}
