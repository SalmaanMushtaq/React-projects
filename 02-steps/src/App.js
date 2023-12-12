import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <>
      <Steps />;
    </>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleNext() {
    if (step < 3) setStep((e) => e + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((e) => e - 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            <StepMessage step={step}>{messages[step - 1]} </StepMessage>
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function StepMessage({ step, children }) {
  return (
    <div>
      <h3> Step {step}</h3>
      {children}
    </div>
  );
}
function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default App;
