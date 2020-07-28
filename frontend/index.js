document.addEventListener("DOMContentLoaded", (e) => {

const quizzesContainer = document.getElementById('quizzes-container')
let quizzesArray

const fetchQuizzes = () => {
    fetch(`http://localhost:3000/api/v1/quizzes`)
    .then(response => response.json())
    .then(quizzes => {
        quizzesArray = quizzes, 
        quizzes.forEach(quiz => renderQuizzes(quiz)) })
}

function renderQuizzes(quiz){
    const quizSpan = document.createElement('span')
    quizSpan.innerText = quiz.title
    quizSpan.dataset.id = quiz.id
    quizzesContainer.append(quizSpan)
    quizSpan.addEventListener('click', function(e){
        renderQuiz(e, quiz)
    })
}

const renderQuiz = (e, quiz) => {
console.log(e.target)
}

// function renderQuiz(quiz){
//      const quizEl
// }

fetchQuizzes();

})