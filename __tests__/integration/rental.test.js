const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const rentalService = require('../../src/app/service/rentalService');

const rental = {};

describe('Test of all rental routes', () => {
  beforeAll(async () => {
    rental.rent = await rentalService.create({
      nome: 'São Lourenço Cars',
      cnpj: '15164159000119',
      atividades: 'Carros Para Alugar',
      endereco: [
        {
          cep: '54705283',
          number: '96',
          complemento: 'galpão',
          isFilial: false
        }
      ]
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('Test Route Post', async () => {
    const res = await supertest(app)
      .post('/api/v1/rental')
      .send({
        nome: 'Pernambuco Automobilistcs',
        cnpj: '47399144000126',
        atividades: 'Venda e Aluguel de Automóveis',
        endereco: [
          {
            cep: '54762303',
            number: '115',
            complemento: 'Muro A',
            isFilial: false
          }
        ]
      });
    expect(res.statusCode).toBe(201);
  });

  it('Test Route *Already in use CNPJ*', async () => {
    const res = await supertest(app)
      .post('/api/v1/rental')
      .send({
        nome: 'Pernambuco Automobilistcs',
        cnpj: '47399144000126',
        atividades: 'Venda e Aluguel de Automóveis',
        endereco: [
          {
            cep: '54762303',
            number: '115',
            complemento: 'Muro A',
            isFilial: false
          }
        ]
      });
    expect(res.statusCode).toBe(400);
  });

  it('Test Route *Invalid CNPJ*', async () => {
    const res = await supertest(app)
      .post('/api/v1/rental')
      .send({
        nome: 'Pernambuco Automobilistcs',
        cnpj: '47399144000128',
        atividades: 'Venda e Aluguel de Automóveis',
        endereco: [
          {
            cep: '54762303',
            number: '115',
            complemento: 'Muro A',
            isFilial: false
          }
        ]
      });
    expect(res.statusCode).toBe(400);
  });

  it('Test Route *Invalid CEP*', async () => {
    const res = await supertest(app)
      .post('/api/v1/rental')
      .send({
        nome: 'Pernambuco Automobilistcs',
        cnpj: '47399144000126',
        atividades: 'Venda e Aluguel de Automóveis',
        endereco: [
          {
            cep: '5476230-38',
            number: '115',
            complemento: 'Muro A',
            isFilial: false
          }
        ]
      });
    expect(res.statusCode).toBe(400);
  });

  it('Test Route Get', async () => {
    const result = await supertest(app).get('/api/v1/rental');
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Get ID *Invalid URL*', async () => {
    const result = await supertest(app).get('/api/v1/rentalcar');
    expect(result.statusCode).toBe(404);
  });

  it('Test Route Get ID', async () => {
    const result = await supertest(app).get(`/api/v1/rental/${rental.rent._id}`);
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Get ID *Rental Not Found*', async () => {
    const result = await supertest(app).get(`/api/v1/rental/620ed097f744bb27b165d5a5`);
    expect(result.statusCode).toBe(404);
  });

  it('Test Route Get ID *Invalid Id*', async () => {
    const result = await supertest(app).get(`/api/v1/rental/620ed097f744bb27b165d5a4invalid`);
    expect(result.statusCode).toBe(400);
  });
});
