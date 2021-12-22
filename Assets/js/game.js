const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
const progressText = document.querySelector('#progressText')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    question: 'Inside which HTML element do we put the JavaScript?',
    choice1: '<scripting>',
    choice2: '<js>',
    choice3: '<javascript>',
    choice4: '<script>',
    answer: 4,
    },
    {
    question: 'What is the correct JavaScript syntax to change the content of <p id="demo">This is a demonstration.</p>?',
    choice1: 'document.getElementbyName("p").innerHTML = "Hello World";',
    choice2: 'document.getElement("p").innerHTML = "Hello World"',
    choice3: 'document.getElementbyId("demo").innerHTML = "Hello World"',
    choice4: '#demo.innerHTML = "Hello World!"',
    answer: 3,
    },
    {
    question: 'How do you write "Hello World" in an alert box?',
    choice1: 'msg("Hello World!"',
    choice2: 'alertBox("Hello World")',
    choice3: 'msgBox("Hello World!")',
    choice4: 'alert("Hello World!")',
    answer: 4,
    },
    {
    question: 'How do you create a function in JavaScript?',
    choice1: 'function myFunction()',
    choice2: 'function = myFunction()',
    choice3: 'function:myFunction()',
    choice4: 'function.myFunction()',
    answer: 1,
    },
    {
    question: 'How do you call a function named "myFunction"?',
    choice1: 'call function myFunction()',
    choice2: 'call myFunction()',
    choice3: 'myFunction()',
    choice4: 'call function',
    answer: 3,
    },
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0,
    score = 0,
    availableQuestions = [...questions],
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        
        return window.location.assign('./end.html')
    }

    questionCounter++
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

availableQuestions.splice(questionsIndex, 1)
acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply),
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score+=num
    scoreText.innerText = score
}

startGame()