export async function removeClient(id) {
    try {
        const request = await fetch(process.env.REACT_APP_CLIENT_API_BASE + `/remover/${id}`, {
            method: 'DELETE'
        });
        
        return request;

    } catch (error) {
        console.error('Erro ao remover cliente:', error);
        throw error;
    }
}
