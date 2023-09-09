
const questions=[
    {
        question:"First question",
        answers:[
            {text:"first ans", correct:false},
            {text:"correct ans", correct:true},
            {text:"second ans", correct:false},
            {text:"third ans", correct:false},
        ]
    },
    {
        question:"Second question",
        answers:[
            {text:"first ans", correct:false},
            {text:"correct ans", correct:true},
            {text:"second ans", correct:false},
            {text:"third ans", correct:false},
        ]
    },
    {
        question:"third question",
        answers:[
            {text:"first ans", correct:false},
            {text:"correct ans", correct:true},
            {text:"second ans", correct:false},
            {text:"third ans", correct:false},
        ]
    },
    {
        question:"fourth question",
        answers:[
            {text:"first ans", correct:false},
            {text:"correct ans", correct:true},
            {text:"second ans", correct:false},
            {text:"third ans", correct:false},
        ]
    }
];


let qustionsElement=document.querySelector(".question");
let answerBtn=document.querySelectorAll(".btn");
let answerBtn1=document.querySelector(".btn");
let nextBtn=document.querySelector(".nxt-btn");

function displayQuestion() {
    qustionsElement.innerText=questions.question;
    answerBtn.forEach((elem,i)=>{
          elem.innerText=questions[i].answers[i].text;
          elem.addEventListener('click',()=>{
            if(questions[i].answers[i].correct===true){
                nextBtn.style.display = "block";
            }
            else{
                  console.log("error");
            }
          });
    })
}

nextBtn.addEventListener('click',()=>{


});


// answerBtn1.addEventListener("click" , ()=>{
//       for (let i = 0; i < questions.length; i++) {
//         const c = questions[i].answers[i].correct;
//         if(c[i] === true){
//             nextBtn.style.display = "block";
//             console.log("truew");
//         }else{
//             console.log("error");
//         }
//       }    
// })

displayQuestion();