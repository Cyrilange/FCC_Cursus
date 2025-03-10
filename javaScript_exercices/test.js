const numbers = [150, 22, 350, 4, 5];
numbers.forEach((numbers) => {
  if (numbers > 10) {
    numbers = numbers * 5;
    console.log(numbers);
  }
})

console.log('-------------------');
numbers.map((numbers) => {
  if (numbers < 200) {
    numbers = numbers * 5;
    console.log(numbers);
  }
})

console.log('-------------------');
numbers.filter((numbers) => {
  if (numbers > 100) {
    numbers = numbers * 5;
    console.log(numbers);
  }
})
console.log('-------------------');
numbers.sort((a , b) => b - a);
console.log(numbers);
console.log('-------------------');

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = nums.filter((num) => num % 2 === 0);

console.log(evenNumbers);
console.log('-------------------');
const n = [1, 2, 3, 4, 5];
const sum = n.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);

console.log('-------------------');
const greeting = '       Hello, World!       ';
const chars = greeting.trim();
const str = greeting.trim().split("").reverse().join("   ");

console.log(greeting);
console.log(chars);
console.log(str);
console.log('-------------------');

const multiply = (a) => (b) => a * b;
const operations = [multiply(2), multiply(3)];
const result = operations.reduce((acc, fn) => fn(acc), 5);

console.log(result);