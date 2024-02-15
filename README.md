 Bem-vindo à documentação da API da Nunes Sports!
 
 Esta API foi desenvolvida utilizando Node.js e o framework Express, permitindo listar, adicionar, editar e deletar produtos.

O repositorio do front-end da aplicação encontra-se no link:  https://github.com/eduardo-felix/Nunes-Sports-Front

 

**Configuração Inicial**

Antes de iniciar a aplicação é necessário criar um banco de dados PostgresSQL e uma tabela de Produtos usando os seguintes comandos:


```javascript
    create table Produtos (
	id serial primary key,
  	nome text not null,
  	descricao text not null,
  	preco numeric not null
);
```

Após criar o banco de dados e a tabela, crie um arquivo .env com as seguintes variáveis inserindo os valores corretos para a conexão com o banco de dados local:

```javascript
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
PORT=
```
Em seguida instale as dependencias:

```javascript
npm install
```

Inicie o servidor utilizando o seguinte comando:

```javascript
npm run dev
```
Logo após, abra o repositorio do Front End e inicie a aplicação utilizando o comando:

```javascript
npm start
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
