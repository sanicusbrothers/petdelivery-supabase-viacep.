# 📌 Sistema de Cadastro e Agendamento com Supabase

Este projeto é um exemplo de integração entre **JavaScript** e **Supabase** para gerenciar clientes, endereços e agendamentos.  
Além disso, utiliza a API pública **ViaCEP** para buscar informações de endereço a partir de um CEP.

---

## 🚀 Funcionalidades

- Buscar dados de endereço pelo CEP (ViaCEP).
- Cadastrar clientes com nome e telefone.
- Cadastrar endereços vinculados a clientes.
- Criar agendamentos de serviços para clientes.
- Remover agendamentos existentes.
- Buscar agendamentos por ID.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Supabase REST API**
- **ViaCEP API**
- **Fetch API**
// Buscar endereço pelo CEP
obterDadosPorCep('01001-000')

// Cadastrar cliente
cadastroCliente('Aluisio', 999032493)

// Cadastrar endereço
cadastroEndereco(1, '01001-000', 'Praça da Sé', 'Sé', 'São Paulo')

// Criar agendamento
cadastroAgendamentos(1, 'Banho', '2026-04-27')

// Buscar agendamento
buscaPorAgenda(2)

// Remover agendamento
removerAgendamento(3)

Certifique-se de que as tabelas clientes, enderecos_clientes e agendamentos existam no seu banco Supabase.

A chave utilizada no exemplo é publicável (sb_publishable), mas recomenda-se usar chaves seguras em produção.

Os exemplos de chamadas estão comentados no código e podem ser ativados conforme necessário.



codigo postgreeSQL para criação da tabela:

create table clientes(
  id serial primary key,
  nome varchar(50) not null,
  telefone varchar(9)
);

create table enderecos_clientes(
  id serial primary key,
  cliente_id int not null references clientes(id),
  cep varchar(9),
  rua varchar(35),
  bairro varchar(20),
  cidade varchar(20)
);

create table agendamentos(
  id serial primary key,
  cliente_id int not null references clientes(id),
  servico varchar(15),
  data timestamp not null default current_timestamp
)
