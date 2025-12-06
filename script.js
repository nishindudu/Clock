function getTime() {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    return { hours, minutes, seconds, milliseconds };
}

function updateClock() {
    const { hours, minutes, seconds, milliseconds } = getTime();
    // console.log(hours, minutes, seconds, milliseconds);
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hourHand = document.querySelector('.hour');
    const second = seconds * 360 / 60 + milliseconds * 360 / 60000;
    const minute = (minutes + seconds / 60) * 360 / 60;
    const hour = (hours % 12 + minutes / 60) * 360 / 12;

    secondHand.style.transform = `rotate(${180 + second}deg)`;
    minuteHand.style.transform = `rotate(${180 + minute}deg)`;
    hourHand.style.transform = `rotate(${180 + hour}deg)`;
}

let updateFrequency = 10;

clock = setInterval(updateClock, updateFrequency);
updateClock();

function update() {
    const updateFreqInput = document.getElementById('updatefreq');
    const newFreq = parseInt(updateFreqInput.value, 10);
    console.log(newFreq);
    if (!isNaN(newFreq)) {
        clock = clearInterval(clock);
        updateFrequency = newFreq;
        clock = setInterval(updateClock, updateFrequency);
    }
}

function init() {
    const updateFreqInput = document.getElementById('updatefreq');
    updateFreqInput.value = updateFrequency;
}

init();