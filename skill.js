const questions = [
    {
        question: "What is the capital of India?",
        options: ["Utter pradesh", "Dheradhun", "New Delhi", "Rome"],
        correct: "New Delhi"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "Who is the Prime Minister of the India?",
        options: ["Barack Obama", "Donald Trump", "Narender Modi", "George Bush"],
        correct: "Narender Modi"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        correct: "Jupiter"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const retryButton = document.getElementById('retry-btn');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz Over!";
    optionsElement.style.display = 'none';
    resultContainer.style.display = 'block';
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    optionsElement.style.display = 'block';
    resultContainer.style.display = 'none';
    displayQuestion();
}

retryButton.onclick = resetQuiz;

displayQuestion();
