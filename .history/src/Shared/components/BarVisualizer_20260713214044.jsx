import { useState, } from 'react';
import './BarVisualizer.css';

export default function BarVisualizer() { 
    const [highlitedIndex, setHighlightedIndex] = useState(null);
    
    const data = [20, 40, 60, 80, 100, 70, 50, 30];
    const methods = ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Heap Sort', 'Radix Sort', 'Counting Sort', 'Bucket Sort', 'Shell Sort'];

    return (
      <div className="bar-visualizer">
        
      </div>
    );
}