import pg from 'pg';
const { Client } = pg;

const config = {
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'Paragon'
};

const connection = new Client(config);

await connection.connect()

export class UserModel {
    static async getAll() {
        // Devuelve una tupla con dos elementos, el primero es un array con los datos
        // y el segundo es un array con los nombres de las columnas
        const users = await connection.query('SELECT * FROM usuario');
        return users.rows;
    }

    static async create({ user }) {
        const { username, email, password } = user;
        await connection.query('INSERT INTO usuario (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);
    }
}



