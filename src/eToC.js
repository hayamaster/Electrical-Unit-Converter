import {useState, useEffect} from 'react';
import './Converter.css';

function numViewer(num) {
    if (num.toString().length > 5){
        const numExp = Number.parseFloat(num).toExponential(3);
        let eTo10 = '';
        if (numExp.toString()[0] === '-') {
            eTo10 = numExp.toString().substring(7);
            if (eTo10[0] === '+') eTo10 = eTo10.substring(1);
            return numExp.substring(0, 6) + '×10^(' + eTo10 + ')';
        }
        else {
            eTo10 = numExp.toString().substring(6)
            if (eTo10[0] === '+') eTo10 = eTo10.substring(1);
            return numExp.substring(0, 5) + '×10^(' + eTo10 + ")";
        }
    }
    return num;
}

function ElectronToCoulmb(){
    const [amount, setAmount] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [list, setList] = useState([]);
    const onChange = (event) => setAmount(event.target.value);
    const onFlip = () => {
        setAmount('');
        setFlipped((current) => !current);
    }
    const onSave = () => {
        setList(currentArray => (
            [flipped ? numViewer(amount / 1.602 / (10**-19)) : numViewer(amount * 1.602 * (10**-19)), ...currentArray]
        ))
        if (list.length > 4) list.splice(4) //restrict size of list[] for visualization
    }
    const reset = () => setList([]);
    return (
        <div>
            <h3 className='title'>Electron[e] ↔︎ Quantity of electric charge[C]</h3>
            <h4 className='formula'>1[e] = 1.602 × 10^(-19)[C]</h4>
            <div className='input'>
                <label htmlFor='electron'>Electron: </label>
                <input 
                    value={flipped ? numViewer(amount / 1.602 / (10**-19)) : amount}
                    id='electron'
                    placeholder='Number of Electron'
                    type={flipped ? "string" : "number"}
                    onChange={onChange}
                    disabled={flipped}
                />
                <label htmlFor='electron'>  [e]</label>
            </div>
            <div className='input'>
                <label htmlFor='coulomb'>Coulomb: </label>
                <input 
                    value={flipped ? amount : numViewer(amount * 1.602 * (10**-19))}
                    id='coulomb'
                    placeholder='Quantity of electric charge'
                    type={flipped ? "number" : "string"}
                    onChange={onChange}
                    disabled={!flipped}
                />
                <label htmlFor='coulomb'>  [C]</label>
            </div>
            <button className='custom-btn btn-flip' onClick={onFlip}><span>Click me!</span><span>Flip!</span></button>
            <button className='custom-btn btn-save' onClick={onSave}><span>Save</span></button>
            <div className='history-container'>
                <p className='history'>History</p>
                <div className='mac-btn'>
                    <div className='btn close-btn'></div>
                    <div className='btn min-btn'></div>
                    <div className='btn max-btn'></div>
                </div>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ElectronToCoulmb;