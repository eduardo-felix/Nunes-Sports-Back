**Configuração Inicial**
Antes de iniciar a aplicação é necessário criar um banco de dados PostgresSQL usando os comandos
Before running the API, it is necessary to create a PostgreSQL database and a table. Use the following SQL command to create the users table:

```javascript
    CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    linkedin TEXT NOT NULL,
    github TEXT NOT NULL
);
```

After creating the database and the table, create a .env file with the following variables:

```javascript
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
PORT=
```

**Recursos**
1. Listar Produtos

Endpoint
```javascript
GET /produtos
```
Descrição
Esta rota permite listar todos os produtos cadastrados.

Parâmetros
Nenhum.

Resposta de Sucesso

Código: 200

Conteúdo:

```javascript
[
  {
    "id": 1,
    "nome": "Produto 1",
    "descricao": "Descrição do Produto 1",
    "preco": 19.99
  },
  {
    "id": 2,
    "nome": "Produto 2",
    "descricao": "Descrição do Produto 2",
    "preco": 29.99
  },
  ...
]
```


2. Adicionar Produto

Endpoint
```javascript
POST /produtos
```

Descrição

Esta rota permite adicionar um novo produto.

Parâmetros
Corpo da Requisição:
```javascript
{
  "nome": "Novo Produto",
  "descricao": "Descrição do Novo Produto",
  "preco": 39.99
}
```

Resposta de Sucesso

Código: 200

Conteúdo:
```javascript
{
  "id": 3,
  "nome": "Novo Produto",
  "descricao": "Descrição do Novo Produto",
  "preco": 39.99
}
```


3. Editar Produto

Endpoint

```javascript
PATCH /produtos/:id
```

Descrição
Esta rota permite editar um produto existente com base no ID fornecido.


Corpo da Requisição:

```javascript
{
  "nome": "Produto Atualizado",
  "descricao": "Descrição Atualizada",
  "preco": 49.99
}
```

Resposta de Sucesso

Código: 200

Conteúdo:
```javascript
{
  "id": 3,
  "nome": "Produto Atualizado",
  "descricao": "Descrição Atualizada",
  "preco": 49.99
}
```


4. Deletar Produto
   
Endpoint

```javascript
DELETE /produtos/:id
```
Descrição

Esta rota permite deletar um produto existente com base no ID fornecido.

Resposta de Sucesso
Código: 204
Conteúdo: Nenhum conteúdo retornado.
