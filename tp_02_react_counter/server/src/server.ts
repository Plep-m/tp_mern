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

interface Task {
  id: number;
  label: string;
  isDone: boolean;
}

let books: Book[] = [
  { id: 1, title: 'Express pour les nuls', author: 'Node JS' }
];

let tasks: Task[] = [
  { id: 1, label: 'Apprendre React', isDone: true },
  { id: 2, label: 'Maîtriser TypeScript', isDone: false },
  { id: 3, label: 'Créer une API REST', isDone: false }
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

app.get('/api/tasks', (req: Request, res: Response): void => {
  res.json(tasks);
});

app.post('/api/tasks', (req: Request, res: Response): void => {
  const { label } = req.body;
  
  const newTask: Task = {
    id: Date.now(),
    label,
    isDone: false
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

interface TaskParams {
  id: string;
}

app.patch('/api/tasks/:id', (req: Request<TaskParams>, res: Response): void => {
  const id = parseInt(req.params.id);
  const { isDone } = req.body;
  
  const task = tasks.find(t => t.id === id);
  
  if (task) {
    task.isDone = isDone;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.delete('/api/tasks/:id', (req: Request<TaskParams>, res: Response): void => {
  const id = parseInt(req.params.id);
  const initialLength = tasks.length;
  
  tasks = tasks.filter(task => task.id !== id);
  
  if (tasks.length < initialLength) {
    res.json({ message: 'Task deleted successfully' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});
