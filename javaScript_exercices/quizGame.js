let questions = [
    {
        category: "Question about countries",
        question: "What country is under Spain, after the sea?",
        choices: ["USA", "Poland", "Morocco"],
        answer: "Morocco",
    },
    {
        category: "Question about animals",
        question: "What is the human's best friend?",
        choices: ["Cat", "Crocodile", "Dog"],
        answer: "Dog",
    },
    {
        category: "Question about foods",
        question: "What is dry and French?",
        choices: ["Saucisson", "Cassoulet", "Couscous"],
        answer: "Saucisson",
    },
    {
        category: "Question about video games",
        question: "What is the game named COD?",
        choices: ["Age of Empire", "Call of Duty", "Spyro"],
        answer: "Call of Duty",
    },
    {
        category: "Question about drinks",
        question: "What is made of potatoes?",
        choices: ["Vodka", "Coca Cola", "Orangina"],
        answer: "Vodka",
    }
];

const getRandomQuestion = (questions) => {
    if (questions.length === 0) return "No questions available.";
    let randomQuestion = Math.floor(Math.random() * questions.length);
    return questions[randomQuestion];
}

const getRandomComputerChoice = (choices) => {
    if (!choices || choices.length === 0) {
        return "No choices available.";
    }
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const getResults = (selectedQuestion, computerChoice) => {
    if (computerChoice === selectedQuestion.answer) {
        return `\x1b[32mThe computer's choice is correct!\x1b[0m`;  // Green text for correct answer
    } else {
        return `\x1b[31mThe computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}\x1b[0m`;  // Red text for incorrect answer
    }
};


// Example usage
const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
console.clear(); //clear the console like system("clear") in C
console.log("\x1b[33m"); // change the color
console.log(selectedQuestion.question);
console.log(computerChoice);
console.log("\x1b[0m"); // reset the color
console.log(getResults(selectedQuestion, computerChoice));



/*csalamithome@penguin:~/FCC_Cursus/JS$ node quizGame.js
What is dry and French?
Couscous
The computer's choice is wrong. The correct answer is: Saucisson

csalamithome@penguin:~/FCC_Cursus/JS$ node quizGame.js
What is dry and French?
Cassoulet
The computer's choice is wrong. The correct answer is: Saucisson

csalamithome@penguin:~/FCC_Cursus/JS$ node quizGame.js
What is the game named COD?
Call of Duty
The computer's choice is correct!

csalamithome@penguin:~/FCC_Cursus/JS$ node quizGame.js
What is made of potatoes?
Orangina
The computer's choice is wrong. The correct answer is: Vodka

csalamithome@penguin:~/FCC_Cursus/JS$ node quizGame.js
What is dry and French?
Couscous
The computer's choice is wrong. The correct answer is: Saucisson

csalamithome@penguin:~/FCC_Cursus/JS$ */