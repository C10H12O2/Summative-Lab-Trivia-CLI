
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "Which company created JavaScript?",
    options: ["Microsoft", "Apple", "Netscape", "Google"],
    answer: 2
  }
];

let score = 0;
let currentQuestion = 0;
let gameOver = false;



const GAME_TIME = 30000;

let timerId;

function startTimer() {
  timerId = setTimeout(() => {
    gameOver = true;
    console.log("sTime's up!");
    endGame();
  }, GAME_TIME);
}


function startGame() {
  console.log("Welcome to the Trivia Game!!!!!");
  console.log("You have 30 seconds to answer as many questions as possible.");

  startTimer();
  askQuestion();
}

function askQuestion() {
  if (gameOver || currentQuestion >= questions.length) {
    endGame();
    return;
  }

  const q = questions[currentQuestion];
  console.log(`\nQuestion ${currentQuestion + 1}: ${q.question}`);

  q.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  rl.question("Your answer (1-4): ", (input) => {
    checkAnswer(input);
  });
}

function checkAnswer(input) {
  const correctAnswer = questions[currentQuestion].answer;

  if (parseInt(input) - 1 === correctAnswer) {
    console.log("Correct!");
    score++;
  } else {
    console.log(
      `Wrong! The correct answer was: ${questions[currentQuestion].options[correctAnswer]}`
    );
  }

  currentQuestion++;
  askQuestion();
}

function endGame() {
  clearTimeout(timerId);
  console.log("The game is over!!!!");
  console.log(`Your final score is ${score} out of ${questions.length}.`);
  rl.close();
}
startGame();



