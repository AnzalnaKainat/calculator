import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [total, setTotal] = useState(0);
  const [operator, setOperator] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleOperation = (operation) => {
    if (input !== '') {
      setOperator(operation);
      setTotal(parseFloat(input));
      setInput('');
    }
  };

  const handleCalculate = () => {
    if (input !== '') {
      let inputValue = parseFloat(input);
      if (operator === '+') {
        setTotal(total + inputValue);
      } else if (operator === '-') {
        setTotal(total - inputValue);
      } else if (operator === '*') {
        setTotal(total * inputValue);
      } else if (operator === '/') {
        setTotal(total / inputValue);
      }
      setInput('');
      setOperator('');
    }
  };

  const handleResetInput = () => {
    setInput('');
  };

  const handleResetResult = () => {
    setTotal(0);
    setInput('');
    setOperator('');
  };

  return (
    <>
    <h1 className='heading'> Calculator </h1>
   
    <div className="calculator-container">
         
        <div className="result">
        <h2>Total: {total}</h2>
      </div>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        className="input-field"
      />
      <div className="operation-buttons">
        <button onClick={() => handleOperation('+')}>Addition</button>
        <button onClick={() => handleOperation('-')}>Subtraction</button>
        <button onClick={() => handleOperation('*')}>Multiplication</button>
        <button onClick={() => handleOperation('/')}>Division</button>
      </div>
      <div className='button-container'>
        <button onClick={handleCalculate} className="calculate-button">Calculate</button>
        <button onClick={handleResetInput} className="reset-button">Reset Input</button>
        <button onClick={handleResetResult} className="reset-button">Reset Result</button>
      </div>
    
    </div>
    </>
  );
}

export default Calculator;
