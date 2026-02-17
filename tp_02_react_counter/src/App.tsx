import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counter from './pages/Counter';
import MouseFollower from './pages/MouseFollower';
import Library from './pages/Library';
import Tasks from './pages/Tasks';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <nav style={{ 
        padding: '20px', 
        backgroundColor: '#f0f0f0', 
        display: 'flex', 
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#3498db', fontSize: '18px' }}>
          Compteur
        </Link>
        <Link to="/mouse" style={{ textDecoration: 'none', color: '#3498db', fontSize: '18px' }}>
          Suiveur de Souris
        </Link>
        <Link to="/library" style={{ textDecoration: 'none', color: '#3498db', fontSize: '18px' }}>
          Bibliothèque
        </Link>
        <Link to="/tasks" style={{ textDecoration: 'none', color: '#3498db', fontSize: '18px' }}>
          Tâches
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/mouse" element={<MouseFollower />} />
        <Route path="/library" element={<Library />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
