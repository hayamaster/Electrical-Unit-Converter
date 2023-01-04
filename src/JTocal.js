import {useState, useEffect} from 'react';

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

function JouleToCalorie(){
    const [amount, setAmount] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [list, setList] = useState([]);
    const onChange = (event) => setAmount(event.target.value);
    const onFlip = () => {
        setAmount('');
        setFlipped((current) => !current);
    }
    const onSave = () => {
        setList((currentArray) => (
            [flipped ? numViewer(amount * 4.1868) : numViewer(amount * 0.238846), ...currentArray]
        ))
        if(list.length > 4) list.splice(4)
    }
    const reset = () => setList([]);
    
    return (
        <div>
            <h3>Joule[J] ↔︎ Calorie[cal]</h3>
            <h4>1[J] = 0.2388[cal]</h4>
            <div>
                <label htmlFor='joule'>Joule: </label>
                <input
                    value={flipped ? numViewer(amount * 4.1868) : amount}
                    id='joule'
                    placeholder='Joule'
                    type={flipped ? 'string' : 'number'}
                    onChange={onChange}
                    disabled={flipped}
                />
            </div>
            <div>
                <label htmlFor='calorie'>Calorie: </label>
                <input
                    value={flipped ? amount : numViewer(amount * 0.238846)}
                    id='calorie'
                    placeholder='Calorie'
                    type={flipped ? 'number' : 'string'}
                    onChange={onChange}
                    disabled={!flipped}
                />
            </div>
            <button onClick={onFlip}>{flipped ? "Return Back" : "Filp"}</button>
            <button onClick={onSave}>Save</button>
            <div>
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

export default JouleToCalorie;