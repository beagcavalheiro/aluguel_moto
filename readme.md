# Projeto de Aluguel de Motos

Este projeto implementa um sistema básico de aluguel de motos, utilizando Node.js, Express.js, e Sequelize com MySQL para persistência de dados.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
.
├── config
│   └── config.js          # Configurações do banco de dados
├── controllers
│   ├── aluguelController.js  # Controlador para operações de aluguel
│   ├── clienteController.js  # Controlador para operações de cliente
│   └── motoController.js     # Controlador para operações de moto
├── migrations
│   ├── 20240618120000-create-moto.js   # Migração para criar a tabela de motos
│   ├── 20240618120100-create-cliente.js   # Migração para criar a tabela de clientes
│   └── 20240618120200-create-aluguel.js   # Migração para criar a tabela de aluguéis
├── models
│   ├── aluguel.js         # Definição do modelo Aluguel
│   ├── cliente.js         # Definição do modelo Cliente
│   └── moto.js            # Definição do modelo Moto
├── routes
│   ├── routes   # Rotas para operações relacionadas a aluguéis
│                # Rotas para operações relacionadas a clientes
│                # Rotas para operações relacionadas a motos
├── seeders
│   ├── 20240618130000-demo-motos.js     # Seeder para popular a tabela de motos (opcional)
│   ├── 20240618130100-demo-clientes.js  # Seeder para popular a tabela de clientes (opcional)
│   └── 20240618130200-demo-alugueis.js  # Seeder para popular a tabela de aluguéis (opcional)
├── .sequelizerc            # Configuração do Sequelize CLI
├── index.js                # Ponto de entrada da aplicação
└── README.md               # Este arquivo
```

## Instalação

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instalar dependências:**

   ```bash
   npm install
   ```

3. **Configurar o banco de dados:**

   - Configure as variáveis de ambiente em um arquivo `.env` na raiz do projeto, seguindo o exemplo do arquivo `.env.example`.

4. **Executar as migrações:**

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Opcional: Popular o banco de dados com dados iniciais (seeders):**

   ```bash
   npx sequelize-cli db:seed:all
   ```

6. **Iniciar o servidor:**

   ```bash
   npm start
   ```

## Uso

- Acesse a API através do endpoint base `http://localhost:3000/api`.

### Exemplos de Rotas

- **Listar todas as motos:**

  ```
  GET /api/motos
  ```

- **Criar um novo cliente:**

  ```
  POST /api/clientes
  ```

- **Atualizar um aluguel:**

  ```
  PUT /api/alugueis/:id
  ```

- **Excluir uma moto:**

  ```
  DELETE /api/motos/:id
  ```

