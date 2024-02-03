# Backend - Teste de Programação

Este é o repositório do backend para o Teste de Programação do Desenvolvedor na Facilita Jurídico.

## Instruções Gerais

O backend foi desenvolvido em Node.js e utiliza PostgreSQL como banco de dados. Ele oferece a lógica necessária para gerenciar clientes, otimizar rotas e calcular a ordem de visitação.

## Como Rodar o Projeto Localmente

### Configuração do Ambiente

#### 1. Banco de Dados PostgreSQL

Antes de executar o projeto, é necessário configurar um banco de dados PostgreSQL e fornecer as informações no arquivo `.env`.

1.1. **Instalação do PostgreSQL:**

   - Você pode baixar e instalar o PostgreSQL a partir do [site oficial](https://www.postgresql.org/download/).

1.2. **Criação do Banco de Dados:**

   - Crie um banco de dados PostgreSQL com o nome especificado no arquivo `.env` (por padrão, `FacilitaDB`).

1.3. **Configuração do `.env`:**

   - Crie um arquivo `.env` na raiz do diretório `backend` e adicione as seguintes informações, ajustando conforme necessário:

     ```
     SERVER_PORT=4000

     DB_USER=seu_usuario_postgres
     DB_HOST=seu_host_postgres
     DB_DATABASE=FacilitaDB
     DB_PASSWORD=sua_senha_postgres
     DB_PORT=5432
     ```

### Executando o Projeto

2.1. **Instalação de Dependências:**

   - No diretório `backend`, execute o seguinte comando para instalar as dependências:

     ```bash
     npm install
     ```

2.2. **Criando tabela no banco de dados:**
 Após configurar o banco de dados e incluir as informações corretamente no arquivo .env, execute o seguinte comando para criar a tabela no banco de dados :

   ```bash
   npm run database
   ```

2.3. **Inicializando o Backend:**

   - Execute o seguinte comando para iniciar o backend:

     ```bash
     npm start
     ```

   - O backend estará disponível em `http://localhost:4000` (ou na porta que você definiu em `SERVER_PORT` no `.env`).

Após seguir essas instruções, o backend estará configurado e pronto para ser executado localmente. Certifique-se de que o PostgreSQL está em execução e acessível durante o desenvolvimento.

### Rotas da API

- `GET /clientes`: Listar clientes e permitir filtros.
- `POST /clientes`: Cadastrar novos clientes.
- `GET /calcular-rota`: Calcular a rota eficiente e retornar a ordem de visitação.
- `GET /filtro`: Filtrar clientes com base em critérios.
- `GET /:id`: Obter detalhes de um cliente pelo ID.
- `PUT /:id`: Atualizar informações de um cliente pelo ID.
- `DELETE /:id`: Remover um cliente pelo ID.

### Exemplos de Requisições

1. **Listar Todos os Clientes:**
   ```bash
   GET /clientes
   ```

2. **Cadastrar Novo Cliente:**
   ```bash
   POST /clientes
   ```
   - Corpo da Requisição:
     ```json
     {
       "name": "Nome do Cliente",
       "mail": "cliente@email.com",
       "phone": "123456789",
       "x_coordinate": 10,
       "y_coordinate": 5
     }
     ```

3. **Calcular Rota Eficiente:**
   ```bash
   GET /calcular-rota
   ```

4. **Filtrar Clientes por Critérios:**
   ```bash
   GET /clientes/filtro?name=Nome&mail=email@exemplo.com&phone=123456789&x_coordinate=10&y_coordinate=5
   ```

5. **Obter Detalhes de um Cliente pelo ID:**
   ```bash
   GET /clientes/:id
   ```
   - Exemplo:
     ```bash
     GET /clientes/1
     ```

6. **Atualizar Informações de um Cliente pelo ID:**
   ```bash
   PUT /clientes/:id
   ```
   - Exemplo:
     ```bash
     PUT /clientes/1
     ```
   - Corpo da Requisição:
     ```json
     {
       "name": "Novo Nome do Cliente",
       "phone": "987654321"
     }
     ```

7. **Remover um Cliente pelo ID:**
   ```bash
   DELETE /clientes/:id
   ```
   - Exemplo:
     ```bash
     DELETE /clientes/1
     ```

### DDL da Tabela do Banco de Dados

```sql
-- DDL da tabela clientes
---------------------------
CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    x_coordinate INTEGER NOT NULL,
    y_coordinate INTEGER NOT NULL
);
```

### Dependências

- Node.js (versão recomendada: 18.x)
- PostgreSQL (versão recomendada: 14)

### Tecnologias Utilizadas

- Node.js
- ExpressJS
- PostgreSQL
