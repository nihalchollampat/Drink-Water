import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const totalCups = 8
  const cupVolume = 250 // ml

  const [fullCups, setFullCups] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('cups')
    if (saved) {
      setFullCups(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cups', JSON.stringify(fullCups))
  }, [fullCups])

  const handleClick = (idx) => {
    if (idx === fullCups - 1) {
      setFullCups(idx)
    } else {
      setFullCups(idx + 1)
    }
  }

  const percentage = (fullCups / totalCups) * 100
  const litersLeft = 2 - (fullCups * cupVolume / 1000)

  return (
    <div className="app">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div className="cup">
        {percentage > 0 && (
          <div
            className="percentage"
            style={{ height: `${percentage * 3.3}px` }}
          >
            {percentage}%
          </div>
        )}
        {percentage < 100 && (
          <div className="remained">
            <span>{litersLeft}L</span>
            <small>Remained</small>
          </div>
        )}
      </div>

      <p className="text">Select how many glasses of water that you have drank</p>

      <div className="cups">
        {Array.from({ length: totalCups }).map((_, idx) => (
          <div
            key={idx}
            className={`cup cup-small ${idx < fullCups ? 'full' : ''}`}
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
  )
}

export default App
