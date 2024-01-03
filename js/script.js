const background = document.querySelector('.bg');
const loadText = document.querySelector('.load-text');
const textNumber = document.querySelector('.text-number');

let loadNumber = 0;

let increase = setInterval(blur, 20);

function blur() {
    loadNumber = loadNumber + 1;

    if (loadNumber > 99) {
        clearInterval(increase);
    }

    loadText.innerHTML = `${loadNumber}%`;
    loadText.style.opacity = scale(loadNumber, 0, 100, 0, 1);

    if( loadText.innerHTML == `100%` ){
        loadText.style.display = 'none';
    }

    background.style.filter = `blur(${scale(loadNumber, 0, 100, 40, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}