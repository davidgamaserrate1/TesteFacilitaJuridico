export async function updateClient(id, data) {
    try {
        const request = await fetch(process.env.REACT_APP_CLIENT_API_BASE + `/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });

        const response = await request.json();
        return response;

    } catch (error) {
        console.error('Erro ao atualizar clientes:', error);
        throw error;
    }
}