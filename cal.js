
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }

  const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.c-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculador');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('operator')) {
      handleOperator(target.value);
      updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
      updateDisplay();
      return;
    }
  
    if (target.classList.contains('limpiar')) {
      resetCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains('del')) {
      delButton();
      updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });
  function delButton(){
    //console.log(calculator)
    var floatOldNumber= parseFloat(calculator.displayValue);
    var newNumber= calculator.displayValue.substring(0,calculator.displayValue.length-1);
    var floatNewNumber= parseFloat(newNumber);
    if (newNumber.length === 0 && floatNewNumber>=0){
      resetCalculator();
      return;
    }
    if (newNumber.length === 1 && floatOldNumber<0){
      resetCalculator();
      return;
    }
    if (isNaN(floatNewNumber)) return;
    calculator.displayValue= newNumber;
    calculator.firstOperand= floatNewNumber;
    console.log(parseFloat(newNumber))
  }

  function Tema(){
    var valor= document.getElementById("customRange2");
    var v= document.getElementById("tem");
    if(valor.value === "1"){
      v.href= "style.css";
    }
    if(valor.value === "2"){
      v.href= "style2.css";
    }
    if(valor.value === "3"){
      v.href= "style3.css";
    }
  
  }