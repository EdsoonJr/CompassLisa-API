const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const rentalService = require('../../src/app/service/rentalService');

const rental = {};

describe('Test of all rental routes', () => {
  beforeAll(async () => {
    rental.rent = await rentalService.create({
      nome: 'Localiza Rent a Car',
      cnpj: '21179836000175',
      atividades: 'Aluguel de Carros E Gestão de Frotas',
      endereco: [
        {
          cep: '54705283',
          number: '1234',
          isFilial: false
        }
      ]
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('Test Route Get', async () => {
    const result = await supertest(app).get('/api/v1/rental');
    expect(result.statusCode).toBe(200);
  });
});
