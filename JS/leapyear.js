const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a year: ", (year) => {
    year = Number(year); // Convert input to a number

    // Check if it's a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year! 🎉`);
    } else {
        console.log(`${year} is NOT a leap year.`);
    }

    rl.close(); // Close input stream
});
