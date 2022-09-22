let a = document.querySelector(".circle");

let value = 0;
let timerId;
let min = 0;
let hr = 0;
function tick() {
    value++;
    document.querySelector("#output").textContent = value;

    let b = document.querySelector(".percentage");
    b.textContent = value;
    let e = document.querySelector(".percentage1");
    e.textContent = min;
    let f = document.querySelector(".percentage2");
    f.textContent = hr;


    let a = document.querySelector(".circle");

    let c = document.querySelector(".circle1");
    
    let d = document.querySelector(".circle2");

    if (value < 5) {
        value++;
        a.style.strokeDasharray = `${value * 9.6}, 100`;
    } else {
        value = 0;
        min++;
        console.log(min)
        c.style.strokeDasharray = `${min * 9.6}, 100`;
    }
    if (min < 5) {
        c.style.strokeDasharray = `${min * 9.6}, 100`;
    } else if(min > 5){
        min = 0;
        hr++;
        d.style.strokeDasharray = `${hr * 9.6}, 100`;
    }
    if (hr < 59) {
        d.style.strokeDasharray = `${hr * 9.6}, 100`;
    } 
}



function resetValue() {
    value = 0;
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