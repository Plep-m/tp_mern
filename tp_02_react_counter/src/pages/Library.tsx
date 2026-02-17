import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';

interface Book {
  id: number;
  title: string;
  author: string;
}

function Library(): React.JSX.Element {
  const [books, setBooks]: [Book[], React.Dispatch<React.SetStateAction<Book[]>>] = useState<Book[]>([]);
  const [newTitle, setNewTitle]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');
  const [newAuthor, setNewAuthor]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');

  useEffect(() => {
    console.log('Library mounted - fetching books');
    fetchBooks();
  }, []);

  const fetchBooks = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3001/api/books');
      const data: Book[] = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async (): Promise<void> => {
    if (!newTitle || !newAuthor) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle, author: newAuthor }),
      });

      const newBook: Book = await response.json();
      setBooks([...books, newBook]);
      setNewTitle('');
      setNewAuthor('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const deleteBook = async (id: number): Promise<void> => {
    try {
      await fetch(`http://localhost:3001/api/books/${id}`, {
        method: 'DELETE',
      });
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Arial' }}>
      <h1>Ma Bibliothèque</h1>

      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '20px', 
        margin: '20px auto',
        maxWidth: '500px',
        borderRadius: '8px'
      }}>
        <h3>Ajouter un Livre</h3>
        <input
          type="text"
          placeholder="Titre du livre"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ 
            padding: '10px', 
            margin: '5px',
            width: '90%',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          style={{ 
            padding: '10px', 
            margin: '5px',
            width: '90%',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          onClick={addBook}
          style={{ 
            padding: '10px 20px',
            marginTop: '10px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Ajouter
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '10px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {books.map((book) => (
          <BookCard 
            key={book.id}
            title={book.title}
            author={book.author}
            onDelete={() => deleteBook(book.id)}
          />
        ))}
      </div>

      {books.length === 0 && (
        <p style={{ color: '#999' }}>Aucun livre dans la bibliothèque. Ajoutez-en un !</p>
      )}
    </div>
  );
}

export default Library;
