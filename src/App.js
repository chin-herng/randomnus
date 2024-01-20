import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import PLACES from './assets/place';
import { Wheel } from 'react-custom-roulette'

// const data = [
//   { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
//   { option: '1', style: { backgroundColor: 'white', textColor: 'black' } },
//   { option: '2' },
// ]
const backgroundColors = ['red', 'orange', 'yellow', '#8ae703', '#00a5ff', '#d896ff'];

const data = PLACES.map((elem, idx) => (
  {
    option: elem, style: { backgroundColor: backgroundColors[idx % backgroundColors.length], textColor: 'black' }
  }
));

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <div className = "Main">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        spinDuration={0.1}
        fontSize={15}

        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />
      <button className="big-button" onClick={handleSpinClick}>
        SPIN
      </button>
    </div>
  )
}

export default App;
