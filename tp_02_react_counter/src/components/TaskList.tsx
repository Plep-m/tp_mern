import { useState, useEffect } from 'react';

interface Task {
  id: number;
  label: string;
  isDone: boolean;
}

export default function TaskList(): React.JSX.Element {
  const [tasks, setTasks]: [Task[], React.Dispatch<React.SetStateAction<Task[]>>] = useState<Task[]>([]);
  const [isLoading, setIsLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(true);
  const [error, setError]: [string | null, React.Dispatch<React.SetStateAction<string | null>>] = useState<string | null>(null);

  useEffect(() => {
    console.log('TaskList mounted - fetching tasks');
    fetchTasks();
  }, []);

  const fetchTasks = async (): Promise<void> => {
    try {
      setError(null);
      setIsLoading(true);
      
      const response = await fetch('http://localhost:3001/api/tasks');
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data: Task[] = await response.json();
      setTasks(data);
      
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Une erreur inconnue est survenue');
      }
      console.error('Erreur lors de la récupération des tâches:', err);
      
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTask = async (id: number): Promise<void> => {
    try {
      const taskToUpdate = tasks.find(t => t.id === id);
      if (!taskToUpdate) return;

      const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isDone: !taskToUpdate.isDone })
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const updatedTask: Task = await response.json();
      setTasks(tasks.map(t => t.id === id ? updatedTask : t));
      
    } catch (err) {
      console.error('Erreur lors de la mise à jour:', err);
      alert('Erreur lors de la mise à jour de la tâche');
    }
  };

  const addTask = async (label: string): Promise<void> => {
    if (!label.trim()) return;

    try {
      const response = await fetch('http://localhost:3001/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ label })
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const newTask: Task = await response.json();
      setTasks([...tasks, newTask]);
      
    } catch (err) {
      console.error('Erreur lors de l\'ajout:', err);
      alert('Erreur lors de l\'ajout de la tâche');
    }
  };

  // --- RENDU CONDITIONNEL ---
  
  // Cas 1 : Ça charge
  if (isLoading) {
    return (
      <div style={{ 
        textAlign: 'center', 
        marginTop: '50px', 
        fontSize: '20px',
        color: '#3498db'
      }}>
        <div style={{ 
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <p>Chargement des tâches...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Cas 2 : Il y a une erreur
  if (error) {
    return (
      <div style={{ 
        textAlign: 'center', 
        marginTop: '50px',
        fontFamily: 'Arial'
      }}>
        <div style={{
          backgroundColor: '#ffe6e6',
          border: '2px solid #e74c3c',
          borderRadius: '8px',
          padding: '20px',
          margin: '20px auto',
          maxWidth: '500px'
        }}>
          <h2 style={{ color: '#e74c3c', margin: '0 0 10px 0' }}>❌ Erreur</h2>
          <p style={{ margin: '0', color: '#333' }}>{error}</p>
          <button 
            onClick={fetchTasks}
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  // Cas 3 : Tout va bien, on affiche la liste
  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '30px',
      fontFamily: 'Arial'
    }}>
      <h1>📝 Liste des Tâches</h1>

      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '500px',
        borderRadius: '8px'
      }}>
        <input
          type="text"
          placeholder="Nouvelle tâche..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTask(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
          style={{
            padding: '10px',
            width: '90%',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <p style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>
          Appuyez sur Entrée pour ajouter
        </p>
      </div>

      {tasks.length === 0 ? (
        <p style={{ color: '#999', fontSize: '18px' }}>
          Aucune tâche. Ajoutez-en une ! 🎯
        </p>
      ) : (
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {tasks.map(t => (
            <li 
              key={t.id}
              onClick={() => toggleTask(t.id)}
              style={{
                backgroundColor: t.isDone ? '#d5f4e6' : '#fff',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                margin: '10px 0',
                cursor: 'pointer',
                textDecoration: t.isDone ? 'line-through' : 'none',
                color: t.isDone ? '#888' : '#333',
                fontSize: '18px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>
                {t.isDone ? '✅' : '⭕'} {t.label}
              </span>
              <span style={{ fontSize: '12px', color: '#999' }}>
                Cliquez pour {t.isDone ? 'réactiver' : 'terminer'}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: '30px' }}>
        <p style={{ color: '#666' }}>
          ✅ Terminées: {tasks.filter(t => t.isDone).length} / {tasks.length}
        </p>
      </div>
    </div>
  );
}
