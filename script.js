// select display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';
let expression = '';
// function to update display
function updateDisplay(value) {
    display.textContent = value;
}
//clear display
function clearDisplay() {
    currentInput = '';
    expression = '';
    updateDisplay('0');
}
// function to handle number
function handleNumber(value) {
    currentInput += value;
    updateDisplay(currentInput);
}
// function to handle operator
function handleOperator(value) {
    if(currentInput === '' && expression === '') return;
    if(currentInput) expression += currentInput;
    expression += value;
    currentInput = '';
    updateDisplay(expression);
}
//function to handle decimal
function handleDecimal() {
    if (!currentInput.includes('.')){
        currentInput += '.';
        updateDisplay(currentInput);
    }
}
//calculate function for = button
function calculateResult() {
    if(currentInput) expression += currentInput;
    try {
        const result = eval(expression);
        updateDisplay(result);
        expression = '';
        currentInput = result.toString();
    } catch (error) {
        updateDisplay('Error');
        currentInput = '';
        expression = '';
    }
}
// square root function
function handleSquareRoot() {
    if (currentInput) {
        try {
            const result = Math.sqrt(parseFloat(currentInput));
            updateDisplay(result);
            currentInput = result.toString();
            expression = '';
        } catch (error) {
            updateDisplay("Error");
            currentInput ='';
            expression = '';
        }
    }
}
// event listener for each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        // check button type and call respective fuction
        if (button.classList.contains('number')) handleNumber(value);
        else if (button.classList.contains('operator')) handleOperator(value);
        else if (button.id === 'clear') clearDisplay();
        else if (button.id === 'decimal') handleDecimal();
        else if (button.id === 'equals') calculateResult();
        else if (button.id === 'sqrt') handleSquareRoot();
    });
});
// initialize display on load
clearDisplay();



//     if (!currentExpression.includes('.')) { 28
//         currentExpression += '.';           29
//         updateDisplay(currentExpression);   30
//     }                                       31
// }                                           32
// // calculate functrion for = button         33

// result = Math.sqrt(parseFloat(currentExpression));   48
//     updateDisplay(result);                           49
//     currentExpression = result.toString();           50
