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
    quizSpan.addEventListener('click', (e) => {
        getQuiz(e)
    })
}

const getQuiz = (e) => {
    const currentQuizId = e.target.dataset.id
    const quizNow = quizzesArray.find(quiz => quiz.id == currentQuizId)
    fetchQuestions(quizNow)
}

const fetchQuestions = (quizNow) => {
    fetch('http://localhost:3000/api/v1/questions')
    .then(response => response.json())
    .then(questionsArray => getQuizQuestions(questionsArray, quizNow))
}

const getQuizQuestions = (questionsArray, quizNow) => {
    const quizQuestions = questionsArray.filter(question => question.quiz_id == quizNow.id)
    quizQuestions.forEach(question => renderQuestions(question))
}

const renderQuestions = (question) => {
    const questionsContainer = document.createElement('ul')
    const questionLi = document.createElement('li')
    questionLi.innerText = question.content
    questionsContainer.append(questionLi)
    displayQuiz.append(questionsContainer)
}

fetchQuizzes();

})