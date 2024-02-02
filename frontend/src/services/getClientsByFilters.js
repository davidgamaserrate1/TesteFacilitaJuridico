export async function getClientsByFilters(filters) {
    try {
      const queryParams = new URLSearchParams(filters);
  
      const request = await fetch(`http://localhost:4000/clientes/filtro?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const response = await request.json();
      return response;
    } catch (error) {
      console.error('Erro ao obter clientes:', error);
      throw error;
    }
  }
  