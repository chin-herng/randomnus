// SpinWheel.js

import React, { useState, useRef } from 'react';
import './SpinWheel.css';

const SpinWheel = () => {
  const wheelRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const wheelItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const startSpin = () => {
    if (!isSpinning) {
      const randomDegrees = Math.floor(Math.random() * 360) + 360 * 5; // Spin at least 5 times
      wheelRef.current.style.transition = 'transform 3s ease-out';
      wheelRef.current.style.transform = `rotate(${randomDegrees}deg)`;
      setIsSpinning(true);

      // Simulate a delay for the spin to finish (adjust timing based on your needs)
      setTimeout(() => {
        const selectedSegment = Math.floor((randomDegrees % 360) / (360 / wheelItems.length));
        setSelectedItem(wheelItems[selectedSegment]);
        setIsSpinning(false);
        wheelRef.current.style.transition = 'none';
        wheelRef.current.style.transform = 'rotate(0deg)';
      }, 3000); // 3 seconds
    }
  };

  return (
    <div className="spin-wheel-container">
      <div className={`wheel ${isSpinning ? 'spinning' : ''}`} ref={wheelRef}>
        {wheelItems.map((item, index) => (
          <div key={index} className="wheel-segment" style={{ transform: `rotate(${index * (360 / wheelItems.length)}deg)` }}>
            {item}
          </div>
        ))}
      </div>
      <button className="spin-button" onClick={startSpin} disabled={isSpinning}>
        Spin the Wheel
      </button>
      {selectedItem && <p>Selected Item: {selectedItem}</p>}
    </div>
  );
};

export default SpinWheel;
