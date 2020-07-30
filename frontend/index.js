document.addEventListener("DOMContentLoaded", (e) => {

    const quizzesContainer = document.getElementById('quizzes-container');
    const displayQuiz = document.getElementById('display-quiz');
    const displayResult = document.getElementById('display-result');
    const quizContentContainer = document.getElementById('quiz-content-container');
    const likes = document.createElement('span');
    likes.className = 'likes'
    const questionsDiv = document.createElement('div');
    questionsDiv.className = 'questions-div';
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.className = 'submit-button'
    const likeButton = document.createElement('button');
    likeButton.innerText = 'Like This Quiz';
    likeButton.className = 'like-button'
    let quizzesArray;
    let questionsArray;
    let answersArray;
    let valuesArray = [];

    const fetchQuizzes = () => {
        fetch(`http://localhost:3000/api/v1/quizzes`)
        .then(response => response.json())
        .then(quizzesObj => {
            quizzesArray = quizzesObj
            const sortedQuizzes = quizzesObj.sort((a,b) => a.id - b.id)
            sortedQuizzes.forEach(quiz => renderQuizzes(quiz))
        })
    }
    
    const renderQuizzes = (quiz) => {
        const quizSpan = document.createElement('span');
        quizSpan.innerText = quiz.title; 
        quizSpan.dataset.id = quiz.id; 
        quizSpan.className = 'quiz-span';
        quizzesContainer.append(quizSpan);
        quizSpan.addEventListener('click', (e) => {
            quizContentContainer.innerHTML = ``;
            displayResult.innerHTML = ``;
            likes.innerHTML = ``;
            valuesArray = [];
            const currentQuiz = quizzesArray.find(quiz => quiz.id == e.target.dataset.id);
            likes.textContent = currentQuiz.likes;
            likeButton.dataset.id = currentQuiz.id;
            displayQuiz.append(submitButton, likeButton, likes);
            getQuiz(e);
        })
    }

    const getQuiz = (e) => {
        const currentQuizId = e.target.dataset.id;
        const quizNow = quizzesArray.find(quiz => quiz.id == currentQuizId);
        getQuestions(quizNow);
    }

    const fetchQuestions = () => {
        fetch('http://localhost:3000/api/v1/questions')
        .then(response => response.json())
        .then(questionsObj => questionsArray = questionsObj)
    }

    const fetchAnswers = () => {
        fetch('http://localhost:3000/api/v1/answers')
        .then(response => response.json())
        .then(answersObj => answersArray = answersObj)
    }

    const getQuestions = (quizNow) => {
        quizContentContainer.innerHTML = ``;
        const quizNowQuestions = questionsArray.filter(question => question.quiz_id === quizNow.id);
        quizNowQuestions.forEach(question => {
            questionP = document.createElement('p');
            questionP.className = 'question-p'
            questionP.textContent = question.content;
            questionBr = document.createElement('br');
            questionP.append(questionBr);
            getAnswers(question, questionP);
        })
    }

    const getAnswers = (question, questionP) => {
        const quizNowQuestionAnswers = answersArray.filter(answer => answer.question_id === question.id);
        quizNowQuestionAnswers.forEach(answer => {
            questionAnswer = document.createElement('button');
            questionAnswer.innerText = answer.answer_content;
            questionAnswer.className = 'question-answer';
            questionAnswer.dataset.value = answer.value;
            questionAnswer.dataset.id = answer.question_id;
            makeQuestionAnswerDiv(questionAnswer, questionP);
        })
    }

    const makeQuestionAnswerDiv = (questionAnswer, questionP) => {
        questionP.append(questionAnswer);
        quizContentContainer.append(questionP);
    }

    const collectValues = () => {
        document.addEventListener('click', e => {
            if (e.target.className === 'question-answer' && e.target.nodeName === 'BUTTON') {
                valuesArray.push(Number(e.target.dataset.value));
                const answerB = e.target;
                const answerBParent = answerB.parentNode;
                const firstButton = answerBParent.firstChild.nextSibling.nextSibling;
                const secondButton = firstButton.nextSibling;
                const thirdButton = secondButton.nextSibling;
                const fourthButton = thirdButton.nextSibling;
                firstButton.disabled = true;
                secondButton.disabled = true;
                thirdButton.disabled = true;
                fourthButton.disabled = true;
            }
        })
    }

    const submitHandler = () => {
        submitButton.addEventListener('click', () => {
            let sum = valuesArray.reduce((a, b) => a + b);
            getResult(sum);
        })
    }

    const addLikes = () => {
        likeButton.addEventListener('click', e => {
            e.preventDefault();
            const currentQuiz = quizzesArray.find(quiz => quiz.id == e.target.dataset.id);
            const newLikes = (Number(likes.innerText) + 1);
            console.log(newLikes);
            fetch(`http://localhost:3000/api/v1/quizzes/${currentQuiz.id}`, {
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
            .then(fetchQuizzes, quizzesContainer.innerHTML = ``, updateLikes(newLikes))
        })
    }

    const updateLikes = (newLikes) => {
        likes.innerHTML = ``;
        likes.innerText = newLikes;
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
        const resultH2 = document.createElement('h2');
        resultH2.innerText = result.title;
        const resultImg = document.createElement('img')
        resultImg.src = result.img_url
        resultImg.className = 'result-img'
        const resultP = document.createElement('p');
        resultP.className = 'result-p'
        resultP.innerText = result.description;
        displayResult.append(resultH2, resultImg, resultP);
    }

    fetchQuizzes();
    fetchQuestions();
    fetchAnswers();
    submitHandler()
    collectValues()
    addLikes();
    
})