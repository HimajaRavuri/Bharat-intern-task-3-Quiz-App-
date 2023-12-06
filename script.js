const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale"
    }
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");

function buildQuiz() {
    quizData.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        question.options.forEach((option) => {
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = `question${index}`;
            radioInput.value = option;

            const optionLabel = document.createElement("label");
            optionLabel.innerHTML = option;

            questionDiv.appendChild(radioInput);
            questionDiv.appendChild(optionLabel);
        });

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const userAnswers = [];
    const quizQuestions = document.querySelectorAll(".question");

    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
        }
    });

    showResults(userAnswers);
}

function showResults(userAnswers) {
    let score = 0;

    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correctAnswer) {
            score++;
        }
    });

    resultContainer.innerHTML = `Your Score: ${score} out of ${quizData.length}`;
}

buildQuiz();
              