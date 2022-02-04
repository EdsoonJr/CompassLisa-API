![Imgur](https://i.imgur.com/3qOYB8G.png)

## ![Imgur](https://i.imgur.com/0oM48aB.png) Sobre a Compasso-Lisa
🏁 Desafio Final-Part 1

> Status: Em Desenvolvimento🟡


 A compasso entrou em um novo ramo de mercado, a CompassLisa um seguimento de negócio de carros de luxo e semi luxo para alugar.
 pessando nisso foi solicitado um sistema para gerenciar o negocio,onde nesta primeira etapa foi criado os registros de
carros, usuários e a autenticação.

## Sobre a API

O projeto está sendo desenvolvido utilizando as seguintes tecnologias:

<a href="https://imgur.com/QdfWNBD"><img src="https://i.imgur.com/QdfWNBD.png?1" title="source: imgur.com" /></a>
<a href="https://imgur.com/dMTWWOX"><img src="https://i.imgur.com/dMTWWOX.png?1" title="source: imgur.com" /></a>
<a href="https://imgur.com/EIz2cz9"><img src="https://i.imgur.com/EIz2cz9.png?1" title="source: imgur.com" /></a>
<a href="https://imgur.com/FJQQexl"><img src="https://i.imgur.com/FJQQexl.png?2" title="source: imgur.com" /></a>

## Funcionamento da API⚙️

### Requisitos 

> Para o devido funcionamento da Api é necessário a instalação de suas dependências,siga os passos abaixo

```bash
# 1. Clonar  repositório
$ git clone https://github.com/EdsoonJr/CompassLisa-API.git

# 2. Acessar a pasta do projeto
$ cd compass-grupo02

# 3. Instale as dependências
$ npm install

# 4. Executar a aplicação em modo de desenvolvimento
$ npm run dev

# Execute a aplicação em modo de produção
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### Bibliotecas Utilizadas

+ Mongoose
+ Express
+ Joi
+ Joi/Date
+ Dotenv
+ jsonwebtoken
+ bcryptjs

## Rotas

✨Cars

> POST - Cadastrar Carro http://localhost:3000/api/v1/car

```bash
{
"modelo": "GM S10 2.8",
"cor": "branco",
"ano": "2021",
"acessorios": [
{ "descricao": "Ar-condicionado" },
{ "descricao": "Dir. Hidráulica" },
{ "descricao": "Cabine Dupla" },
{ "descricao": "Tração 4x4" },
{ "descricao": "4 portas" },
{ "descricao": "Diesel" },
{ "descricao": "Air bag" },
{ "descricao": "ABS" }
],
"quantidadePassageiros": 5
}

```

> GET- Listar Todos os Veículos http://localhost:3000/api/v1/car

> GET- Listar um Veículo http://localhost:3000/api/v1/car/{id}

> GET- Buscar por Query Params http://localhost:3000/api/v1/car?campo=busca

```bash
{
    "Veículos": [
        {
            "_id": "61f0b380c3a97718c473b389",
            "modelo": "GM S10 2.8",
            "cor": "branco",
            "ano": "2021",
            "acessorios": [
                {
                    "descricao": "Ar-condicionado"
                },
                {
                    "descricao": "Dir. Hidráulica"
                },
  
            ],
            "quantidadePassageiros": 5
        },
        {
            "_id": "61f157b7948d8cbd5306f3fc",
            "modelo": "Grand Siena Atracttive 1.6",
            "cor": "prata",
            "ano": "2021",
            "acessorios": [
                {
                    "descricao": "Ar-condicionado"
                },
                {
                    "descricao": "Dir. Hidráulica"
                },
                {
                    "descricao": "Cabine Dupla"
                },
                {
            ],
            "quantidadePassageiros": 5
        },
       
}
    "total": 17,
    "limit": 5,
    "offsets": 4,
    "offset": 1
```

> PUT- Atualizar Veículo http://localhost:3000/api/v1/car/{id}

```bash

{
"modelo": "GM S10 2.8",
"cor": "branco",
"ano": "2021",
"acessorios": [
{ "descricao": "Ar-condicionado" },
{ "descricao": "Dir. Hidráulica" },
],
"quantidadePassageiros": 5
}


```

> Delete- Deletar Veículo http://localhost:3000/api/v1/car/{id}


✨Peoples

> POST- Cadastrar Pessoa http://localhost:3000/api/v1/people

```bash
{
"nome": "Ronevaldo Santos",
"cpf": "900.825.170-10",
"data_nascimento": "26/03/2002",
"email": "edson@email.com",
"senha": "654321",
"habilitado": "sim"
}
```

> GET- Listar Todas as Pessoas http://localhost:3000/api/v1/people

> GET- Listar uma Pessoa http://localhost:3000/api/v1/people/{id}

> GET- Buscar por Query Params http://localhost:3000/api/v1/people?campo=busca

```bash
{
    "Pessoas": [
        {
            "_id": "61f494207b94f5c2fd14dae8",
            "nome": "joaozinho ciclano",
            "cpf": "18898386087",
            "data_nascimento": "26/03/2003",
            "email": "joazinho@email.com",
            "habilitado": "sim"
        },
        {
            "_id": "61f494d0f9a26b841c396427",
            "nome": "Severino",
            "cpf": "87570205073",
            "data_nascimento": "26/03/2003",
            "email": "Severino@email.com",
            "habilitado": "sim"
        }
}

```

> PUT - Atualizar Pessoa http://localhost:3000/api/v1/people/{id}

```bash

{
"nome": "Joaozinho Silva",
"cpf": "63430727057",
"data_nascimento": "26/03/1999",
"email": "edson@email.com",
"senha": "654321",
"habilitado": "sim"
}
```

> Delete- Deletar Pessoa http://localhost:3000/api/v1/people/{id}

✨Authenticate

> Post- Validar email e senha http://localhost:3000/api/v1/authenticate

```bash
{
    "email": "jr@email.com",
    "senha": "102030"
}
```

> Retorno:

``` bash
{
    "authUser": {
        "_id": "61fb389c649b85c488c4cec4",
        "nome": "Joaozinho Silva",
        "cpf": "32286789037",
        "data_nascimento": "26/03/1999",
        "email": "jr@email.com",
        "habilitado": "sim"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiOnsiaWQiOiI2MWZiMzg5YzY0
    OWI4NWM0ODhjNGNlYzQifSwiaWF0IjoxNjQzODUzOTk3LCJleHAiOjE2NDM5NDAzOTd9.-GMM4yOjGDc3jb13iNjzwxtFK-SRu5fs4EV2-OCa9V8"
}
```


