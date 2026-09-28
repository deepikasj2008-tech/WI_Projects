import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  // DEL button function
  const eraseLast = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="page">
      <div className="calculator">

        <div className="header">
          <h1>Simple Calculator</h1>
          
        </div>

        <div className="display">
          {display || "0"}
        </div>

        <div className="buttons">

          <button className="clear" onClick={clearDisplay}>
            AC
          </button>

          {/* DEL button */}
          <button className="erase" onClick={eraseLast}>
            DEL
          </button>

          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("*")}>×</button>
          <button onClick={() => handleClick("-")}>−</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick(".")}>.</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button className="equal" onClick={calculate}>
            =
          </button>

          <button
            className="zero"
            onClick={() => handleClick("0")}
          >
            0
          </button>

        </div>

        <div className="footer">
          
        </div>

      </div>
    </div>
  );
}

export default App;