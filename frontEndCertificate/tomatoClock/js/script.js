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

// Reset Button
resetButton.addEventListener("click", () => {
    console.log("reset button click");
    clearInterval(timer);
    timeLeft.innerText = "25:00";
    sessionLength.innerText = "25";
    breakLength.innerText = "5";
});

// Function for the time
function decrementTime(timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0]);
    let secondDisplay = parseInt(timeDisplay[1]);

    secondDisplay -= 1;

    if (secondDisplay === -1) {
        secondDisplay = 59;
        minuteDisplay -= 1;
    };

    if (secondDisplay < 10) {
        secondDisplay = "0" + secondDisplay;
    }

    if (minuteDisplay < 10) {
        minuteDisplay = "0" + minuteDisplay;
    }

    return minuteDisplay + ":" + secondDisplay;
}

// Session Length

    //Incrementing
sessionIncrement.addEventListener("click", () => {
    
    // To keep it always as 60 max
    if (parseInt(sessionLength.innerText) === 60) {
        sessionLength.innerText = 60;
    } else {
        sessionLength.innerText = parseInt(sessionLength.innerText) + 1;
    };
    
    // Updating display when incrementing
sessionIncrement.addEventListener("click", () => {
    let timeDisplay = timeLeft.innerText.split(":");
    let secondDisplay = parseInt(timeDisplay[1]);
    let minuteDisplay = parseInt(sessionLength.innerText);

    if (minuteDisplay < 10) {
        minuteDisplay = "0" + minuteDisplay;
    }

    if (secondDisplay < 10) {
        secondDisplay = "0" + secondDisplay;
    }

    timeLeft.innerText = minuteDisplay + ":" + secondDisplay;
});
    });

    