import './SpinWheel.css';
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import FOOD from '../assets/food';
import { Link } from 'react-router-dom';

function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [spun, setSpun] = useState(false);

  const backgroundColors = ['#caa07f', '#e1af87', '#e6ba92', '#eed5b9', '#f6dfc5'];
  const data = FOOD.map((elem, idx) => (
    {
      option: elem, style: { backgroundColor: backgroundColors[idx % backgroundColors.length], textColor: 'black' }
    }
  ));

  const [spinWheelData, setSpinWheelData] = useState(data);

  const handleSpinClick = () => {
    setSpun(true);
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)

  }
  return (
    <>
      <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={spinWheelData}
      spinDuration={0.1}
      fontSize={20}

      onStopSpinning={() => {
        setMustSpin(false)
      }}
      />
      <button className="spin-button button" onClick={handleSpinClick}>
        {spun ? 'SPIN AGAIN' : 'SPIN'}
      </button><br></br>
      <Link to='/'>
        {spun ? <button className="proceed-button button">HOME</button> : null}
      </Link>
    </>
  );
}

export default SpinWheel;