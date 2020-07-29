document.addEventListener("DOMContentLoaded", (e) => {

    const quizzesContainer = document.getElementById('quizzes-container')
    const displayQuiz = document.getElementById('display-quiz')
    const displayResult = document.getElementById('display-result')

    const questionsContainer = document.createElement('ul')
    questionsContainer.className = 'questions-container'

    const questionsDiv = document.createElement('div')
    questionsDiv.className = 'questions-div'

    const submitButton = document.createElement('button')
    submitButton.innerText = 'Submit'

    const likeButton = document.createElement('button')
    likeButton.innerText = 'Like This Quiz'

    // let likes = document.createElement('p')

    let quizzesArray
    let questionsArray
    let valuesArray = []

    const fetchQuizzes = () => {
        fetch(`http://localhost:3000/api/v1/quizzes`)
        .then(response => response.json())
        .then(quizzes => {
            quizzesArray = quizzes 
            quizzes.forEach(quiz => renderQuizzes(quiz)) }
        )
    }

    const renderQuizzes = (quiz) => {
        const quizSpan = document.createElement('span')
        quizSpan.innerText = quiz.title
        quizSpan.dataset.id = quiz.id
        quizSpan.className = 'quiz-span'
        quizzesContainer.append(quizSpan)
        quizSpan.addEventListener('click', (e) => {
            questionsContainer.innerHTML = ``
            displayQuiz.innerHTML = ``
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
        let likes = document.createElement('p')
        likes.dataset.id = quizNow.id
        if (quizNow.likes === 0) {
            likes.innerHTML = `<span>0</span> likes`
        } else {
            likes.innerHTML = `<span>${quizNow.likes}</span> likes`
        }
        renderQuestions(quizQuestions, answersArray, likes, quizNow)
    }

    const renderQuestions = (quizQuestions, answersArray, likes, quizNow) => {
        displayResult.innerHTML = ``
        valuesArray = []

        // if (displayQuiz.firstElementChild.className === 'null'){
        //     displayQuiz.firstElementChild.remove()
        // } 
        quizQuestions.forEach(question => {
            const questionLi = document.createElement('li')
            questionLi.innerHTML = `${question.content}<br>`
            const questionAnswers = answersArray.filter(answer => answer.question_id == question.id)
            questionAnswers.forEach(answer => {
                const questionAnswer = document.createElement('button')
                questionAnswer.innerText = answer.answer_content
                questionAnswer.dataset.value = answer.value
                questionAnswer.className = 'the-questions-answer'
                questionLi.append(questionAnswer)
                questionsContainer.append(questionLi)
            })
        })
        questionsContainer.append(submitButton)
        displayQuiz.append(questionsContainer, likeButton, likes)
        addLikes(likes, quizNow)
    }

    const addLikes = (likes, quizNow) => {
        likeButton.addEventListener('click', e => {
            e.preventDefault()
            let newLikes = (quizNow.likes + 1)
            // let newLikes = (Number(likes.firstChild.innerText) + 1)
            fetch(`http://localhost:3000/api/v1/quizzes/${quizNow.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json'
                },
                body: JSON.stringify({
                    likes: newLikes
                })
            })
            .then(response => response.json())
            .then(updateLikes(newLikes, likes), console.log(likes))
        })
    }

    const updateLikes = (newLikes, likes) => {
   likes.innerHTML = ``     
   likes.innerHTML = `<span>${newLikes}</span> likes`
    }

    const getValues = () => {
        document.addEventListener('click', (e) => {
            if (e.target.className === 'the-questions-answer') {
                answerB = e.target 
                valuesArray.push(answerB.dataset.value)
                answerBParent = answerB.parentNode
                const firstButton = answerBParent.firstChild.nextSibling.nextSibling 
                const secondButton = firstButton.nextSibling
                const thirdButton = secondButton.nextSibling
                const fourthButton = thirdButton.nextSibling
                firstButton.disabled = true
                secondButton.disabled = true
                thirdButton.disabled = true
                fourthButton.disabled = true
            }
        })
    }

    const submitHandler = () => {
        submitButton.addEventListener('click', (e) => {
            let valuesToSum = valuesArray.map(value => Number(value))
            let sum = valuesToSum.reduce((a, b) => a + b)
            getResult(sum)
        })
    }

    const getResult = (sum) => {
        let id;
        if (sum >= 4 && sum < 7){
            id = 1
            fetchResult(id)
        } else if (sum >= 7 && sum < 10){
            id = 2
            fetchResult(id)
        } else if (sum >= 10 && sum < 13){
            id = 3
            fetchResult(id)
        } else if (sum >= 13 && sum <= 16){
            id = 4
            fetchResult(id)
        } else if (sum >= 20 && sum < 23){
            id = 5
            fetchResult(id)
        } else if (sum >= 23 && sum < 26){
            id = 6
            fetchResult(id)
        } else if (sum >= 26 && sum < 29){
            id = 7
            fetchResult(id)
        } else if (sum >= 29 && sum <= 32){
            id = 8
            fetchResult(id)
        } else if (sum >=36 && sum < 39){
            id = 9
            fetchResult(id)
        } else if (sum >= 39 && sum < 42){
            id = 10
            fetchResult(id)
        } else if (sum >= 42 && sum < 45){
            id = 11
            fetchResult(id)
        } else if (sum >= 45 && sum <= 48){
            id = 12
            fetchResult(id)
        }
    }

    const fetchResult = (id) => {
        fetch(`http://localhost:3000/api/v1/results/${id}`)
        .then(result => result.json())
        .then(result => renderResult(result))
    }

    const renderResult = (result) => {
        const resultH2 = document.createElement('h2')
        resultH2.innerText = result.title
        const resultP = document.createElement('p')
        resultP.innerText = result.description
        displayResult.append(resultH2, resultP)
    }

    submitHandler()
    fetchQuizzes();
    getValues()

})