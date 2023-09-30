
const questions=[
    {
        question:"What does the abbreviation HTML stand for?",
        answers:[
            {
             text:"HTML describes the structure of a webpage",
             correct:false
            },
            {
             text:"HTML is the standard markup language mainly used to create web pages",
             correct:false
            },
            {
             text:"HTML consists of a set of elements that helps the browser how to view the content",
             correct:false
            },
            {
             text:"All of the mentioned",
             correct:true
            },
        ]
    },
    {
        question:"Who is the father of HTML?",
        answers:[
            {text:"Rasmus Lerdorf", correct:false},
            {text:"Tim Berners-Lee", correct:true},
            {text:"Brendan Eich", correct:false},
            {text:"Sergey Brin", correct:false},
        ]
    },
    {
        question:"HTML stands for",
        answers:[
            {text:"HyperText Markup Language", correct:true},
            {text:"HyperText Machine Language", correct:false},
            {text:"HyperText Marking Language", correct:false},
            {text:"HighText Marking Languages", correct:false},
        ]
    },
    {
        question:"What is the correct syntax of doctype in HTML5?",
        answers:[
            {text:"</doctype html>", correct:false},
            {text:"<doctype html>", correct:false},
            {text:"<doctype html!>", correct:false},
            {text:"<!doctype html>", correct:true},
        ]
    },
    {
        question:"What is CSS?",
        answers:[
            {text:"CSS is a style sheet language",
             correct:false},
            {text:"CSS is designed to separate the presentation and content, including layout, colors, and fonts",
             correct:false},
            {text:"CSS is the language used to style the HTML documents",
             correct:false},
            {text:"All of the mentioned",
             correct:true},
        ]
    },
];

let qustionsElement=document.querySelector(".question");
let answerBtnContainer=document.querySelector(".ans-btn");
let answerBtn=document.querySelectorAll(".btn");
let nextBtn=document.querySelector(".nxt-btn");
let questionNumber=document.querySelector(".question-number");
let numberOfQuestion=document.querySelector(".question-counter");
let currentquestionindex=0;
let score=0;
let counter=0;

function displayQuestion() {
    let cquestion=questions[currentquestionindex];
    let questionNo=currentquestionindex+1;
    qustionsElement.innerText=cquestion.question;
    questionNumber.innerText=questionNo+". ";
    numberOfQuestion.textContent=`${questionNo}/${questions.length}`;

    // looping through answers nodelist
    answerBtn.forEach((elem,i)=>{
        let canswer=questions[currentquestionindex].answers[i];
          elem.innerText=canswer.text;
          elem.setAttribute("data-click",`${canswer.correct}`);
          elem.addEventListener('click',highLightCorrectAnswer);          
          elem.classList.remove('correct', 'incorrect');
          elem.disabled=false;
        })

    if(questionNo == questions.length){
        nextBtn.textContent="Submit";
    }
    nextBtn.style.display = "none";
}

function addNextQuestion() {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        displayQuestion();
   }
   else{
        showScore();
   }
}

nextBtn.addEventListener('click',()=>{
    if (currentquestionindex < questions.length) {
         addNextQuestion();
    }    
});

function highLightCorrectAnswer(e){
    let selectedBtn=e.target;
    if(selectedBtn.dataset.click=='true'){   
        score++;
       selectedBtn.classList.add('correct');
   }
   else{
       selectedBtn.classList.add('incorrect');    
   }
   // This code disables the rest of the buttons after one click 
   answerBtn.forEach((elem)=>{
       if(elem !== e.target){
           elem.disabled=true;
           elem.removeEventListener('click', highLightCorrectAnswer);
           }
       })
       nextBtn.style.display = "block";
 } 

 function showScore(){
    questionNumber.innerText="";
    qustionsElement.textContent=`Your score is: ${score}/${questions.length}`;
    document.querySelector('h1').style.textAlign="center";
    document.querySelector('h1').style.display="block";
    numberOfQuestion.style.display="none";
    answerBtnContainer.style.display="none";
    nextBtn.style.display="none";
}

displayQuestion();   