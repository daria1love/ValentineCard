
const textElement = document.querySelector('h1');
const words = ['You are the reason my world', 'is full of laughter and joy.', 'Happy Valentine’s Day, my heart'];
let part = "",
    IntervalId = null,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 80;

const printText = () => {
    if (i == len - 1 && offset == words[i].length) {
        clearInterval(IntervalId);
    }
    if (forwards) {
        if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count = skip_delay) {
                forwards = false;
                skip_count = 0;
            }
        }
    }
    else {
        if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
                i = 0;
            }
        }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
        if (forwards) {
            offset++;
        }
        else {
            offset--;
        }
    }
    textElement.innerText = part;
};


const start = function () {
    IntervalId = null;
    IntervalId = setInterval(printText, speed);
};



textElement.addEventListener("click", function (e) {
    start();
}, false);

// console.log(textElement.onclick);