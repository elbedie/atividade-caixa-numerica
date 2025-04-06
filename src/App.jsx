import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState(Array.from({ length: 9 }, (_, index) => index.toString()));

  const handleClick = (index) => {
    setValues((prevValues) =>
      prevValues.map((value, i) => (i === index ? 'X' : value))
    );
  };

  return (
    <div className="main-container">
      <div className="grid-container">
        {values.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="grid-item"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;