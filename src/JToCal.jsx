import { useState } from "react";
import "./Converter.scss";

function numViewer(num) {
  return num.toFixed(3);
}

function JouleToCalorie() {
  const [amount, setAmount] = useState("");
  const [flipped, setFlipped] = useState(false);
  const [list, setList] = useState([]);
  const onChange = (event) => setAmount(event.target.value);
  const onFlip = () => {
    setAmount("");
    setFlipped((current) => !current);
  };
  const onSave = () => {
    setList((currentArray) => [
      flipped ? numViewer(amount * 4.1868) : numViewer(amount * 0.238846),
      ...currentArray,
    ]);
    if (list.length > 4) list.splice(4);
  };
  const reset = () => setList([]);

  return (
    <div>
      <h3 className="title">Joule[J] ↔︎ Calorie[cal]</h3>
      <h4 className="formula">1[J] = 0.2388[cal]</h4>
      <div className="input-container">
        <div className="input">
          <label htmlFor="electron">Joule: </label>
          <input
            value={flipped ? numViewer(amount * 4.1868) : amount}
            id="electron"
            placeholder="Number of Electron"
            type={flipped ? "string" : "number"}
            onChange={onChange}
            disabled={flipped}
          />
          <label htmlFor="electron"> [J]</label>
        </div>
        <div className="input">
          <label htmlFor="coulomb">Calorie: </label>
          <input
            value={flipped ? amount : numViewer(amount * 0.238846)}
            id="coulomb"
            placeholder="Quantity of electric charge"
            type={flipped ? "number" : "string"}
            onChange={onChange}
            disabled={!flipped}
          />
          <label htmlFor="coulomb"> [cal]</label>
        </div>
      </div>
      <div className="custom-btn-container">
        <button className="custom-btn btn-flip" onClick={onFlip}>
          <span>Click me!</span>
          <span>Flip!</span>
        </button>
        <button className="custom-btn btn-save" onClick={onSave}>
          <span>Save</span>
        </button>
      </div>
      <div className="history-container">
        <p className="history">History</p>
        <div className="mac-btn">
          <div className="btn close-btn"></div>
          <div className="btn min-btn"></div>
          <div className="btn max-btn"></div>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default JouleToCalorie;
