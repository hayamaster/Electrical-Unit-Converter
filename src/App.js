import {useState, useEffect} from 'react';
import styles from './App.module.css';
import Converter from './Converter';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Converter of Electrical Units</h1>
      <div className={styles.container_logo}>
        <h3 className={styles.h3}>Gachon Univ. Electrical Engineering</h3>
        <img className={styles.logo} alt='electricity_logo' src='flash.png'/>
        <h4 className={styles.h4}>Created by. JUHA</h4>
      </div>
      <Converter />
    </div>
  );
}

export default App;
