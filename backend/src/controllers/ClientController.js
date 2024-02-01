import { dbConnection } from "../../database/config/dbConnect.js";

export async function createClient(req, res) {
    try {
        const { name, mail, phone, coordinates } = req.body;
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

export async function listClients(_, res) {
	try {
		const querySelect = `SELECT * FROM client;`
		const queryResult = await dbConnection.query(querySelect)
		const listClients = queryResult.rows;
       
        if (listClients[0]?.id !== undefined)
            return res.status(200).json(listClients);        
        
        res.status(404).json({
            "message": 'Nenhum cliente cadastrado'
        });

	} catch (error) {
		res.status(500).json({
			"error": `Erro ao cadastrar cliente: ${error}`
		});
	}
}

export async function removeClientById(req, res) {
	try {
        const id = req.params.id
        const querySelect = `SELECT * FROM client WHERE id = ${id};`
        const clientResult = await dbConnection.query(querySelect)
		const clientFinded = clientResult.rows[0]

        if(!clientFinded)
            res.status(404).json({
                message: `Cliente ${id} não encontrado`
            })  
        
        else{
            const queryDelete = `DELETE FROM client WHERE id = ${id};`        
            await dbConnection.query(queryDelete)
            
            res.status(200).json({
                message: `Cliente ${id} removido com sucesso!`
            })
        }
	} catch (error) {
		res.status(500).json({
			"error": `Erro ao remover cliente: ${error}`
		});
	}
}

export async function listClientById(req, res) {
	try {
        const id = req.params.id
        const querySelect = `SELECT * FROM client WHERE id = ${id};`
        const clientResult = await dbConnection.query(querySelect)
		const clientFinded = clientResult.rows[0]

        if(!clientFinded)
            res.status(404).json({
                message: `Cliente ${id} não encontrado`
            })    
           
        res.status(200).json(clientFinded)
	} catch (error) {
		res.status(500).json({
			"error": `Erro ao consultar cliente: ${error}`
		});
	}
}