let sec = 0;
let timerId;
let min = 0;
let hr = 0;
function tick() {
    sec++;
    document.querySelector("#output").textContent = sec;

    let divSec = document.querySelector(".percentage");
    divSec.textContent = sec;
    let divMin = document.querySelector(".percentage1");
    divMin.textContent = min;
    let divHr = document.querySelector(".percentage2");
    divHr.textContent = hr;


    let secCircle = document.querySelector(".circle");
    let minCircle = document.querySelector(".circle1");
    let hrCircle = document.querySelector(".circle2");

    if (sec <= 59) {
        secCircle.style.strokeDasharray = `${sec * 1.666}, 100`;
    } else {
        sec = 0;
        min++;
        console.log(min)
        minCircle.style.strokeDasharray = `${min * 1.666}, 100`;
    }
    if (min <= 59) {
        minCircle.style.strokeDasharray = `${min * 1.666}, 100`;
    } else if (min > 59) {
        min = 0;
        hr++;
        hrCircle.style.strokeDasharray = `${hr * 1.666}, 100`;
    }
    if (hr <= 59) {
        hrCircle.style.strokeDasharray = `${hr * 1.666}, 100`;
    }
}

function resetValue() {
    value = 0;
    min = 0;
    hr = 0;
}

document.querySelector("#startBtn").addEventListener("click", function () {
    if (!timerId) {
        timerId = setInterval(tick, 1000);
    }
});

document.querySelector("#stopBtn").addEventListener("click", function () {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
});

document.querySelector("#resetBtn").addEventListener("click", function () {
    resetValue();
});
