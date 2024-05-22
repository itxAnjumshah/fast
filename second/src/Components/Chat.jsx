import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleOperation = (op) => {
    setOperation(op);
  };

  const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    let calculatedResult;

    switch (operation) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        calculatedResult = '';
    }

    setResult(calculatedResult);
  };

  return (
    <>
      <input
        type="number"
        className='usernumber'
        placeholder='Enter first number'
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        type="number"
        className='usernumber'
        placeholder='Enter second number'
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <div className='symbol'>{operation}</div>
      <br/><br/>
      <div className='btn-click'>
        <button onClick={() => handleOperation('+')}>Add value</button>
        <button onClick={() => handleOperation('-')}>Minus value</button>
        <button onClick={() => handleOperation('*')}>Multiply Value</button>
        <button onClick={() => handleOperation('/')}>Divide value</button>
        <br/>
        <button onClick={calculate}>Calculate</button>
        <br/>
        <h1>Result: {result}</h1>
      </div>
    </>
  );
}
