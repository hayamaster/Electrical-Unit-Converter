import { useState, useEffect } from "react";
import "./Converter.scss";

function numViewer(num) {
  if (num.toString().length <= 5) {
    return num;
  }
  const numExp = Number.parseFloat(num).toExponential(3);
  if (numExp.toString()[0] === "-") {
    const eTo10 = numExp.toString().substring(7).replace("+", "");
    return numExp.substring(0, 6) + "×10^(" + eTo10 + ")";
  }
  const eTo10 = numExp.toString().substring(6).replace("+", "");
  return numExp.substring(0, 5) + "×10^(" + eTo10 + ")";
}

function H() {
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const onChange = (event) => setAmount(event.target.value);
  const onReset = () => setAmount("");
  const onSave = () => {
    setList((currentArray) => [
      index === "init"
        ? numViewer(amount * 6.62606957 * 10 ** -19)
        : numViewer(amount * 4.13566733 * 10 ** -15),
      ...currentArray,
    ]);
    if (list.length > 4) list.splice(4); //restrict size of list[] for visualization
  };
  const reset = () => setList([]);
  const [index, setIndex] = useState("init");
  const onSelect = (event) => {
    setAmount("");
    setIndex(event.target.value);
  };
  return (
    <div>
      <h3 className="title">Plank Constant [h]</h3>
      <select className="select h" value={index} onChange={onSelect}>
        <option value="init">h to J•s</option>
        <option value="1">h to eV•s</option>
      </select>
      {index === "init" ? (
        <h4 className="formula">h = 6.626 × 10^(-34) [J•s]</h4>
      ) : null}
      {index === "1" ? (
        <h4 className="formula">h = 4.136 × 10^(-15) [eV•s]</h4>
      ) : null}
      <div className="input-container">
        <div className="input">
          <label htmlFor="plank">input: </label>
          <input
            value={amount}
            id="plank"
            placeholder="plank constant h"
            type="number"
            onChange={onChange}
          />
          <label htmlFor="plank"> [h]</label>
        </div>
        <div className="input">
          <label htmlFor="output">output: </label>
          <input
            value={
              index === "init"
                ? numViewer(amount * 6.62606957 * 10 ** -19)
                : numViewer(amount * 4.13566733 * 10 ** -15)
            }
            id="output"
            placeholder="here output"
            type="string"
            onChange={onChange}
          />
          <label htmlFor="output"> [J•s]</label>
        </div>
      </div>
      <div className="custom-btn-container">
        <button className="custom-btn btn-flip" onClick={onReset}>
          <span>Click me!</span>
          <span>Reset!</span>
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

export default H;
