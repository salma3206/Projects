let value = 0;
const count = document.getElementById('count');
const increment = document.getElementById('increment'); 
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

function updateDisplay() {
    count.textContent = value;
    
}
increment.addEventListener( 'click', () => {
    value++;
    updateDisplay();
});

decrement.addEventListener( 'click', () => {
    value--;
    updateDisplay();
});

reset.addEventListener( 'click', () => {
    value = 0;
    updateDisplay();
});

updateDisplay();