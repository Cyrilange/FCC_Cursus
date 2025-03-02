let year = 2024
let year2 = 2025;


const isLeapYear = (n) => {
  if (n % 4 == 0 && n % 100 != 0 && n % 400 != 0) {
    return `${n} is a leap year.`;
  }
  else {
    return `${n} is not a leap year.`;
  }
}

let result = isLeapYear(year);
let result2 = isLeapYear(year2);

console.log(result);
console.log(result2);