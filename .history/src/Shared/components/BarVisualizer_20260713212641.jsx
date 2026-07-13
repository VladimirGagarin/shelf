import { useState } from 'react';

export default function BarVisualizer({ data }) { 
    const [highlitedIndex, setHighlightedIndex] = useState(null);

    return (
        <div className="bar-visualizer">
            {data.map((value, index) => (
}