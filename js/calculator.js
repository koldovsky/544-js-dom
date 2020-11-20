const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach( button => button.addEventListener('click', buttonPressed));
function buttonPressed(ev) {
    display.value += ev.target.innerText;
}
document.querySelector('.calculate').addEventListener('click', calculate);
function calculate() {
    display.value = eval(display.value);
}
