const getVowelCount = (sentence) => {
  let vowels = ["e", "u", "i", "o", "a"] //for fcc y is not a vowels, this is the correct choice of vowels
  let count = 0;
  for (let char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
  }
  


  const getConsonantCount = (sentence) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (char >= "a" && char <= "z" && !vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  };

  const alphabet_b = (char) => {
    return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
  }


  const getPunctuationCount = (sentence) => {
    let count = 0;
    for (const char of sentence.toLowerCase()) {
      if (!alphabet_b(char) && char !== ' ') {
        count ++;
      }
    }
    return count;
  }

  const getWordCount = (sentence) => {
    let word = 0;
    let inWord = false;
    for (const char of sentence.toLowerCase()) {
      if (char !== " " && !inWord) {
        inWord = true;
        word++;
      }
      else if (char === ' ') {
        inWord = false;
      }
    }
    return word;
  }

  console.log("I love freeCodeCamp??????????")
  let vowelCount = getVowelCount("I love freeCodeCamp??????????");
  console.log(`Vowel Count: ${vowelCount}`)
  let consonantCount = getConsonantCount("I love freeCodeCamp??????????");
  console.log(`Consonant Count: ${consonantCount}`)
  let punctuationCount = getPunctuationCount("I love freeCodeCamp??????????")
 console.log(`Punctuation Count: ${punctuationCount}`)
 let wordCount = getWordCount("I love freeCodeCamp??????????");
console.log(`Word Count: ${wordCount}`)