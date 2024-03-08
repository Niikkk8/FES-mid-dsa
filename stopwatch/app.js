let cancelId;
let startTime;
let savedTime = 0;
let timerMilliSeconds = document.querySelector('.timer_milliseconds')
let timerSeconds = document.querySelector('.timer_seconds')
let timerMinutes = document.querySelector('.timer_minutes')

function startTimer() {
    startTime = Date.now();
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
    savedTime = savedTime + Date.now() - startTime;
    console.log(savedTime)
    cancelAnimationFrame(cancelId)
}

function resetTimer() {
    startTime = Date.now()
    savedTime = 0
    timerMilliSeconds.innerHTML = '000'
    timerSeconds.innerHTML = '00';
    timerMinutes.innerHTML = '00'
}

function updateTimer() {
    let timer = savedTime + (Date.now() - startTime);
    let milliSecondsPassed = timer % 1000;
    let secondsPassed = (Math.floor(timer / 1000)) % 60;
    let minutesPassed = Math.floor(secondsPassed / 60);

    let minutesText = minutesPassed;
    let secondsText = secondsPassed;
    let milliSecondsText = milliSecondsPassed;

    if (minutesText.toString().length === 1) {
        minutesText = '0' + minutesText;
    }
    if (secondsText.toString().length === 1) {
        secondsText = '0' + secondsText;
    }
    if (milliSecondsText.toString().length < 3) {
        milliSecondsText = milliSecondsText.toString().padStart(3, '0')
    }

    timerMinutes.innerHTML = minutesText;
    timerSeconds.innerHTML = secondsText;
    timerMilliSeconds.innerHTML = milliSecondsText;
    cancelId = requestAnimationFrame(updateTimer)
}