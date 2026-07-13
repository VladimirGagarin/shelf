import { useState, useEffect } from 'react';

export default function BarVisualizer({ data, index }) { 
    const [highlitedIndex, setHighlightedIndex] = useState(null);
    
    useEffect(() => {
        setHighlightedIndex(index);
    }, [index]);

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