import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

function MouseFollower(): React.JSX.Element {
  const [position, setPosition]: [MousePosition, React.Dispatch<React.SetStateAction<MousePosition>>] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    console.log('MouseFollower mounted');

    const handleMouseMove = (event: MouseEvent): void => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log('MouseFollower cleanup');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Suiveur de Souris</h1>
      
      <div style={{ marginTop: '30px' }}>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>Position de la souris :</p>
        
        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: 'bold'
        }}>
          <div style={{ color: '#e74c3c' }}>
            X: {position.x}
          </div>
          <div style={{ color: '#3498db' }}>
            Y: {position.y}
          </div>
        </div>
      </div>

      <div 
        style={{
          position: 'fixed',
          top: position.y - 10,
          left: position.x - 10,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#2ecc71',
          border: '2px solid #27ae60',
          pointerEvents: 'none',
          transition: 'all 0.1s ease'
        }}
      />
    </div>
  );
}

export default MouseFollower;
