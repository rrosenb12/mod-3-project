document.addEventListener("DOMContentLoaded", (e) => {

const quizzesContainer = document.getElementById('quizzes-container')
const displayQuiz = document.getElementById('display-quiz')

const questionsContainer = document.createElement('ul')
questionsContainer.className = 'questions-container'

const questionsDiv = document.createElement('div')
questionsDiv.className = 'questions-div'

const submitButton = document.createElement('button')
submitButton.innerText = 'Submit'

let quizzesArray
let questionsArray
let valueArray = []

const fetchQuizzes = () => {
    fetch(`http://localhost:3000/api/v1/quizzes`)
    .then(response => response.json())
    .then(quizzes => {
        quizzesArray = quizzes 
        quizzes.forEach(quiz => renderQuizzes(quiz)) })
}

const renderQuizzes = (quiz) => {
    const quizSpan = document.createElement('span')
    quizSpan.innerText = quiz.title
    quizSpan.dataset.id = quiz.id
    quizSpan.className = 'quiz-span'
    quizzesContainer.append(quizSpan)
    quizSpan.addEventListener('click', (e) => {
        questionsContainer.innerHTML = ``
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
    .then(questionsObj => {
        questionsArray = questionsObj
        fetchAnswers(questionsArray, quizNow)}
    )
}

const fetchAnswers = (questionsArray, quizNow) => {
    fetch('http://localhost:3000/api/v1/answers')
    .then(response => response.json())
    .then(answersArray => getQuestions(questionsArray, quizNow, answersArray))
}

const getQuestions = (questionsArray, quizNow, answersArray) => {
    const quizQuestions = questionsArray.filter(question => question.quiz_id == quizNow.id)
    renderQuestions(quizQuestions, answersArray)
}

const renderQuestions = (quizQuestions, answersArray) => {
    quizQuestions.forEach(question => {
        const questionLi = document.createElement('li')
        questionLi.innerText = question.content
        const questionAnswers = answersArray.filter(answer => answer.question_id == question.id)
        questionAnswers.forEach(answer => {
            const questionAnswer = document.createElement('p')
            questionAnswer.innerText = answer.answer_content
            questionAnswer.dataset.value = answer.value
            questionAnswer.className = 'the-questions-answer'
            questionLi.append(questionAnswer)
            questionsContainer.append(questionLi)
            questionAnswer.addEventListener('click', (e) => {
                 addValue(e)            
            })
        })
    })
    questionsContainer.append(submitButton)
    displayQuiz.append(questionsContainer)
}

const addValue = (e) => {
    valueArray.push(e.target.dataset.value)
    console.log(valueArray)
}

fetchQuizzes();

})