
import './../styles/App.css';
import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([""]); // store multiple numbers as strings
  const [sum, setSum] = useState(0);

  // Recalculate sum whenever numbers change
  useEffect(() => {
    const calculateSum = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0)); // async to avoid blocking
      const total = numbers.reduce((acc, num) => acc + (parseFloat(num) || 0), 0);
      setSum(total);
    };
    calculateSum();
  }, [numbers]);

  // Handle number input change
  const handleChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  // Add a new input field
  const addInput = () => {
    setNumbers([...numbers, ""]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sum Calculator</h1>
      {numbers.map((num, index) => (
        <input
          key={index}
          type="number"
          value={num}
          onChange={(e) => handleChange(index, e.target.value)}
          style={{ padding: "5px", fontSize: "18px", margin: "5px" }}
        />
      ))}
      <br />
      <button onClick={addInput} style={{ padding: "5px 10px", margin: "10px" }}>
        Add Number
      </button>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;