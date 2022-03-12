#Cadastro de Carro

**RF** => Requisitos funcionais
[] Deve ser possível cadastrar um novo carro.
[] Deve ser possível listar todas as categorias.

**RN** => Regra de negócio
[] Não deve ser possível cadastrar um carro com uma placa já existente.
[] Não deve ser possível alterar a placa de carro já cadastrado.
[] O carro deve ser cadastrado por padrão, como disponivel.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.


#Listagem de carros

**RF** => Requisitos funcionais
[] Deve ser possível listar todos os carros disponíveis.
[] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
[] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
[] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN** => Regra de negócio
[] O usuário não precisa estar logado no sistema.


#Cadastro de Especificação no carro

**RF** => Requisitos funcionais
[] Deve ser possível cadastrar uma especificação para um carro.
[] Deve ser possível listar todas as especificações.
[] Deve ser possível listar todos os carros.

**RNF** => Requisitos não funcionais
-

**RN** => Regra de negócio
[] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[] Não deve ser possível cadastrar uma mesma especificação para o mesmo carro.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.


#Cadastro de imagem do carro

**RF** => Requisitos funcionais
[] Deve ser possível cadastrar imagem para o carro.
[] Deve ser possível listar todos os carros.

**RNF** => Requisitos não funcionais
[] Utilizar o multer para o upload dos arquivos.

**RN** => Regra de negócio
[] O Usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[] O usuário responsável pelo cadastro de uma imagem deve ser o administrador.


#Aluguel de Carro

**RF** => Requisitos funcionais
[] Deve ser possível cadastrar um aluguel.

**RN** => Regra de negócio
[] O aluguel deve ter duração minima de 24h.
[] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto par ao mesmo usuário.
[] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto par ao mesmo carro.
