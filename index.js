const readline require('readline');

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

function startTimer() {
  setTimeout(() => {
    gameOver = true;
    console.log("\nTime's up!");
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