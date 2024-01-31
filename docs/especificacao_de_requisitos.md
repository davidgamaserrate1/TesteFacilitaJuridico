## Especificação de Requisitos: Teste Facilita Jurídico

**Requisitos Funcionais (RF):**

**RF1.1 - Listar Clientes:**
- O sistema deve permitir a listagem de todos os clientes cadastrados.
- Deve ser possível filtrar os clientes com base nas informações cadastradas, como nome, email e telefone.

**RF1.2 - Cadastrar Clientes:**
- Deve existir uma funcionalidade para cadastrar novos clientes.
- O cadastro deve incluir informações como nome, email e telefone.

**RF2.1 - Calcular Rota:**
- O sistema deve calcular uma rota otimizada que passa por todas as localizações dos clientes cadastrados e retorna à empresa.
- A rota deve ser calculada para ter a menor distância possível.

**RF2.2 - Exibir Ordem de Visitas:**
- Um botão na tela de clientes deve abrir uma modal que mostra a ordem de visitação dos clientes na rota calculada.
- A ordem deve ser apresentada de forma clara e simples, mostrando uma lista dos clientes na ordem de visita.

**RF2.3 - Cadastro de Coordenadas (X, Y):**
- A rota deve considerar coordenadas X e Y de cada cliente.
- A rota calculada deve levar em conta essas coordenadas.

**Requisitos Não Funcionais (RNF):**

**RNF1.1 - Tecnologias Utilizadas:**
- O backend deve ser desenvolvido em Node.js.
- O banco de dados a ser utilizado é o PostgreSQL.
- O frontend deve ser desenvolvido em React.

**RNF2.1 - API para Cálculo de Rota:**
- A API para o cálculo de rota deve estar disponível para ser chamada pelo frontend.
- O algoritmo utilizado para o cálculo deve ser eficiente em termos de otimização de distância.

**RNF3.1 - Persistência de Dados:**
- Os dados dos clientes, incluindo as coordenadas X e Y, devem ser armazenados de forma segura e duradoura no banco de dados PostgreSQL.

**RNF4.1 - Consultas em SQL:**
- Dê preferência para consultas em SQL na API e evite a utilização de ORMs.
- Forneça o DDL da tabela do banco de dados junto com o código fonte.

**RNF5.1 - Documentação:**
- O README do projeto deve conter instruções claras sobre como rodar o projeto localmente.

**RNF6.1 - Comentários no Código:**
- O código deve ser comentado conforme necessário para explicar a lógica implementada.

**RNF7.1 - Prazo:**
- O teste deve ser concluído em 3 dias.
- O código fonte e o link do repositório público devem ser enviados para  para o e-mail especificado no documento.