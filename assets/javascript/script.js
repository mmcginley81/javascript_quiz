// Psuedo code logic 
// 1.) When clicking on start button, starts timer AND startGame function
// 2.) Go through questions array via a for loop
// 2.) When clicking on an answer question, prompt next question button
// 3.) When clicking a correct answer, add to score
// 4.) When getting an incorrect question, the timer drops time left
// 5.) When the game has finished or time runs out, start endGame function
// 6.) Allow users to save their score on local storage

//DOM ELEMENTS
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const startButtonPara = document.getElementById("start-para");
const questionContainerEl = document.getElementById("question-container");
let questionEl = document.getElementById('question');
let answerButtonsEl = document.getElementById('answer-buttons');
let timerEl = document.getElementById('countdown');
let userScore = document.getElementById('saveScore');
let shuffledQuestions, currentQuestionIndex;

let score = 0
let timeLeft = 50;




// event listener to start game and click through questions
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
}
)

// start game and add/remove classes to show questions
function startGame() {
    startButton.classList.add("hide")
    startButtonPara.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    nextButton.classList.remove("hide")
    // console.log(questions);
    // console.log(shuffledQuestions)
    // getting a shuffled index need to figure out how to keep cycling through questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    


    setNextQuestion()
    

}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionEl.innerText = question.question

        // needs a foreach argument instead of a for loop due to many answer choices
        question.answer.forEach(answer => {
            // Display current question to user and ask OK/Cancel
            const button = document.createElement("button");
            button.innerText = answer.text;
            console.log(answer.text)
            button.classList.add("btn");
            console.log(answer)
            if (answer.correct) {
                button.dataset.correct = answer.correct
              }
              button.addEventListener('click', selectAnswer)
              answerButtonsEl.appendChild(button)

            })
            console.log(answerButtonsEl);
        

          
          }

//reset the page for new questions
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    console.log(answerButtonsEl)
    //loop through all answerButtonEL and if there is a child we want to remove it
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(event) {
    let selectedButton = event.target
    let correct = selectedButton.dataset.correct
    
    
    setAnswerClass(document.body, correct)
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    }else{
        endQuiz();
        stop(timeLeft)
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    }
    //check all answer data to adjust for the correct class
    Array.from(answerButtonsEl.children).forEach(button => {
        setAnswerClass(button, button.dataset.correct)
    })

}



// display right answer
function setAnswerClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add(".correct")
        score++
        
    }else {
        element.classList.add(".incorrect");
        timeLeft = timeLeft - 1
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

function endQuiz(){
    //show end screen
    let endScreenEl = document.getElementById("end-screen");
    endScreenEl.classList.remove("hide");

    // this should work but doesn't clearInterval(timeInterval)
    
    console.log(timerEl)
    //show user final score
    let finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = (score);
    
    //remove questions
    questionContainerEl.classList.add("hide")

    //
    

 }

 
function countdown() {
    
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(
      function() {
      //
      // YOUR CODE HERE
      if (timeLeft > 1){
        timerEl.textContent = timeLeft + " " + "seconds remaining"
        timeLeft--
      }
      else if (timeLeft === 1 || endQuiz()){
        
        timerEl.textContent = timeLeft + " " + "second remaining"
        timeLeft--
        stop(timerEl)
      }
      else {
        timerEl.textContent = ""
        clearInterval(timeInterval)
        endQuiz()
      } 
    }
    , 1000);
}

// Button to save your score
userScore.addEventListener('click', saveScore)
userScore.addEventListener('click', showScoreList)
// Save your score to set to local storage
function saveScore() {
    
    
    var scoreName = document.getElementById("userName").value
    console.log(score, scoreName)
    localStorage.setItem(score, scoreName)

}

function showScoreList() {

  var list = document.createElement('li');
  list.textContent = localStorage.getItem(score);
  
  document.getElementById("score-area").appendChild(list).textContent;
  console.log(list.textContent)
}



// begin question array
const questions = [ 
    {
       question: "What year did the NBA create the 3 point line",
           answer: 
           [
               {text: '1979', correct: true},
               {text: '1982', correct: false},
               {text: '1960', correct: false},
               {text: '1974', correct: false}
           ]
    },
    {
        question: "Who scored the most points in NBA History?",
           answer: 
           [
               {text: 'Michael Jordan', correct: false},
               {text: 'Kareem Abdul Jabbar', correct: true},
               {text: 'LeBron James', correct: false},
               {text: 'Kobe Bryant', correct: false}
           ]
    },
    {
        question: "Who played the most years for the Los Angeles Lakers?",
           answer: 
           [
               {text: 'Michael Jordan', correct: false},
               {text: 'Kareem Abdul Jabbar', correct: false},
               {text: 'LeBron James', correct: false},
               {text: 'Kobe Bryant', correct: true}
           ]
    },
    {
        question: "Who has the most assists in NBA history?",
           answer: 
           [
               {text: 'Steve Nash', correct: false},
               {text: 'John Stockton', correct: true},
               {text: 'LeBron James', correct: false},
               {text: 'Isiah Thomas', correct: false}
           ]
    },
    {
        question: "Who scored the most points in an NBA game?",
           answer: 
           [
               {text: 'Wilt Chamberlain', correct: true},
               {text: 'Magic Johnson', correct: false},
               {text: 'Klay Thompson', correct: false},
               {text: 'Kobe Bryant', correct: false}
           ]
    },
    
   
   ]


//click startBtn to start countdown
startButton.onclick = countdown;
