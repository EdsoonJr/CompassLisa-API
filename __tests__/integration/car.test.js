const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const peopleService = require('../../src/app/service/peopleService');
const carService = require('../../src/app/service/carService');
// const authService = require('../../src/app/service/authService');

let token = '';
const car = {};

describe('Test All Routes Cars', () => {
  beforeAll(async () => {
    car.cr = await carService.create({
      modelo: 'Renault Duster ',
      cor: 'cinza',
      ano: '2021',
      acessorios: [
        {
          descricao: 'Ar-condicionado'
        },
        {
          descricao: '4 portas'
        }
      ],
      quantidadePassageiros: 5
    });
    await peopleService.create({
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

  it('Teste Route Get', async () => {
    const res = await supertest(app).get('/api/v1/car').set('authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
});
