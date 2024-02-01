import fs from 'fs';
import path from 'path';

import {
    dbConnection
} from './config/dbConnect.js';

const createTables = async () => {
    try {
        const filePath = path.join('database', 'dump', 'database.sql');
        const sql = fs.readFileSync(filePath, 'utf8');
        await dbConnection.query(sql);
        console.log('Tabelas criadas com sucesso!');
        dbConnection.end();
    } catch (error) {
        console.error('Erro ao criar as tabelas:', error);
    }
};

createTables();