create database nuneSport;

create table Produtos (
	id serial primary key,
  	nome text not null,
  	descricao text not null,
  	preco numeric not null
);
