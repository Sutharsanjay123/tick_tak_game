// Quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2 // Index of the correct answer
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "12", "15", "11"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    }
];



let index = 0; // Current question index
let score = 0; // User's score
let totalQuestions = quizData.length; // Total number of questions
let attempted = 0; // Count of attempted questions

// Elements
const questionTitle = document.querySelector("h1");
const options = document.querySelectorAll(".rwo");
const prevButton = document.querySelector(".previse");
const nextButton = document.querySelector(".next");
const submitButton = document.querySelector(".submit");
const resultBox = document.querySelector(".result");

// Load the current question
function loadQuestion() {
    const currentQuestion = quizData[index];
    questionTitle.textContent = currentQuestion.question;

    // Set options
    options.forEach((option, i) => {
        const input = option.querySelector("input");
        const label = option.querySelector("label");
        input.checked = false; // Reset selected options
        input.value = i;
        label.textContent = currentQuestion.options[i];
    });
}

// Check the selected answer
function getSelectedAnswer() {
    let selected = null;
    options.forEach(option => {
        const input = option.querySelector("input");
        if (input.checked) {
            selected = parseInt(input.value);
        }
    });
    return selected;
}

// Event Listeners
prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
        loadQuestion();
    } else {
        alert("This is the first question!");
    }
});

nextButton.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === null) {
        alert("Please select an answer before proceeding!");
    } else {
        attempted++;
        if (selectedAnswer === quizData[index].correct) {
            score++;
        }
        if (index < quizData.length - 1) {
            index++;
            loadQuestion();
        } else {
            alert("This is the last question. Click Submit to finish!");
        }
    }
});

submitButton.addEventListener("click", () => {
    // Calculate final score
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer !== null && selectedAnswer === quizData[index].correct) {
        score++;
        attempted++;
    }

    // Calculate percentages
    const accuracy = ((score / attempted) * 100).toFixed(2);
    const wrong = ((attempted - score) / attempted * 100).toFixed(2);

    // Display the result
    document.querySelector(".box").style.display = "none"; // Hide the quiz
    resultBox.style.display = "block"; // Show the result
    resultBox.innerHTML = `
        <h2>Results</h2>
        <p>Score: ${score} / ${totalQuestions}</p>
        <p>Accuracy: ${accuracy}%</p>
        <p>Correct Answers: ${(score / totalQuestions * 100).toFixed(2)}%</p>
        <p>Wrong Answers: ${wrong}%</p>
    `;
});

// Initialize the quiz
loadQuestion();
