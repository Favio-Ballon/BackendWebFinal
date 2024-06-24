import express, { json } from 'express';
import userRoutes from './routes/user.routes.js';
import { corsMiddleware } from './middlewares/cors.js';
import cursoRouter from './routes/curso.routes.js';
import categoriaRouter from './routes/categoria.routes.js'
import leccionRouter from './routes/leccion.routes.js';
import misCursosRouter from './routes/misCursos.routes.js';
import vistosRouter from './routes/visto.routes.js';

const app = express();
app.use(json());
app.disable('x-powered-by');
app.use(corsMiddleware())

// Routes
app.use('/usuarios', userRoutes);
app.use('/cursos', cursoRouter);
app.use('/categorias', categoriaRouter);
app.use('/lecciones', leccionRouter);
app.use('/miscursos', misCursosRouter);
app.use('/vistos', vistosRouter);



app.get('/', (req, res) => {
    res.json({ "message": 'Hola mundo' })
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
})

