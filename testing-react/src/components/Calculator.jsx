 import React, { useState } from "react";

export const Calculator = () => {
  const [result, setResult] = useState(0);

  const handleMultiply = (a, b) => {
    setResult(a * b);
  };

  const handleDivide = (a, b) => {
    setResult(a / b);
  };

  const handleSum = (a, b) => {
    setResult(a + b);
  };

  const handleSubtract = (a, b) => {
    setResult(a - b);
  };

  return (
    <div>
      <h1 data-testid="result">Result: {result}</h1>

      <button data-testid="multiply" onClick={() => handleMultiply(2, 3)}>
        Multiply 2 * 3
      </button>
      <button onClick={() => handleDivide(6, 3)}>Divide 6 / 3</button>
      <button onClick={() => handleSum(1, 2)}>Sum 1 + 2</button>
      <button onClick={() => handleSubtract(5, 3)}>Subtract 5 - 3</button>
    </div>
  );
};
