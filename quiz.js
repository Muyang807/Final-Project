let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "Who is considered the first computer programmer?",
        options: ["Ada Lovelace", "Alan Turing", "Grace Hopper"],
        correct: 0
    }
];

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = q.options.map((opt, index) => `
        <button class="btn btn-outline-primary mb-2" onclick="checkAnswer(${index})">${opt}</button>
    `).join('');
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score++;
        document.getElementById('score').textContent = score;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        alert(`Quiz Complete! Score: ${score}/${questions.length}`);
    }
}

showQuestion();
