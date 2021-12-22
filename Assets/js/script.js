var start = document.querySelector("#start");
var scores = document.querySelector("#scores");
var submit = document.querySelector("#submit");
var q1 = document.querySelector("#q1");
var q2 = document.querySelector("#q2");
var q3 = document.querySelector("#q3");
var q4 = document.querySelector("#q4");
var q5 = document.querySelector("#q5");
var yourScore = document.querySelector("#yourScore");

//Set Timer to  60 seconds
var num = 60;
//Function to begin countdown on click "start"
function countdown() {

    scores.className = "hide";

    for (var i = num; i > 0; i--) {
        document.getElementById("timer").innerHTML = "Time Remaining: " + i;
        
        setInterval(setTimeout(function() {
            console.log(i)
                document.getElementById("timer").innerHTML = "Time ran out";
        }, 1000), 1000)
    }
}
 
//hold timer to display at all times
document.getElementById("timer").innerHTML = "Time Remaining: " + num;

//All event listeners that initiate functions
start.addEventListener("click", countdown);
start.addEventListener("click", quiz);
submit.addEventListener("click", next)
scores.addEventListener("click", displayScores);