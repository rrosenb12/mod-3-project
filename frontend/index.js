document.addEventListener("DOMContentLoaded", (e) => {

const quizzesContainer = document.getElementById('quizzes-container')
const displayQuiz = document.getElementById('display-quiz')
let quizzesArray
let questionsArray
const questionsContainer = document.createElement('ul')
questionsContainer.className = 'questions-container'


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
        fetchAnswers(questionsArray, quizNow)})
}

// const getQuizQuestions = (questionsArray, quizNow) => {
//     const quizQuestions = questionsArray.filter(question => question.quiz_id == quizNow.id)
//     quizQuestions.forEach(question => {
//         fetchAnswers(question)
//     })
// }

const fetchAnswers = (questionsArray, quizNow) => {
    fetch('http://localhost:3000/api/v1/answers')
    .then(response => response.json())
    .then(answersArray => getAnswers(questionsArray, quizNow, answersArray))
}

const getAnswers = (questionsArray, quizNow, answersArray) => {
    const quizQuestions = questionsArray.filter(question => question.quiz_id == quizNow.id)
    quizQuestions.forEach(question => {
        const questionAnswers = answersArray.filter(answer => answer.question_id == question.id)
    renderQuestions(question, questionAnswers)
    })    
}

const renderQuestions = (question, questionAnswers) => {
    const questionLi = document.createElement('li')
    questionLi.innerText = question.content
    
    questionAnswers.forEach(answer => {
        const questionAnswer = document.createElement('p')
        questionAnswer.innerText = answer.answer_content
        questionAnswer.dataset.value = answer.value
        questionAnswer.className = 'the-questions-answer'
        questionLi.append(questionAnswer)
        
        

        questionAnswer.addEventListener('click', function(e){
             addValue(e)
               
            
        })
    })
    const submitButton = document.createElement('button')
    submitButton.innerText = 'Submit'
    questionsContainer.append(questionLi, submitButton)
    displayQuiz.append(questionsContainer)

    
}
let valueArray = []

function addValue(e){
    valueArray.push(e.target.dataset.value)
    console.log(valueArray)
}


fetchQuizzes();

})