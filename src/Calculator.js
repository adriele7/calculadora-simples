import React, { useState } from 'react';

import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');

  const handleNumberClick = (num) => {
    if (display === '0') {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num.toString());
    }
    setCurrentNumber(currentNumber + num.toString());
  };

  const handleOperatorClick = (op) => {
    if (operator !== '') {
      calculate();
    }
    setOperator(op);
    setPreviousNumber(display);
    setCurrentNumber('');
  };

  const calculate = () => {
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    let result = 0;
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        break;
    }
    setDisplay(result.toString());
    setPreviousNumber(result.toString());
    setCurrentNumber('');
    setOperator('');
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentNumber('');
    setOperator('');
    setPreviousNumber('');
  };

  const handleEqual = () => {
    calculate();
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <button onClick={handleClear} className="button-clear">C</button>
        <button onClick={() => handleOperatorClick('/')} className="button-operator">/</button>
        <button onClick={() => handleOperatorClick('*')} className="button-operator">*</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('-')} className="button-operator">-</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('+')} className="button-operator">+</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={handleEqual} className="button-equal">=</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')} className="button-dot">.</button>
      </div>
    </div>
  );
};

export default Calculator;
