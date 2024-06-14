let display = document.getElementById('display');
let buttons = document.querySelectorAll('.botao');

buttons.forEach(button => {
    button.addEventListener('click', handleButtonPress);
});

function handleButtonPress(event) {
    let value = event.target.textContent;

    if (value === 'C') {
        display.value = '';
    } else if (value === '⌫') {
        display.value = display.value.slice(0, -1);
    } else if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}