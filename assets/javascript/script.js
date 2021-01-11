// Psuedo code logic 
// 1.) When clicking on start button, starts timer AND startGame function
// 2.) Go through questions array via a for loop
// 2.) When clicking on an answer question, prompt next question button
// 3.) When clicking a correct answer, add to score
// 4.) When getting an incorrect question, the timer drops time left
// 5.) When the game has finished or time runs out, endGame function
// 6.) Allow users to save their score on local storage

//DOM ELEMENTS
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const startButtonPara = document.getElementById("start-para");
const questionContainerEl = document.getElementById("question-container");
let questionEl = document.getElementById('question');
let answerButtonsEl = document.getElementById('answer-buttons');
let timerEl = document.getElementById('countdown');
let scoreText = document.querySelector('#score');
let shuffledQuestions, currentQuestionIndex

// New question try
// let currentQuestions = {}



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
}
)

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
    nextButton.classList.remove("hide")
    console.log(questions);
    console.log(shuffledQuestions)
    // getting a shuffled index need to figure out how to keep cycling through questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    
    // // start timer interval
    // timeRemaining = setInterval(countdown, 1000)
    
    // timerEl.textContent = timeLeft;


    setNextQuestion()
    

}


function setNextQuestion() {
    //resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText= answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct= answer.correct
        }
        // else {
        //     timeLeft = timeLeft-10
        // }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    }
        )
}

function selectAnswer(event) {

}

function countdown() {
    var timeLeft = 50;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(
      function() {
      //
      // YOUR CODE HERE
      if (timeLeft > 1){
        timerEl.textContent = timeLeft + "seconds remaining"
        timeLeft--
      }
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + "second remaining"
        timeLeft--
      }
      else {
        timerEl.textContent = ""
        clearInterval(timeInterval)
        displayMessage()
      } 
    }
    , 1000);
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

// begin question array
const questions = [ 
    {
       question: "What is 2+2",
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
    },
    {
        question: "Who is the best player in NBA History?",
           a: 
           [
               {text: 'Michael Jordan', correct: false},
               {text: 'Kareem Abdul Jabbar', correct: false},
               {text: 'LeBron James', correct: false},
               {text: 'Kobe Bryant', correct: true}
           ]
    },
    
   
   ]


//click startBtn to start countdown
startButton.onclick = countdown;
