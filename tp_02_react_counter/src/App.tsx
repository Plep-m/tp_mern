import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counter from './pages/Counter';
import MouseFollower from './pages/MouseFollower';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <nav style={{ 
        padding: '20px', 
        backgroundColor: '#f0f0f0', 
        display: 'flex', 
        gap: '20px',
        justifyContent: 'center'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#3498db', fontSize: '18px' }}>
          Compteur
        </Link>
        <Link to="/mouse" style={{ textDecoration: 'none', color: '#3498db', fontSize: '18px' }}>
          Suiveur de Souris
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/mouse" element={<MouseFollower />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
