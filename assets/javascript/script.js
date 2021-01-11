// Psuedo code logic 
// 1.) When clicking on start button, starts timer AND startGame function
// 2.) When clicking on an answer question, prompt next question button
// 3.) When clicking a correct answer, add to score
// 4.) When getting an incorrect question, the timer drops time left
// 5.) When the game has finished or time runs out, endGame function
// 6.) Allow users to save their score on local storage

//DOM ELEMENTS
const startButton = document.getElementById("start-btn");
const startButtonPara = document.getElementById("start-para");
const questionContainerEl = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex
let questionEl = document.querySelector('#question');
let answerButtonsEl = document.getElementById('answer-buttons');
let timerEl = document.getElementById('countdown');
let scoreText = document.querySelector('#score');

// New question try
let currentQuestions = {}


let questions = [ //begins question array
    {
       q: "What is 2+2",
           a: 
           [
               {text: '4', correct: true},
               {text: '22', correct: false},
               {text: '69', correct: false},
               {text: '24', correct: false}
           ]
    },
    {
        question: "Who scored the most points in NBA History?",
           a: 
           [
               {text: 'Michael Jordan', correct: false},
               {text: 'Kareem Abdul Jabbar', correct: true},
               {text: 'LeBron James', correct: false},
               {text: 'Kobe Bryant', correct: false}
           ]
    }
   
   ]

startButton.addEventListener('click', startGame)

// Timer set at 120 seconds left
// function countdown() {
//     var timeLeft = 120;

// var timeInterval = setInterval(
//     function() {
//     //
//     // YOUR CODE HERE
//     if (timeLeft > 1){
//       timerEl.textContent = timeLeft + "seconds remaining"
//       timeLeft--
//     }
//     else if (timeLeft === 1) {
//       timerEl.textContent = timeLeft + "second remaining"
//       timeLeft--
//     }
//     else {
//       timerEl.textContent = ""
//       clearInterval(timeInterval)
//       endGame()
//     } 
//   }
//   , 1000);
// }

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    startButtonPara.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    //startTimer()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText= answer.text
    }
        )
}

function selectAnswer() {

}



// // TODO: Create a variable to keep track of the score
// let score = 0

// // TODO: Iterate over the questions array and display each question in a confirmation box

// for (let i = 0; i < questions.length; i++){
//     let userAnswer = confirm(questions[i].q)
//     if (
//         (userAnswer === true && questions[i].a === "t") || 
//         (userAnswer === false && questions[i].a === "f")
//     ){
//         score++
//         alert("correct")
//     }
//     else{
//         alert("incorrect")
//     }
// }




//click startBtn to start countdown
//startBtn.onclick = countdown;
