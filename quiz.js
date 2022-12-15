
const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-button");
const output = document.querySelector("#output")

const rightAnswers = [ "3", "Right Angle", "Equilateral"];


function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
    if(value === rightAnswers[index]){
        score = score+1;
       
    }
    
    index = index + 1;
    }
    output.innerText = " your score is " + score;

}

submitAnswerButton.addEventListener('click' , calculateScore)