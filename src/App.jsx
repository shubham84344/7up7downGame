import React, { useState } from 'react';
import './App.scss';

function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [result, setResult] = useState('');

  const handleGuess = (guess) => {
    const d1 = Math.ceil(Math.random() * 6);
    const d2 = Math.ceil(Math.random() * 6);
    const total = d1 + d2;

    setDice1(d1);
    setDice2(d2);

    const actual = total < 7 ? 'down' : total === 7 ? '7' : 'up';
    const isCorrect = guess === actual;

    setResult(`Your guess '${guess}' is ${isCorrect ? '✅ correct' : '❌ wrong'}`);

  };

  return (
    <div className="dice-game">
      <h1>7 Up Down</h1>
      <div className="dice-game__dice">
        <div>{dice1}</div>
        <div>{dice2}</div>
      </div>
      <div className="dice-game__buttons">
        <button onClick={() => handleGuess('down')}>7 Down</button>
        <button onClick={() => handleGuess('7')}>7</button>
        <button onClick={() => handleGuess('up')}>7 Up</button>
      </div>
      {result && <p className="dice-game__result">{result}</p>}
    </div>
  );
}

export default App;
