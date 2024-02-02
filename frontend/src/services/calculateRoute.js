export async function calculateRoute() {
    try {
        const request = await fetch(process.env.REACT_APP_CLIENT_API_BASE + '/calcular-rota');
        const response = await request.json();
        
        return response;
    } catch (error) {
        console.error('Erro ao obter rota de clientes:', error);
        throw error;
    }
  }