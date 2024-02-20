
var display = document.getElementById('display');

var buttons = document.querySelectorAll('.buttons button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var buttonText = button.innerText;

    if (buttonText === 'AC') {
      clearDisplay();
    } else if (buttonText === '=') {
      calculateResult();
    } else {
      appendToDisplay(buttonText);
    }
  });
});

function clearDisplay() {
  display.value = '';
}

function appendToDisplay(text) {
  display.value += text;
}

function calculateResult() {
  try {
    var result = evaluateExpression(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error: ' + error.message;
  }
}

function evaluateExpression(expression) {
  return Function('"use strict";return (' + expression + ')')();
}
