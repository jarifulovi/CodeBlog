import express from 'express';
import postRoutes from './routes/postRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());


// Initialize routes
// ***************************************************************
app.use('/api', postRoutes);
// ***************************************************************
app.get('/', (req, res) => {
  res.send('Hello from Express with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
