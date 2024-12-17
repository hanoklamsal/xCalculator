import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleExpressionChange = (e) => {
    setExpression(expression + e.target.value);
  };

  const evaluateExpression = () => {
    if (expression === "") {
      setResult("Error");
    } else {
      try {
        const res = eval(expression);
        if (res === Infinity) {
          setResult("Infinity");
        } else if (isNaN(res)) {
          setResult("NaN");
        } else {
          setResult(res);
        }
      } catch (error) {
        setResult("Error");
      }
    }
  };

  const clearExpression = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="calculatorContainer">
      <input
        type="text"
        value={expression}
        style={{ width: "60%", padding: "1rem", fontSize: "2rem" }}
        readOnly
      />
      <p style={{ fontSize: "2rem" }}>{result}</p>

      <div className="calcPad">
        <div className="calcRow">
          <button value={7} onClick={handleExpressionChange}>
            7
          </button>
          <button value={8} onClick={handleExpressionChange}>
            8
          </button>
          <button value={9} onClick={handleExpressionChange}>
            9
          </button>
          <button value="+" onClick={handleExpressionChange}>
            +
          </button>
        </div>
        <div className="calcRow">
          <button value={4} onClick={handleExpressionChange}>
            4
          </button>
          <button value={5} onClick={handleExpressionChange}>
            5
          </button>
          <button value={6} onClick={handleExpressionChange}>
            6
          </button>
          <button value="-" onClick={handleExpressionChange}>
            -
          </button>
        </div>
        <div className="calcRow">
          <button value={1} onClick={handleExpressionChange}>
            1
          </button>
          <button value={2} onClick={handleExpressionChange}>
            2
          </button>
          <button value={3} onClick={handleExpressionChange}>
            3
          </button>
          <button value="*" onClick={handleExpressionChange}>
            *
          </button>
        </div>
        <div className="calcRow">
          <button onClick={clearExpression}>C</button>
          <button value={0} onClick={handleExpressionChange}>
            0
          </button>
          <button onClick={evaluateExpression}>=</button>
          <button value="/" onClick={handleExpressionChange}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
