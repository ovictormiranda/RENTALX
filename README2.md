###RENTALX - API
###API de aluguel de Carros

**Código Limpo**
Utilizando algums principios de código limpo como:
Nomes declarativos para constantes, funções, e mensagens (principalmente de erros) descrevendo de fato o que está acontencendo.
Utilizando também o Padrão de arquitetura limpa SOLID.

//SINGLETON como instancia global

**Utilizando SOLID**
**S** -> SRP - Single Responsability Principle
**O** -> OCP - Open Closed Principle
**L** -> LSP - Liskov Substitution Principle
**I** -> ISP - Interface Segregation Principle
**D** -> DIP - Dependency Inversion Principle (O código que implementa um politica de alto nível, não deve depender do código que implementa detalhes de baixo nível.)


**Categoria dos Carros**
[x] Criar Categoria
[x] Listar Categoria
[x] Validando cadastro de Categoria (Só pode cadastrar categorias que ainda não existam)
[x] Multer para upload de arquivos



Iniciar aplicação:


sudo docker ps

sudo docker-compose down

sudo docker-compose up -d --force-recreate

yarn typeorm migration:run



1 - Testes unitários
Testar as regras de negócio(UseCases) da nossa aplicação.

2 - Testes de integração
-> routes -> controllers -> useCases -> respository
<- repository <- useCases <- controllers <- routes

Testar a aplicação inteira, desde o momento em que a rota é chamada, a chamada do controller até o retorno que ela terá.
(conexão com o banco, criando um banco de teste. o teste de banco, não testa no banco real;
Serviços externos, ex: envio de email;
)

TDD <>:<> Test Driven Development (é uma metodologia)
Primeiro eu faço o teste, depois eu crio a aplicação.




