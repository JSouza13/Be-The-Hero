
# Construindo a base da aplicação

### Ferramentas utilizadas

* **[KnexJs](http://knexjs.org/)**  
  Uma query builder para SQL, no qual foi utilizado o SQLite como nosso banco de dados.

* **[Insomnia](https://insomnia.rest/)**  
  Um ferramenta de Debug de APIs.

### Bibliotecas utilizadas

* **express**  
  O Express.js é um framework Node, ele cria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação tanto de API's quanto SPA's.

* **nodemon**  
  Utilizada para o auto-restart da aplicação, toda vez que um arquivo do projeto for modificado

* **knex**  
  Utilizada para o gerenciamento do nosso DB

* **crypto**  
  Biblioteca fornecido pelo próprio node, onde foi utilizada para gerar o Id da ONG.

* **cors**  
  Utilizada para segurança da aplicação, determinando quem terá acesso a ela.

### Entidades

* **ONG**  
  Entidade que poderá efetuar cadastros, login...

* **Caso** (incident)  
  Onde um ONG poderá ter vários casos.

### Funcionalidades

* Login de ONG

* Logout de ONG (**frontend**)

* Cadastro de ONG

* Cadastrar novos casos

* Deletar casos

* Listar casos específicos de uma ONG

* Listar todos os casos

* Entrar em contato com a ONG (**frontend**)

### Migrations

* Criação:  
Através do **knex**, definimos as migrations utlizando o comando `❯ yarn knex migrate:make migration_name`

* Execução da migration criada:  
  `❯ yarn knex migrate:latest`

* Cancelando a ultima migration executada:  
  `❯ yarn knex migrate:rollback`

* Verificando migrations executadas e pendências  
  `❯ yarn knex migrate:status`

* Consultandoomandos do **knex**:  
  `❯ yarn knex`

## Tipos de parâmetros

* Query:  
  Parâmetros nomeados, que são enviados na rota após "?", utilizadas em paginações, filtros...  
  Na aplicação, passaríamos algo como:  
  `app.get('/users', (req, res) => { const params = req.query; return res.json();})`  
  Que retornaria todos os parâmetros passados na url.  

  E na URl, passaríamos algo como:  
  `http://localhost:3333/users?page=2&nome=Joao&idade=25`

* Route:  
  Parâmetros utilizados para identificar recursos, como exemplo passando um id pela rota.  
  Na aplicação, passaríamos algo como:  
  `app.get('/users/:id', (req, res) => { const params = req.params; return res.json();});`  
  Que retornaria todos os parâmetros passados na url.

  E na URl, passaríamos algo como:  
  `http://localhost:3333/users/1`

* Request Body:  
  Corpo da requisição, utilizado para criar ou alterar recursos.  
  Na aplicação, passaríamos algo como:  
  `app.post('/users', (req, res) => { const body = req.body; return res.json();});`  
  Que retornaria todos os parâmetros passados na url.

  E na URl, passaríamos algo como:  
  `http://localhost:3333/users`