// jshint esversion : 6


// import modules

const quizData = require('./quiz_data');
const highScore = require('./high_score.js');
const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.green.bold("Welcome to the Game!!!\n"));

// Get the player name

let playerName = readlineSync.question("Hi there, What is your name?. : ");

console.log(chalk.yellow("Welcome " + playerName + "!!!\n"));

let score = 0;
let level = 1;

// function to check user answer is correct or not

function play(question, answer) {
    correctAnswer = readlineSync.question(chalk.cyanBright(question));

    if (answer == correctAnswer) {
        console.log(chalk.greenBright("Your answer is correct!!"));
        score = score + 1;
        if (score % 5 == 0) {
            level = level + 1;
            console.log(chalk.cyan("Congrats!!, You are one level up.\n"));
        }
    }
    else {
        console.log(chalk.red("Your answer is wrong!!"));
        console.log(chalk.greenBright("The correct answer is : "+ answer));

        if (score > 0) {
            score = score - 1;
        }
    }

    console.log(chalk.blueBright("Your score is : "+ score));
    console.log(chalk.magenta("Your current level is : "+ level));
    console.log(chalk.blue("\n-------------------------\n"));
}

// iterate through the question

for (var i = 0; i < quizData.length; i++) {
    play(quizData[i].question, quizData[i].answer);
}

console.log(chalk.bgBlue("\tHigh Scores"));
console.table(highScores);


// find the high score
let maxScore = highScore[0].score;

for (var i = 0; i < highScores.length; i++) {
    if (highScores[i].score > maxScore) {
        maxScore = highScores[i].score;
    }
}

if (score > maxScore) {
    console.log(chalk.bgGreen('\n Congrats! You beat high score!!\n'));
}
else {
    console.log(chalk.bgYellow('\n Better Luck Next Time!!\n'));
}
