import { dbConnection } from "../../database/config/dbConnect.js";

export async function createClient(req, res) {
    try {
        const { name, mail, phone, x_coordinate, y_coordinate } = req.body;
        const queryInsert = `INSERT INTO  client ( name, mail, phone, x_coordinate, y_coordinate) VALUES ( $1, $2, $3, $4, $5) ;`
        const itemInsert = [name, mail, phone, x_coordinate, y_coordinate]
        
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
		const querySelect = `SELECT * FROM client order by id;`
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
		return res.status(500).json({
			"error": `Erro ao consultar cliente: ${error}`
		});
	}
}

export async function updateClientById(req, res) {
    try {
        const id = req.params.id;
       
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'Request body is empty. Please provide data for update.',
            });
        }

        const querySelect = `SELECT * FROM client WHERE id = $1;`;
        const clientResult = await dbConnection.query(querySelect, [id]);

        const clientFound = clientResult.rows[0];

        if (!clientFound) {
            return res.status(404).json({
                message: `Cliente ${id} não encontrado`,
            });
        }
        
        const { name, mail, phone, x_coordinate, y_coordinate } = req.body;
        
        const clientUpdate = {
            name: name || clientFound.name,
            mail: mail || clientFound.mail,
            phone: phone || clientFound.phone,
            x_coordinate: x_coordinate || clientFound.x_coordinate,
            y_coordinate : y_coordinate || clientFound.y_coordinate            
        };
        
        const isUpdateRequired = (field) => clientUpdate[field] !== clientFound[field];

        if (Object.keys(clientUpdate).some(isUpdateRequired)) {
            const queryUpdate = `UPDATE client SET name = $1, mail = $2, phone = $3, x_coordinate = $4, y_coordinate = $5 WHERE id = $6;`;

            await dbConnection.query(queryUpdate, [
                clientUpdate.name,
                clientUpdate.mail,
                clientUpdate.phone,
                clientUpdate.x_coordinate,
                clientUpdate.y_coordinate,
                id,
            ]);

            return res.status(200).json({
                message: `Cliente atualizado com sucesso!`,
            });
        } else {
            return res.status(200).json({
                message: 'Por favor, forneça informações diferentes das atuais',
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: `Erro ao atualizar cliente: ${error}`,
        });
    }
}

export async function listClientsByCriteria(req, res) {
    try {
        let filters ={} 
        
        if(req.query.name)
            filters["name"] = req.query.name;

        if(req.query.mail)
            filters["mail"] = req.query.mail;
        
        if(req.query.phone)
            filters["phone"] = req.query.phone;
        
        if (!filters || Object.keys(filters).length === 0) {
            return res.status(400).json({
                message: 'Por favor, forneça pelo menos um critério de filtro.',
            });
        }
        const queryParams = [];
        const whereClauses = [];

        Object.keys(filters).forEach((key, index) => {
            const value = filters[key];

            switch (key) {
                case 'id':
                    whereClauses.push(`id = $${index + 1}`);
                    queryParams.push(value);
                    break;
                case 'name':
                    whereClauses.push(`name ILIKE $${index + 1}`);
                    queryParams.push(`%${value}%`);
                    break;
                case 'mail':
                    whereClauses.push(`mail ILIKE $${index + 1}`);
                    queryParams.push(`%${value}%`);
                    break;
                case 'phone':
                    whereClauses.push(`phone ILIKE $${index + 1}`);
                    queryParams.push(`%${value}%`);
                    break;
                default:
                    return res.status(400).json({
                        message: `Critério inválido: ${key}. Escolha entre id, name, mail ou phone.`,
                    });
            }
        });
        
        const querySelect = `SELECT * FROM client WHERE ${whereClauses.join(' AND ')};`;        

        const queryResult = await dbConnection.query(querySelect, queryParams);
        const listClients = queryResult.rows;

        if (listClients[0]?.id !== undefined)
            return res.status(200).json(listClients);

        res.status(404).json({
            message: 'Nenhum cliente encontrado com base nos critérios fornecidos.',
        });

    } catch (error) {
        res.status(500).json({
            error: `Erro ao listar clientes: ${error}`,
        });
    }
}

