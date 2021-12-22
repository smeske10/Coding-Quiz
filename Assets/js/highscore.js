const highScoreList = document.querySelector('#highscorelist')
const highScore = JSON.parse(localStorage.getItem('highScore')) || []

highScoreList.innerHTML=
highScore.map(score => {
    return '<li class="highScore">$(score.name) - $(score.score)</li>'
}).join('')