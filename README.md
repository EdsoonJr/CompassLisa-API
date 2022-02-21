![Imgur](https://i.imgur.com/3qOYB8G.png)

## ![Imgur](https://i.imgur.com/0oM48aB.png) Sobre a Compasso-Lisa
🏁 Desafio Final-Part 2

> Status: Finalizado ✅


 A compasso entrou em um novo ramo de mercado, a CompassLisa um seguimento de negócio de carros de luxo e semi luxo para alugar.
 pessando nisso foi solicitado um sistema para gerenciar o negocio,onde nesta primeira etapa foi criado os registros de
carros, usuários e a autenticação.

## Sobre a API

O projeto está sendo desenvolvido utilizando as seguintes tecnologias:

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height=170px/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height=170px />
<img src="https://github.com/EdsoonJr/EdsoonJr/blob/main/postman.svg" height=170px/>
<a href="https://imgur.com/FJQQexl"><img src="https://i.imgur.com/FJQQexl.png?2" title="source: imgur.com" /></a>
</p>


## Funcionamento da API⚙️

### Requisitos 

> Para o devido funcionamento da Api é necessário a instalação de suas dependências,siga os passos abaixo

```bash
# 1. Clonar  repositório
$ git clone https://github.com/EdsoonJr/CompassLisa-API.git

# 2. Acessar a pasta do projeto
$ cd CompassLisa-API

# 3. Instale as dependências
$ npm install

# 5. Testar Api
$ npm test

# 4. Executar a api em modo de desenvolvimento
$ npm run dev

# 5. Ou Execute a api em modo de produção
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### Bibliotecas Utilizadas

+ Mongoose
+ Express
+ Joi
+ Joi/Date
+ Dotenv
+ Jsonwebtoken
+ bcryptjs
+ Swagger-ui-express
+ Mongoose-paginate-v2
+ Jest

## Rotas

### 📝Swagger Ui
> URL - http://localhost:3000/api/v1/api-docs/

Testar a API Pelo Swagger


### ✅ Authenticate

> Post- Validar email e senha http://localhost:3000/api/v1/authenticate

```bash
{
    "email": "jr@email.com",
    "senha": "102030"
}
```


 ### 🚗🔐 Cars
 
 <p>
 ❗ A Rota de carros agora possui autenticação por token bearer,
   então é necessário validar o usuário com a rota de autenticação a cima,para adquirir o token. 
 </p>

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

> PATCH- Atualizar Descrição de Veículo http://localhost:3000/api/v1/car/{id}/acessorios/{id-acessorio}

```bash
{
    "descricao":"Ar Condicionado Auto."
}

```



> Delete- Deletar Veículo http://localhost:3000/api/v1/car/{id}


### 🧑🏻‍🤝‍🧑🏻 Peoples

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


### 🚘💰Locadoras

> POST - Inserir Locadora http://localhost:3000/api/v1/rental

```bash

{
    "nome": "Localiza Rent a Car",
    "cnpj": "67930627000112",
    "atividades": "Aluguel de Carros E Gestão de Frotas",
    "endereco": [
        {
            "cep": "54705283",
            "number": "1234",
            "isFilial": false
        }
    ]
}
```


> GET- Listar Todas as Locadoras http://localhost:3000/api/v1/rental

> GET- Listar uma Locadora http://localhost:3000/api/v1/rental/{id}

> GET- Buscar por Query Params http://localhost:3000/api/v1/rental?campo=busca


```bash

"Locadoras": [
        {
            "_id": "620ecf87f744bb27b165d599",
            "nome": "SLM CArs",
            "cnpj": "54982348000150",
            "atividades": "Aluguel de Carros E Gestão de Frotas",
            "endereco": [
                {
                    "cep": "54705-283",
                    "logradouro": "2ª Travessa Machado de Assis",
                    "complemento": "",
                    "bairro": "Capibaribe",
                    "number": "1234",
                    "localidade": "São Lourenço da Mata",
                    "uf": "PE",
                    "isFilial": false
                },
            ]
        },
```


> PUT - Atualizar Locadora http://localhost:3000/api/v1/rental/{id}

```bash

{
    "nome": "NEW NAME",
    "cnpj": "67930627000112",
    "atividades": "Aluguel de Carros E Gestão de Frotas",
    "endereco": [
        {
            "cep": "54705283",
            "number": "1234",
            "isFilial": false
        }
    ]
}
```


> Delete- Deletar Pessoa http://localhost:3000/api/v1/rental/{id}






