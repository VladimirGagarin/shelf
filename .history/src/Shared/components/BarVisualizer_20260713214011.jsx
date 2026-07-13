import { useState, useEffect } from 'react';

export default function BarVisualizer() { 
    const [highlitedIndex, setHighlightedIndex] = useState(null);
    
    const data = [20, 40, 60, 80, 100, 70, 50, 30];
    const methods

    return (
      <div className="bar-visualizer">
        {data.map((value, index) => (
          <div
            key={index}
            className={`bar ${index === highlitedIndex ? "highlighted" : ""}`}
            style={{ height: `${value}%` }}
            onClick={() => setHighlightedIndex(index)}
          />
        ))}
      </div>
    );
}