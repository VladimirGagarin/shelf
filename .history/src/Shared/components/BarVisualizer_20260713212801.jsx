import { useState, useEffect } from 'react';

export default function BarVisualizer({ data, index }) { 
    const [highlitedIndex, setHighlightedIndex] = useState(null);
    
    return (
        <div className="bar-visualizer">
            {data.map((value, index) => (
                <div
                    key={index}
                    className={`bar ${index === highlightedIndex ? 'highlighted' : ''}`}
                    style={{ height: `${value}%` }}
                    onClick={() => setHighlightedIndex(index)}
                />
            ))}
        </div>
    );
}