const questions = [
    {
        question: " Which is the largest animal in the world ?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Girafee", correct: false },

        ]
    },
    {
        question: " What is the capital of France? ?",
        answer: [
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },

        ]
    },
    {
        question: "What is the largest planet in our Solar System?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false },

        ]
    },
    {
        question: " Who wrote 'To Kill a Mockingbird' ?",
        answer: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "J.K. Rowling", correct: false },
            { text: "Ernest Hemingway", correct: false },

        ]
    },
    {
        question: "What is the square root of 64?",
        answer: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false },
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answer: [
            { text: "Abraham Lincoln", correct: false },
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "John Adams", correct: false },
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answer: [
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answer: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
        ]
    }
];


const questionElemnt = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};
function showQuestion() {
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElemnt.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function reset() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore(){
    reset(); 
    questionElemnt.innerHTML= `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
    }
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }

});

startQuiz();

