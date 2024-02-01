export async function getAllClients() {
  try {
      const request = await fetch(process.env.REACT_APP_CLIENT_API_BASE);
      const response = await request.json();
      
      return response;
  } catch (error) {
      console.error('Erro ao obter clientes:', error);
      throw error;
  }
}