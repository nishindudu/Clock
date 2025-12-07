function toggleSettings() {
    const settingsDiv = document.querySelector('.settings');
    const toggle = document.querySelector('.settings-toggle');
    const settingsVisible = !settingsDiv.classList.contains('hidden');

    toggle.classList.toggle('active');

    if (settingsVisible) {
        settingsDiv.classList.toggle('opacity-0');
        setTimeout(() => {
            settingsDiv.classList.toggle('hidden');
        }, 300);
    } else {
        settingsDiv.classList.toggle('hidden');
        setTimeout(() => {
            settingsDiv.classList.toggle('opacity-0');
        }, 100);
    }
}

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
let bgColour = "#222222";

clock = setInterval(updateClock, updateFrequency);
updateClock();

function setBGColour() {
    const bgColourInput = document.getElementById('bgcolor');
    bgColour = bgColourInput.value;
    document.body.style.backgroundColor = bgColour;
}


function update() {
    const updateFreqInput = document.getElementById('updatefreq');
    const newFreq = parseInt(updateFreqInput.value, 10);
    console.log(newFreq);
    if (!isNaN(newFreq)) {
        clock = clearInterval(clock);
        updateFrequency = newFreq;
        clock = setInterval(updateClock, updateFrequency);
    }

    const bgColourInput = document.getElementById('bgcolor');
    bgColour = bgColourInput.value;
    setBGColour();
}

function init() {
    const updateFreqInput = document.getElementById('updatefreq');
    updateFreqInput.value = updateFrequency;

    const bgColourInput = document.getElementById('bgcolor');
    bgColourInput.value = bgColour;
}

init();