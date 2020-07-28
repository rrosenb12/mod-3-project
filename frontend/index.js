document.addEventListener("DOMContentLoaded", (e) => {

const quizzesContainer = document.getElementById('quizzes-container')
const displayQuiz = document.getElementById('display-quiz')
let quizzesArray

const fetchQuizzes = () => {
    fetch(`http://localhost:3000/api/v1/quizzes`)
    .then(response => response.json())
    .then(quizzes => {
        quizzesArray = quizzes, 
        quizzes.forEach(quiz => renderQuizzes(quiz)) })
}

const renderQuizzes = (quiz) => {
    const quizSpan = document.createElement('span')
    quizSpan.innerText = quiz.title
    quizSpan.dataset.id = quiz.id
    quizSpan.className = 'quiz-span'
    quizzesContainer.append(quizSpan)
    quizSpan.addEventListener('click', function(e){
        getQuiz(e)
    })
}

const getQuiz = (e) => {
    const currentQuizId = e.target.dataset.id
    const quizNow = quizzesArray.find(quiz => quiz.id == currentQuizId)
    renderQuiz(quizNow)
}

const renderQuiz = (quizNow) => {
    console.log(quizNow)
}

fetchQuizzes();

})