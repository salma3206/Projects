const display = document.querySelector('#screen');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent === 'C') {
            display.textContent = '0';
        }
        else if (btn.textContent === 'DEL') {
            if(display.textContent.length === 1){
                display.textContent = '0';
                return;
            }
            display.textContent = display.textContent.slice(0, -1);
        }
        else if (btn.textContent === '=') {
            try{
                display.textContent = eval(display.textContent)
            }
            catch{
                display.textContent = 'Error';
            }
        } 
        else if (display.textContent === '0' || display.textContent === 'Error') {
            display.textContent = btn.textContent;
        }
        else {
            display.textContent += btn.textContent;
        }
    });
});

document.addEventListener( 'keydown', (e) => {
    if ('0123456789+-*/%.'.includes(e.key)) {
        display.textContent += e.key;
    }
    if (e.key === 'Enter') {
        try{
                display.textContent = eval(display.textContent)
            }
            catch{
                display.textContent = 'Error';
            }
    }
    if ( e.key === 'Backspace') {
        display.textContent = display.textContent.slice(0, -1);
    }
    if ( e.key === 'Escape') {
        display.textContent = '';
    }
});