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
});