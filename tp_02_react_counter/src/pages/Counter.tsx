import { useEffect, useState } from 'react';

function Counter(): React.JSX.Element {
  const [count, setCount]: [number, React.Dispatch<React.SetStateAction<number>>] = useState<number>(0);

  useEffect(() => {
    console.log('Counter mounted')
  }, [])
  
  const increment = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Compteur Interactif</h1>
      
      <p style={{
        fontSize: '40px',
        fontWeight: 'bold',
        color: count < 0 ? 'red' : 'black'
      }}>
        {count}
      </p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={decrement} style={{ padding: '10px 20px' }}>
          - Diminuer
        </button>
        
        <button onClick={increment} style={{ padding: '10px 20px' }}>
          + Augmenter
        </button>
      </div>
    </div>
  );
}

export default Counter;
