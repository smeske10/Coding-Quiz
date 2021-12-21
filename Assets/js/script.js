//Setup Timer to begin countdown on click for start button

var start = document.querySelector("#start");
var num = 60;

function countdown() {
    for (var i = num; i > 0; i--) {
        document.getElementById("timer").innerHTML = "Time Remaining: " + i;
        
        setInterval(setTimeout(function() {
            console.log(i)
                document.getElementById("timer").innerHTML = "Time ran out";
        }, 1000), 1000)
    }
}

    
document.getElementById("timer").innerHTML = "Time Remaining: " + num;

start.addEventListener("click", countdown);

