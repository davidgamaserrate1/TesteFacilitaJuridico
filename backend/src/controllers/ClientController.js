import {
    dbConnection
} from "../../database/config/dbConnect.js";


export async function createClient(req, res) {
    try {
        const {
            name,
            mail,
            phone,
            coordinates
        } = req.body;

        const queryInsert = `INSERT INTO  client ( name, mail, phone, coordinates) VALUES ( $1, $2, $3, $4) ;`
        const itemInsert = [name, mail, phone, coordinates]

        await dbConnection.query(queryInsert, itemInsert)

        res.status(200).json({
            message: 'Cliente registrado com sucesso!'
        });
    } catch (error) {
        res.status(500).json({
            "error": `Erro ao cadastrar cliente: ${error}`
        });
    }

}