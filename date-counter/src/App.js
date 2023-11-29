import { useState } from "react";
function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <div className="step">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step:{step}</span>
      </div>
      <div className="count">
        <button className="btn" onClick={() => setCount((c) => c - step)}>- </button>
        <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button className="btn" onClick={() => setCount((c) => c + step)}> +</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
              ? `${count} days from today is`
              : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
      {(count !== 0 || step !== 1) &&
        <div>
          <button className="btnReset" onClick={handleReset}>Reset</button>
        </div>
      }
    </>
  );
}

export default App;
