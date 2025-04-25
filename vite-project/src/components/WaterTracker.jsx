import React, { useState } from 'react';
import "../styles/waterstyle.css";

const WaterTracker = () => {
  const totalCups = 8;
  const cupVolume = 250;
  const goalLiters = 2;

  const [cupsFilled, setCupsFilled] = useState(0);

  const handleClick = (idx) => {
    if (cupsFilled === idx + 1) {
      setCupsFilled(idx);
    } else {
      setCupsFilled(idx + 1);
    }
  };

  const percentage = (cupsFilled / totalCups) * 100;
  const litersRemaining = goalLiters - (cupsFilled * cupVolume / 1000);

  return (
    <div className="container">
      <h1>Drink Water</h1>
      <h3>Goal: {goalLiters} Liters</h3>

      <div className="cup">
        <div
          className="percentage"
          style={{
            visibility: cupsFilled === 0 ? 'hidden' : 'visible',
            height: `${(percentage / 100) * 330}px`,
          }}
        >
          {percentage > 0 ? `${percentage}%` : ''}
        </div>

        <div
          className="remained"
          style={{
            visibility: cupsFilled === totalCups ? 'hidden' : 'visible',
            height: cupsFilled === totalCups ? 0 : 'auto',
          }}
        >
          <span>{litersRemaining.toFixed(2)}L</span>
          <small>Remained</small>
        </div>
      </div>

      <p className="text">Select how many glasses of water you have drank</p>

      <div className="cups">
        {[...Array(totalCups)].map((_, idx) => (
          <div
            key={idx}
            className={`cup cup-small ${idx < cupsFilled ? 'full' : ''}`}
            onClick={() => handleClick(idx)}
          >
            250 ml
          </div>
        ))}
      </div>

      <footer>
        <p>Made with ❤️ by Nihal</p>
      </footer>
    </div>
  );
};

export default WaterTracker;
