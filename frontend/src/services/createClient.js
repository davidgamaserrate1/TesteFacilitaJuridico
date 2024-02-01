export async function createClient(client) {
    try {
      
        const request = await fetch(process.env.REACT_APP_CLIENT_API_BASE, {
            method: 'POST',
            body: JSON.stringify(data)
        });
      
        const response = await request.json();
        return response;  
        
    } catch (error) {
      console.error('Erro ao cadastrar clientes:', error);
      throw error; 
    }
  }
