const ball = document.getElementById('ball');
const answer = document.getElementById('answer');
const askButton = document.getElementById('askButton');

const answers = [
    "Да", "Нет", "Возможно", "Спроси позже", "Не могу предсказать", "Бесспорно", "Сконцентрируйся и спроси снова"
];

askButton.addEventListener('click', () => {
    // Анимация тряски шара
    ball.style.animation = 'shake 0.5s';

    // Скрываем текст перед новым ответом
    answer.style.opacity = '0';

    // После завершения анимации показываем ответ
    setTimeout(() => {
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        answer.textContent = randomAnswer;
        answer.style.opacity = '1'; // Показываем текст
        answer.style.animation = 'textAppear 0.5s ease-in-out'; // Анимация появления текста
        ball.style.animation = ''; // Сбрасываем анимацию
    }, 500);

    const starBackground = document.querySelector('.star-background');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    starBackground.appendChild(star);
}

// Создаем 100 звезд
for (let i = 0; i < 100; i++) {
    createStar();
}
});
