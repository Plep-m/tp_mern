import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());


interface Book {
  id: number;
  title: string;
  author: string;
}

let books: Book[] = [
  { id: 1, title: 'Express pour les nuls', author: 'Node JS' }
];

app.get('/', (req: Request, res: Response): void => {
  res.send('API Library v1.0 is running...');
});

app.get('/api/books', (req: Request, res: Response): void => {
  res.json(books);
});


app.post('/api/books', (req: Request, res: Response): void => {
  const { title, author } = req.body;
  
  const newBook: Book = {
    id: Date.now(),
    title,
    author
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

interface BookParams {
  id: string;
}

app.delete('/api/books/:id', (req: Request<BookParams>, res: Response): void => {
  const id = parseInt(req.params.id);
  const initialLength = books.length;
  
  books = books.filter(book => book.id !== id);
  
  if (books.length < initialLength) {
    res.json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});
