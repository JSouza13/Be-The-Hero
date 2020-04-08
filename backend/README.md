
# Construindo a base da aplicação

### Ferramentas utilizadas

* **[KnexJs](http://knexjs.org/)**  
  Uma query builder para SQL, no qual foi utilizado o SQLite como nosso banco de dados.

* **[Insomnia](https://insomnia.rest/)**  
  Um ferramenta de Debug de APIs.

### Bibliotecas utilizadas

* **express**

* **nodemon**

* **knex**  
  Utilizada para o gerenciamento do nosso DB

* **crypto**  
  Biblioteca fornecido pelo próprio node, onde foi utilizada para gerar o Id da ONG.

### Entidades

* **ONG**  
  Entidade que poderá efetuar cadastros, login...

* **Caso** (incident)  
  Onde um ONG poderá ter vários casos.

### Funcionalidades

* Login de ONG

* Logout de ONG

* Cadastro de ONG

* Cadastrar novos casos

* Deletar casos

* Listar casos específicos de uma ONG

* Listar todos os casos

* Entrar em contato com a ONG

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
