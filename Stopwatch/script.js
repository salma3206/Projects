const startStop = document.querySelector('.start');
const reset = document.querySelector('.reset');
const time = document.querySelectorAll('span');
let interval = null; 
let ms = s = m = 0;

startStop.addEventListener('click', () => {
    if (startStop.textContent == "Démarrer") {
        startStop.textContent = 'Arreter';
        startStop.style.backgroundColor = 'red';
        reset.style.opacity = 1;
        reset.style.cursor = 'pointer';
        interval = setInterval(() => {
            time[0].textContent = m < 10 ? '0' + m : m;
            time[1].textContent = s < 10 ? '0' + s : s;
            time[2].textContent = ms < 10 ? '0' + ms : ms;
            
            ms++;

            if (ms == 99) {
                s++;
                ms = 0;
            }
            
            if (s == 59) {
                m++;
                s = 0;
            }
        }, 10)
    }
    else {
        startStop.textContent = 'Démarrer';
        startStop.style.backgroundColor = 'green';
        if (ms == 0 && m == 0 && s == 0) {
        reset.style.opacity = 0.6;
        reset.style.cursor = 'default'
        }
        clearInterval(interval);
    }
});

reset.addEventListener('click', () => {
    ms = s = m = 0;
    time[0].textContent = time[1].textContent = time[2].textContent = '00';
})