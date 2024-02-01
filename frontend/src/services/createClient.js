export async function createClient(client) {
    try {
      
        const request = await fetch(process.env.REACT_APP_CLIENT_API_BASE +'/cadastrar', {
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(client)
        });
      
        const response = await request.json();
        return response;  
        
    } catch (error) {
      console.error('Erro ao cadastrar clientes:', error);
      return  error
    }
  }