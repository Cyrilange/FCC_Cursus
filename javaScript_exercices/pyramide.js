const pyramid = (pattern, rows, is_downwards) => {
let result = "\n";

if (is_downwards) {
  for (let i = rows; i > 0; i--) {
    let spaces = " ".repeat(rows - i);
    result += spaces + pattern.repeat(2 * i - 1) + '\n';
  } 
} else {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    result += spaces + pattern.repeat(2 * i - 1) + '\n';
  }
}

return result;
}

let check = pyramid('x', 5, false);
let check2 = pyramid('0', 9, false)
let check3 = pyramid('0', 9, true)
console.clear();
console.log(check)
console.log(check2)
console.log(check2, check3)