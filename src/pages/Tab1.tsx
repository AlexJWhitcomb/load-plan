import React, { useState } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [textLines, setTextLines] = useState<string[]>(['Line 1', 'Line 2', 'Line 3']);

  const handleObjectClick = (objectId: number) => {
  };

  const handleStartTimer = () => {
  };

  const handleStopTimer = () => {
  };

  const handleTextChange = (lineIndex: number, newText: string) => {
    setTextLines((prevLines) =>
      prevLines.map((line, index) => (index === lineIndex - 1 ? newText : line))
    );
  };

  return (
    <div className="tab1-container">
      {/* Container One */}
      <div className="objects-container">
        <div className="object-item" onClick={() => handleObjectClick(1)}>Object 1</div>
        <div className="object-item" onClick={() => handleObjectClick(2)}>Object 2</div>
        <div className="object-item" onClick={() => handleObjectClick(3)}>Object 3</div>
        <div className="object-item" onClick={() => handleObjectClick(4)}>Object 4</div>
        <div className="object-item" onClick={() => handleObjectClick(5)}>Object 5</div>
        <div className="object-item" onClick={() => handleObjectClick(6)}>Object 6</div>
      </div>

      {/* Container Two */}
      <div className="timer-container">
        <h1>T/O Timer</h1>
        <div>00:00</div>
        <div className='start-stop'>
        <button onClick={handleStartTimer}>Start</button>
        <button onClick={handleStopTimer}>Stop</button>
        </div>
      </div>

      {/* Container Three */}
      <div className="text-list-container">
        {textLines.map((line, index) => (
          <div key={index} className="text-line-item">
            <input
              type="text"
              value={line}
              onChange={(e) => handleTextChange(index + 1, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab1;
