import pg from 'pg';
import dotenv from 'dotenv'

dotenv.config();

const dbConnection = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

dbConnection.connect((err, _, release) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return  ('Error connecting to the database:', err.message);
    } 
    console.log('Connected to the database successfully!');
    release();
    
});

export {
    dbConnection
}