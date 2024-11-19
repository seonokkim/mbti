// Array of questions
const questions = [
    {
        id: 1,
        text: 'Do you enjoy introducing yourself when meeting new people?',
        yes: 'E',
        no: 'I',
    },
    {
        id: 2,
        text: 'Do you frequently make plans?',
        yes: 'J',
        no: 'P',
    },
    {
        id: 3,
        text: 'Do you focus more on details rather than the bigger picture?',
        yes: 'S',
        no: 'N',
    },
    {
        id: 4,
        text: 'Do you prefer using logic and objective criteria in decision-making?',
        yes: 'T',
        no: 'F',
    },
    {
        id: 5,
        text: 'Do you enjoy working in a team more than working alone?',
        yes: 'E',
        no: 'I',
    },
    {
        id: 6,
        text: 'Do you trust facts and observable data more than abstract ideas?',
        yes: 'S',
        no: 'N',
    },
    {
        id: 7,
        text: 'Do you prefer to organize and structure your environment?',
        yes: 'J',
        no: 'P',
    },
    {
        id: 8,
        text: 'Do you value empathy and harmony more than logical consistency?',
        yes: 'F',
        no: 'T',
    },
];

// Index of the current question being displayed
let currentQuestionIndex = 0;

// Array to store the answers for each question
const answers = [];

// Function to handle the "Yes" button click
function onYesButtonClick() {
    // Save the current question's "Yes" answer to the answers array
    answers[currentQuestionIndex] = questions[currentQuestionIndex].yes;

    // Move to the next question
    currentQuestionIndex++;

    // If it's the last question, calculate the result and redirect to the result page
    if (currentQuestionIndex === questions.length) {
        calculateResult();
        return;
    }

    // Display the next question
    const nextQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = nextQuestion.text;
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}`;
}

// Function to handle the "No" button click
function onNoButtonClick() {
    // Save the current question's "No" answer to the answers array
    answers[currentQuestionIndex] = questions[currentQuestionIndex].no;

    // Move to the next question
    currentQuestionIndex++;

    // If it's the last question, calculate the result and redirect to the result page
    if (currentQuestionIndex === questions.length) {
        calculateResult();
        return;
    }

    // Display the next question
    const nextQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = nextQuestion.text;
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}`;
}

// Function to calculate the MBTI result
function calculateResult() {
    const result = {
        E: 0,
        I: 0,
        N: 0,
        S: 0,
        T: 0,
        F: 0,
        P: 0,
        J: 0,
    };

    // Count responses for each question
    for (let i = 0; i < questions.length; i++) {
        const userAnswer = answers[i];
        result[userAnswer]++;
    }

    // Determine the MBTI result
    let mbtiResult = '';
    mbtiResult += result.E > result.I ? 'E' : 'I';
    mbtiResult += result.N > result.S ? 'N' : 'S';
    mbtiResult += result.F > result.T ? 'F' : 'T';
    mbtiResult += result.P > result.J ? 'P' : 'J';

    // Save the MBTI result to localStorage
    localStorage.setItem('mbti_result', mbtiResult);

    // Redirect to result.html
    location.href = 'result.html';
}

// Display the first question on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstQuestion = questions[0];
    document.getElementById('question').textContent = firstQuestion.text;
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}`;
});

// Attach event listeners to "Yes" and "No" buttons
document.getElementById('yes-button').addEventListener('click', onYesButtonClick);
document.getElementById('no-button').addEventListener('click', onNoButtonClick);