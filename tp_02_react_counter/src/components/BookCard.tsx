interface BookProps {
  title: string;
  author: string;
  onDelete?: () => void;
}

const BookCard = ({ title, author, onDelete }: BookProps): React.JSX.Element => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{title}</h3>
      <p style={{ margin: '0', color: '#666' }}>Par : {author}</p>
      {onDelete && (
        <button 
          onClick={onDelete}
          style={{ 
            marginTop: '10px',
            padding: '5px 10px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Supprimer
        </button>
      )}
    </div>
  );
};

export default BookCard;
