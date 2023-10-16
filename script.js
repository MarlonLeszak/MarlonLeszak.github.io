document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const resultsDiv = document.getElementById("results");

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const answers = {
            q1: "b",
            q2: "c",
            q3: "b",
            q4: "c",
            q5: "a"
        };

        let score = 0;

        for (let i = 1; i <= 5; i++) {
            const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

            if (selectedAnswer) {
                const questionNumber = `q${i}`;
                const userAnswer = selectedAnswer.value;

                if (userAnswer === answers[questionNumber]) {
                    score++;
                }
            }
        }

        resultsDiv.innerHTML = `Você acertou ${score} de 5 perguntas!`;
    });
});
