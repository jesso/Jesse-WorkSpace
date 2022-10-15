
const questions = [["2+4-1+6", "11"], ["3+2+5-2-4","4"], ["9-2+5-3", "9"]];

const resultBtn = document.getElementById("result_btn");
const answerBox = document.getElementById("answer_box");
const question = document.getElementById("questions");
const questionNo = document.getElementById("question_no") 
var que_nunmber = 1;
var score = 0;

resultBtn.addEventListener('click',function()
{
    
    quiz();
    questions.shift();
    que_nunmber++;
     setup();
     
})

function setup(){

    if(questions.length != 0)
    {
        questionNo.innerHTML = "Question "+ que_nunmber; 
        question.innerHTML = questions[0][0];
    
    }
    else{
        question.innerHTML = "Your Score " + score;
        questionNo.innerHTML = "Quiz Ended !";
        resultBtn.remove();
        answerBox.remove();
        // que_nunmber.remove();
        
    }

   
    
}

function quiz()
{
    if(answerBox.value == questions[0][1])
    {
        score ++;
        answerBox.value = "";
    }
    else
    {
        answerBox.value = "";
    }
}
