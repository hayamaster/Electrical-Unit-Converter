import {useState, useEffect} from 'react';
import ElectronToCoulmb from './eToC';

function Converter() {
    const [index, setIndex] = useState('init');
    const onSelect = (event) => setIndex(event.target.value);
    return (
        <div>
            <select value={index} onChange={onSelect}>
                <option value='init'>Select your units</option>
                <option value='1'>Electron & Coulomb</option>
                <option value='2'>J & kcal</option>
            </select>
            <hr />
            {index === 'init' ? "Please Select your units" : null}
            {index === '1' ? <ElectronToCoulmb/> : null}

        </div>
    );
}

export default Converter;