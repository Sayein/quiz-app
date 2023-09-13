
const questions=[
    {
        question:"First question",
        answers:[
            {text:"1 first ans", correct:false},
            {text:"1 correct ans", correct:true},
            {text:"1 second ans", correct:false},
            {text:"1 third ans", correct:false},
        ]
    },
    {
        question:"Second question",
        answers:[
            {text:"2 first ans", correct:false},
            {text:"2 correct ans", correct:true},
            {text:"2 second ans", correct:false},
            {text:"2 third ans", correct:false},
        ]
    },
    {
        question:"third question",
        answers:[
            {text:"3 first ans", correct:false},
            {text:"3 correct ans", correct:true},
            {text:"3 second ans", correct:false},
            {text:"3 third ans", correct:false},
        ]
    },
    {
        question:"fourth question",
        answers:[
            {text:"4 first ans", correct:false},
            {text:"4 correct ans", correct:true},
            {text:"4 second ans", correct:false},
            {text:"4 third ans", correct:false},
        ]
    },
];

let qustionsElement=document.querySelector(".question");
let answerBtn=document.querySelectorAll(".btn");
let nextBtn=document.querySelector(".nxt-btn");
let scoreBoard=document.querySelector(".score-board");
let currentquestionindex=0;
let score=0;

function displayQuestion() {
    let cquestion=questions[currentquestionindex];
    let questionNo=currentquestionindex+1;
    qustionsElement.innerText=questionNo+". "+cquestion.question;
    answerBtn.forEach((elem,i)=>{
        let canswer=questions[currentquestionindex].answers[i];
          elem.innerText=canswer.text;
          elem.addEventListener('click',function highLightCorrectAnswer(){
            if(canswer.correct===true){
                nextBtn.style.display = "block";
                elem.classList.add('correct');
                elem.removeEventListener('click',highLightCorrectAnswer);
                elem.disabled=true;
            }
            else{
                nextBtn.style.display = "block";
                elem.classList.add('incorrect');
                elem.disabled=true;
            }
          });
          elem.classList.remove('correct');
          elem.classList.remove('incorrect');
          elem.disabled=false;
    })
    
    nextBtn.style.display = "none";
}

function addNextQuestion() {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        displayQuestion();
   }
   
}

nextBtn.addEventListener('click',()=>{
    if (currentquestionindex < questions.length) {
         addNextQuestion();
    }    
});

displayQuestion();   