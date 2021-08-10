var quizForm = document.querySelector("#quiz-form");
var submitButton = document.querySelector("#submit-button");
var outputBox = document.querySelector("#output-box-quiz");
var errorBox=document.querySelector("#error-box-quiz")

submitButton.addEventListener("click",clickHandler)


var correctAnswers = ["180°","Obtuse","Scalene","Acute","Isoscales"]

function clickHandler(){

    var score = 0;
    var i=0;
    var userAnswers = new FormData(quizForm)
    var userResponses=[];

    errorBox.style.display="none";
    outputBox.style.display="none";
    
    for(let value of userAnswers.values()){
        userResponses.push(value);        
    }
    if(userResponses.length===5){
        for(i=0;i<userResponses.length;i++){
            if(userResponses[i]===correctAnswers[i]){
                score=score+1;
            }
        }
        outputBox.style.display="block";
        outputBox.innerText="You have answered a total of "+score+" questions correctly. Your total score is: "+ score+".";
    }else{
        errorBox.style.display= "block";
        errorBox.innerHTML= `<div style="background-color: red; border-radius:0.5rem; padding: 0.8rem; margin-top:1rem;font-weight: bolder;text-align:center">Oops! It seems you missed out on some question. Please answer all of the questions before submitting.</div>`
    }
    
}
