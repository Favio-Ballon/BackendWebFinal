import createConnection  from '../connection.js';


const connection = await createConnection();

export class cursoModel{
    static async getAll() {
        const cursos = await connection.query('SELECT * FROM curso');
        return cursos.rows;
    }

    static async getById({ id }) {
        const curso = await connection.query('SELECT * FROM curso WHERE id = $1', [id]);
        return curso.rows;
    }

    static async getByName({ titulo }) {
        //convert titulo to lowercase
        titulo = titulo.toLowerCase();
        //search for the title in the database in lower case with like %%
        const curso = await connection.query('SELECT * FROM curso WHERE lower(titulo) like $1', ['%' + titulo + '%']);
        return curso.rows;
    }

    static async getByUsuario({ usuario_id }) {
        
    }

    static async create({ curso }) {
        const { titulo, descripcion, autor, admin_id, imagen_path } = curso;
        await connection.query('INSERT INTO curso (titulo, descripcion, autor, admin_id, imagen_path) VALUES ($1, $2, $3, $4, $5)', [titulo, descripcion, autor, admin_id, imagen_path]);
    }

    static async delete({ id }) {
        await connection.query('DELETE FROM curso WHERE id = $1', [id]);
    }

    static async update({ id, curso }) {
        const { titulo, descripcion, autor, admin_id, imagen_path } = curso;
        await connection.query('UPDATE curso SET titulo = $1, descripcion = $2, autor = $3, admin_id = $4, imagen_path= $5 WHERE id = $6', [titulo, descripcion, autor, admin_id, imagen_path, id]);
    }
}