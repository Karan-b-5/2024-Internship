let [seconds, minutes, hours] = [0, 0, 0];

let displayTime = document.getElementById('displayTime');

let timer = null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;

        if(minutes==60){
            minutes = 0;
            hours++;
        }
    }

    let h = (hours < 10) ? "0" + hours : hours;
    let m = (minutes < 10) ? "0" + minutes : minutes; 
    let s = (seconds < 10) ? "0" + seconds : seconds; 

    displayTime.innerText = h + ":" + m + ":" + s;
}

function watchStart(){
    // when we pause the timer and then again click the play button, then reinitilaise the times
    if(timer!=null)
        clearInterval(timer);

    // will execute stopwatch function after every 1000ms or 1sec
    timer = setInterval(stopwatch, 1000);
    document.getElementById('start').style.display = "none"
}

function watchStop() {
    // stops executing the stopwatch function and make the start button visible
    clearInterval(timer);
    document.getElementById('start').style.display = "flex"
}

function watchReset() {
    // stops executing the stopwatch function
    clearInterval(timer);
    // reinitialise the variables...
    [seconds, minutes, hours] = [0, 0, 0];
    // Change time on UI to 00:00:00;
    displayTime.innerText = "00:00:00";
    // and make the start button visible
    document.getElementById('start').style.display = "flex"
}

/* ** NOTE **
1. Alternate to the condition :
if(timer!=null)
        clearInterval(timer);
        is :
if (timer == null || timer.paused) {
        timer = setInterval(stopwatch, 1000);
}

2. Could microseconds be added ?
    In settimeinterval add 0.001 that will count at 1 microsecond. then desirably other value also in H1 hours : minutes : seconds : milliseconds : microseconds.
*/