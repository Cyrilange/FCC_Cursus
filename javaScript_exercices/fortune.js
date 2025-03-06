let fortune1 = "you will get loads of monney";
let fortune2 = "love will found you";
let fortune3 = "you will reach the success";
let fortune4 = "one of your ex will be a bad news , be cautious";
let fortune5 = "fun, sun and pleasure awaits you";



let randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
let selectedFortune;
if (randomNumber === 1) {
  selectedFortune = fortune1;
}
else if (randomNumber === 2) {
  selectedFortune = fortune2;
}
else if (randomNumber === 3) {
  selectedFortune = fortune3;
}
if (randomNumber === 4) {
  selectedFortune = fortune4;
}
if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);