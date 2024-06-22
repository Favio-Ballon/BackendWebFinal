import createConnection  from '../connection.js';


const connection = await createConnection();

export class leccionModel{
    static async getByCurso({ curso_id }) {
        //TODO order by id
        const lecciones = await connection.query('SELECT * FROM leccion WHERE curso_id = $1 ORDER BY id', [curso_id]);
        return lecciones.rows;
    }

    static async create({ leccion }) {
        const {curso_id, titulo, contenido} = leccion;
        await connection.query('INSERT INTO leccion (curso_id, titulo, contenido) VALUES ($1, $2, $3)', [curso_id, titulo, contenido]);
    }

    static async delete({ id }) {
        await connection.query('DELETE FROM leccion WHERE id = $1', [id]);
    }

    static async update({ id, leccion }) {
        const {curso_id, titulo, contenido} = leccion;
        await connection.query('UPDATE leccion SET curso_id = $1, titulo = $2, contenido = $3 WHERE id = $4', [curso_id, titulo, contenido, id]);
    }

    static async getById({ id }) {
        const leccion = await connection.query('SELECT * FROM leccion WHERE id = $1', [id]);
        return leccion.rows;
    }
}