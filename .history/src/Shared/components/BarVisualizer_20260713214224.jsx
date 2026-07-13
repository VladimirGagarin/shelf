import { useState, useEffect, useRef } from 'react';
import './BarVisualizer.css';

export default function BarVisualizer() {
  const [data, setData] = useState([20, 40, 60, 80, 100, 70, 50, 30]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentMethod, setCurrentMethod] = useState('Bubble Sort');
  const [speed, setSpeed] = useState(500);
  const [isPaused, setIsPaused] = useState(false);
  const [steps, setSteps] = useState(0);
  const [arrayAccesses, setArrayAccesses] = useState(0);
  
  const timerRef = useRef(null);
  const isMounted = useRef(true);

  const methods = [
    'Bubble Sort', 
    'Quick Sort', 
    'Merge Sort', 
    'Heap Sort', 
    'Selection Sort',
    'Insertion Sort'
  ];

  // Cleanup on unmount
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Generate random data
  const generateRandomData = () => {
    if (isSorting) return;
    const newData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 90) + 10);
    setData(newData);
    setSortedIndices([]);
    setHighlightedIndex(null);
    setComparingIndices([]);
    setSwappingIndices([]);
    setSteps(0);
    setArrayAccesses(0);
  };

  // Reset visualization
  const resetVisualization = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsSorting(false);
    setIsPaused(false);
    setSortedIndices([]);
    setHighlightedIndex(null);
    setComparingIndices([]);
    setSwappingIndices([]);
    setSteps(0);
    setArrayAccesses(0);
    generateRandomData();
  };

  // Sleep function for animation timing
  const sleep = (ms) => {
    return new Promise(resolve => {
      timerRef.current = setTimeout(resolve, ms);
    });
  };

  // ========================================
  // SORTING ALGORITHMS
  // ========================================

  // Bubble Sort
  const bubbleSort = async () => {
    const arr = [...data];
    const n = arr.length;
    let newSorted = [];
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isMounted.current) return;
        
        // Check if paused
        while (isPaused) {
          await sleep(100);
          if (!isMounted.current) return;
        }

        setComparingIndices([j, j + 1]);
        setHighlightedIndex(j);
        setSteps(prev => prev + 1);
        setArrayAccesses(prev => prev + 2);
        
        await sleep(speed);

        if (arr[j] > arr[j + 1]) {
          // Swap
          setSwappingIndices([j, j + 1]);
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setData([...arr]);
          await sleep(speed / 2);
          setSwappingIndices([]);
        }
      }
      newSorted.push(n - i - 1);
      setSortedIndices([...newSorted]);
    }
    newSorted.push(0);
    setSortedIndices([...newSorted]);
    setHighlightedIndex(null);
    setComparingIndices([]);
    setIsSorting(false);
  };

  // Selection Sort
  const selectionSort = async () => {
    const arr = [...data];
    const n = arr.length;
    let newSorted = [];

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      
      for (let j = i + 1; j < n; j++) {
        if (!isMounted.current) return;
        
        while (isPaused) {
          await sleep(100);
          if (!isMounted.current) return;
        }

        setComparingIndices([minIdx, j]);
        setHighlightedIndex(j);
        setSteps(prev => prev + 1);
        setArrayAccesses(prev => prev + 2);
        await sleep(speed);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        setSwappingIndices([i, minIdx]);
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setData([...arr]);
        await sleep(speed / 2);
        setSwappingIndices([]);
      }
      
      newSorted.push(i);
      setSortedIndices([...newSorted]);
    }
    newSorted.push(n - 1);
    setSortedIndices([...newSorted]);
    setHighlightedIndex(null);
    setComparingIndices([]);
    setIsSorting(false);
  };

  // Insertion Sort
  const insertionSort = async () => {
    const arr = [...data];
    const n = arr.length;
    let newSorted = [0];

    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        if (!isMounted.current) return;
        
        while (isPaused) {
          await sleep(100);
          if (!isMounted.current) return;
        }

        setComparingIndices([j, j + 1]);
        setHighlightedIndex(j);
        setSteps(prev => prev + 1);
        setArrayAccesses(prev => prev + 2);
        await sleep(speed);

        arr[j + 1] = arr[j];
        setData([...arr]);
        j--;
      }
      arr[j + 1] = key;
      setData([...arr]);
      newSorted.push(i);
      setSortedIndices([...newSorted]);
    }
    setHighlightedIndex(null);
    setComparingIndices([]);
    setIsSorting(false);
  };

  // Quick Sort
  const quickSort = async () => {
    const arr = [...data];
    await quickSortHelper(arr, 0, arr.length - 1);
    setSortedIndices(data.map((_, i) => i));
    setHighlightedIndex(null);
    setComparingIndices([]);
    setIsSorting(false);
  };

  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (!isMounted.current) return i;
      
      while (isPaused) {
        await sleep(100);
        if (!isMounted.current) return i;
      }

      setComparingIndices([j, high]);
      setHighlightedIndex(j);
      setSteps(prev => prev + 1);
      setArrayAccesses(prev => prev + 2);
      await sleep(speed);

      if (arr[j] < pivot) {
        i++;
        setSwappingIndices([i, j]);
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setData([...arr]);
        await sleep(speed / 2);
        setSwappingIndices([]);
      }
    }
    
    setSwappingIndices([i + 1, high]);
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setData([...arr]);
    await sleep(speed / 2);
    setSwappingIndices([]);
    
    return i + 1;
  };

  // Merge Sort
  const mergeSort = async () => {
    const arr = [...data];
    await mergeSortHelper(arr, 0, arr.length - 1);
    setSortedIndices(data.map((_, i) => i));
    setHighlightedIndex(null);
    setComparingIndices([]);
    setIsSorting(false);
  };

  const mergeSortHelper = async (arr, l, r) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await mergeSortHelper(arr, l, m);
      await mergeSortHelper(arr, m + 1, r);
      await merge(arr, l, m, r);
    }
  };

  const merge = async (arr, l, m, r) => {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = arr.slice(l, m + 1);
    const R = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
      if (!isMounted.current) return;
      
      while (isPaused) {
        await sleep(100);
        if (!isMounted.current) return;
      }

      setComparingIndices([l + i, m + 1 + j]);
      setHighlightedIndex(k);
      setSteps(prev => prev + 1);
      setArrayAccesses(prev => prev + 2);
      await sleep(speed);

      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      setData([...arr]);
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
      setData([...arr]);
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
      setData([...arr]);
    }
  };

  // Start sorting based on selected method
  const startSorting = async () => {
    if (isSorting) return;
    setIsSorting(true);
    setSortedIndices([]);
    setComparingIndices([]);
    setSwappingIndices([]);
    setSteps(0);
    setArrayAccesses(0);

    switch (currentMethod) {
      case 'Bubble Sort':
        await bubbleSort();
        break;
      case 'Selection Sort':
        await selectionSort();
        break;
      case 'Insertion Sort':
        await insertionSort();
        break;
      case 'Quick Sort':
        await quickSort();
        break;
      case 'Merge Sort':
        await mergeSort();
        break;
      default:
        setIsSorting(false);
    }
  };

  // Toggle pause
  const togglePause = () => {
    if (isSorting) {
      setIsPaused(!isPaused);
    }
  };

  // Get bar color based on state
  const getBarColor = (index) => {
    if (sortedIndices.includes(index)) {
      return 'var(--color-success)';
    }
    if (swappingIndices.includes(index)) {
      return 'var(--color-warning)';
    }
    if (comparingIndices.includes(index)) {
      return 'var(--color-primary)';
    }
    if (highlightedIndex === index) {
      return 'var(--color-accent)';
    }
    return 'var(--color-text-secondary)';
  };

  return (
    <div className="bar-visualizer">
      <div className="visualizer-controls">
        <div className="controls-top">
          <div className="method-selector">
            <label htmlFor="method">Algorithm:</label>
            <select 
              id="method"
              value={currentMethod} 
              onChange={(e) => setCurrentMethod(e.target.value)}
              disabled={isSorting}
            >
              {methods.map((method) => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>

          <div className="speed-control">
            <label htmlFor="speed">Speed:</label>
            <input
              id="speed"
              type="range"
              min="100"
              max="1000"
              step="50"
              value={speed}
              onChange={(e) => setSpeed(parseInt(e.target.value))}
              disabled={isSorting}
            />
            <span>{speed}ms</span>
          </div>
        </div>

        <div className="controls-bottom">
          <button 
            onClick={generateRandomData} 
            disabled={isSorting}
            className="btn-generate"
          >
            🔄 Generate
          </button>
          <button 
            onClick={startSorting} 
            disabled={isSorting}
            className="btn-start"
          >
            {isSorting ? 'Sorting...' : '▶ Start'}
          </button>
          <button 
            onClick={togglePause} 
            disabled={!isSorting}
            className={`btn-pause ${isPaused ? 'paused' : ''}`}
          >
            {isPaused ? '▶ Resume' : '⏸ Pause'}
          </button>
          <button 
            onClick={resetVisualization} 
            className="btn-reset"
          >
            ↺ Reset
          </button>
        </div>
      </div>

      <div className="visualizer-stats">
        <div className="stat">
          <span className="stat-label">Steps:</span>
          <span className="stat-value">{steps}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Array Accesses:</span>
          <span className="stat-value">{arrayAccesses}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Status:</span>
          <span className="stat-value">
            {isSorting ? (isPaused ? '⏸ Paused' : '⏳ Sorting...') : '✅ Idle'}
          </span>
        </div>
      </div>

      <div className="bars-container">
        {data.map((value, index) => (
          <div
            key={index}
            className="bar-wrapper"
            style={{
              height: `${value}%`,
              minHeight: '20px',
              transition: 'all 0.3s ease'
            }}
          >
            <div
              className="bar"
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: getBarColor(index),
                borderRadius: '4px 4px 0 0',
                transition: 'all 0.3s ease',
                position: 'relative',
                minHeight: '20px'
              }}
            >
              <span className="bar-value">{value}</span>
            </div>
            <span className="bar-label">{index}</span>
          </div>
        ))}
      </div>

      <div className="visualizer-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ background: 'var(--color-primary)' }}></span>
          <span>Comparing</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: 'var(--color-warning)' }}></span>
          <span>Swapping</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: 'var(--color-success)' }}></span>
          <span>Sorted</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: 'var(--color-accent)' }}></span>
          <span>Highlighted</span>
        </div>
      </div>
    </div>
  );
}