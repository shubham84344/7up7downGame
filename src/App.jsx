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

    const actual = total < 7 ? 'Down' : total === 7 ? '7' : 'Up';
    const isCorrect = guess === actual;

    setResult(`Your guess ${guess} is ${isCorrect ? '✅ correct' : '❌ wrong'}`);

  };

  return (
    <div className="dice-game">
      <h1>7 Up Down</h1>
      <div className="dice-game__dice">
        <div>{String.fromCharCode(0x267F + dice1)}</div>
        <div>{String.fromCharCode(0x267F + dice2)}</div>
      </div>
      <div className="dice-game__buttons">
        <button onClick={() => handleGuess('Down')}>7 Down</button>
        <button onClick={() => handleGuess('7')}>7</button>
        <button onClick={() => handleGuess('Up')}>7 Up</button>
      </div>
      {result && <p className="dice-game__result">{result}</p>}
    </div>
  );
}

export default App;
