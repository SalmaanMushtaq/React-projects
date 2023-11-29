import { useState } from "react";

function App() {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operator, setOperator] = useState("");

  const handleDigitClick = (digit) => {
    setCurrentOperand(currentOperand + digit);
  };

  const handleOperatorClick = (newOperator) => {
    if (currentOperand !== "") {
      if (previousOperand !== "") {
        // Perform the calculation if there is a previous operand and operator
        calculate();
      }
      setPreviousOperand(currentOperand);
      setCurrentOperand("");
      setOperator(newOperator);
    }
  };

  const calculate = () => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (operator === "+") {
      setCurrentOperand((prev + current).toString());
    } else if (operator === "-") {
      setCurrentOperand((prev - current).toString());
    } else if (operator === "*") {
      setCurrentOperand((prev * current).toString());
    } else if (operator === "/") {
      if (current !== 0) {
        setCurrentOperand((prev / current).toString());
      } else {
        // Handle division by zero error here
        setCurrentOperand("Error");
      }
    }
    setPreviousOperand("");
    setOperator("");
  };

  const handleClear = () => {
    setPreviousOperand("");
    setCurrentOperand("");
    setOperator("");
  };

  const handleDelete = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  const handleEquals = () => {
    if (previousOperand !== "" && currentOperand !== "") {
      calculate();
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operator}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={handleClear}>
        AC
      </button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={() => handleDigitClick("1")}>1</button>
      <button onClick={() => handleDigitClick("2")}>2</button>
      <button onClick={() => handleDigitClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleDigitClick("4")}>4</button>
      <button onClick={() => handleDigitClick("5")}>5</button>
      <button onClick={() => handleDigitClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleDigitClick("7")}>7</button>
      <button onClick={() => handleDigitClick("8")}>8</button>
      <button onClick={() => handleDigitClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleDigitClick(".")}>.</button>
      <button onClick={() => handleDigitClick("0")}>0</button>
      <button className="span-two" onClick={handleEquals}>
        =
      </button>
    </div>
  );
}

export default App;
