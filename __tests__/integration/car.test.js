const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const PeopleService = require('../../src/app/service/PeopleService');
const CarService = require('../../src/app/service/CarService');
// const authService = require('../../src/app/service/authService');

let token = '';
const car = {};

describe('Test All Routes Cars', () => {
  beforeAll(async () => {
    car.cr = await CarService.create({
      modelo: 'Renault Duster 2022 ',
      cor: 'cinza',
      ano: '2021',
      acessorios: [
        {
          descricao: 'Ar-condicionado'
        },
        {
          descricao: 'Dir. elétrica'
        },
        {
          descricao: 'Piloto Auto.'
        },
        {
          descricao: '4 portas'
        }
      ],
      quantidadePassageiros: 5
    });
    await PeopleService.create({
      nome: 'Juinim do Token',
      cpf: '56155905053',
      data_nascimento: '26/03/2003',
      email: 'juinimtk@email.com',
      senha: '654321',
      habilitado: 'sim'
    });

    const authPeople = await supertest(app).post('/api/v1/authenticate/').send({
      email: 'juinimtk@email.com',
      senha: '654321'
    });
    const { body } = authPeople;
    token = body.token;
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('Test Route  Post', async () => {
    const result = await supertest(app)
      .post('/api/v1/car')
      .send({
        modelo: 'Honda City ',
        cor: 'Azul',
        ano: '2021',
        acessorios: [
          {
            descricao: 'Ar-condicionado'
          },
          {
            descricao: 'Dir. elétrica'
          }
        ],
        quantidadePassageiros: 5
      })
      .set('authorization', `Bearer ${token}`);

    expect(result.statusCode).toBe(201);
  });

  it('Test Route  Post *Invalid URL*', async () => {
    const result = await supertest(app)
      .post('/api/v1/carros')
      .send({
        modelo: 'Honda City ',
        cor: 'Azul',
        ano: '2021',
        acessorios: [
          {
            descricao: 'Ar-condicionado'
          },
          {
            descricao: 'Dir. elétrica'
          }
        ],
        quantidadePassageiros: 5
      })
      .set('authorization', `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
  });

  it('Test Route  Post *Invalid YEAR*', async () => {
    const result = await supertest(app)
      .post('/api/v1/car')
      .send({
        modelo: 'Honda City ',
        cor: 'Azul',
        ano: '1949',
        acessorios: [
          {
            descricao: 'Ar-condicionado'
          },
          {
            descricao: 'Dir. elétrica'
          }
        ],
        quantidadePassageiros: 5
      })
      .set('authorization', `Bearer ${token}`);

    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *NO DESCRIPTIONS*', async () => {
    const result = await supertest(app)
      .post('/api/v1/car')
      .send({
        modelo: 'Honda City ',
        cor: 'Azul',
        ano: '1949',
        acessorios: [],
        quantidadePassageiros: 5
      })
      .set('authorization', `Bearer ${token}`);

    expect(result.statusCode).toBe(400);
  });

  it('Teste Route Get', async () => {
    const result = await supertest(app).get('/api/v1/car').set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(200);
  });
});
