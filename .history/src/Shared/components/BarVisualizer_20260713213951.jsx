import { useState, useEffect } from 'react';

export default function BarVisualizer() { 
    const [highlitedIndex, setHighlightedIndex] = useState(null);
    
    

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