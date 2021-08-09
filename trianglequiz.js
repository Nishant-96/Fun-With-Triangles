var quizForm = document.querySelector("#quiz-form");
var submitButton = document.querySelector("#submit-button");
var outputBox = document.querySelector("#output-box-quiz");

submitButton.addEventListener("click",clickHandler)


var correctAnswers = ["180°","Obtuse","Scalene","Acute","Isoscales"]

function clickHandler(){

    var score = 0;
    var i=0;
    var userAnswers = new FormData(quizForm)
    
    for(let value of userAnswers.values()){
        if(value === correctAnswers[i]){
            score=score+1;
        }
            i++;
    }
    outputBox.innerText="You have answered a total of "+score+" questions correctly. Your total score is: "+ score+".";
}