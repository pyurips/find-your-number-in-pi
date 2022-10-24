import { useState } from 'react';
import style from './App.module.css';
import searchSVG from './images/search-svgrepo-com.svg';
import displayNumbers from './script.js';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [digits, setDigits] = useState();
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <h1>Palíndromo primo dentro do PI</h1>
      <div id={style.container}>
        <p>Digite abaixo o número</p>
        <input type='text' spellCheck='false' value={inputValue} onChange={e=>setInputValue(e.target.value)} />
        {buttonEnabled && <button type='button' onClick={(e) => {
          if (Number.isInteger(parseInt(inputValue))) {
            setDigits(displayNumbers(inputValue));
            setError(false);
            setButtonEnabled(false);
          } else {
            setError(true);
          }
        }}>
          <img src={searchSVG}></img>
        </button>}
      </div>
      <p style={{marginLeft: '10px'}}>Recarregue a página para reiniciar a função geradora!</p>
      <div id={style.piContainer}>
        {error && <p>Digite um número válido!</p>}
        {digits}
      </div>
    </div>
  );
}

export default App;
