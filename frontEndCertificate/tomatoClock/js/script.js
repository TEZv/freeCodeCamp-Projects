let breakIncrement = document.getElementById("break-increment");
let breakDecrement = document.getElementById("break-decrement");

let sessionIncrement = document.getElementById("session-increment");
let sessionDecrement = document.getElementById("session-decrement");

let startStopButton = document.getElementById("start_stop");
let resetButton = document.getElementById("reset");

let breakLength = document.getElementById("break-length");
let sessionLength = document.getElementById("session-length");
let timeLeft = document.getElementById("time-left")
let breakOrSession = document.getElementById("break-or-session");

let timer;
let isItBreak = false;
let timerStatus = "begin";

// Start/Stop Button
startStopButton.addEventListener("click", () => {
    if (timerStatus === "begin" || timerStatus === "stopped") {
        timeLeft.innerText = decrementTime(timeLeft.innerText);
        console.log("start the timer");
        timerStatus = "counting";
        timer = setInterval(() => {
            timeLeft.innerText = decrementTime(timeLeft.innerText); 
        }, 1000);
    } else if (timerStatus === "counting") {
        console.log("stop the timer");
        timerStatus = "stopped";
        clearInterval(timer);
    }
})

