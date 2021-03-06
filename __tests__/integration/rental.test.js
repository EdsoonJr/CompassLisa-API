const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const RentalService = require('../../src/app/service/RentalService');

const rental = {};

describe('Test of all rental routes', () => {
  beforeAll(async () => {
    rental.rent = await RentalService.create({
      nome: 'São Lourenço Cars',
      cnpj: '94811519000101',
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

  it('Test Route *Invalid CNPJ LONG*', async () => {
    const res = await supertest(app)
      .post('/api/v1/rental')
      .send({
        nome: 'Pernambuco Automobilistcs',
        cnpj: '473991440001265465465',
        atividades: 'Venda e Aluguel de Automóveis',
        endereco: [
          {
            cep: '547623038',
            number: '115',
            complemento: 'Muro A',
            isFilial: false
          }
        ]
      });
    expect(res.statusCode).toBe(400);
  });

  it('Test Route *Invalid CEP LONG*', async () => {
    const res = await supertest(app)
      .post('/api/v1/rental')
      .send({
        nome: 'Pernambuco Automobilistcs',
        cnpj: '47399144000126',
        atividades: 'Venda e Aluguel de Automóveis',
        endereco: [
          {
            cep: '54762303864564',
            number: '115',
            complemento: 'Muro A',
            isFilial: false
          }
        ]
      });
    expect(res.statusCode).toBe(400);
  });

  it('Test Route *Empty Fields*', async () => {
    const res = await supertest(app)
      .post('/api/v1/rental')
      .send({
        nome: '',
        cnpj: '',
        atividades: '',
        endereco: [
          {
            cep: '',
            number: '',
            complemento: '',
            isFilial: ''
          }
        ]
      });
    expect(res.statusCode).toBe(400);
  });

  it('Test Route Post *INVALD URL*', async () => {
    const res = await supertest(app)
      .post('/api/v1/locadora')
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
    expect(res.statusCode).toBe(404);
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
    const result = await supertest(app).get(`/api/v1/rental/620feec126c89d3240e6dfb2`);
    expect(result.statusCode).toBe(404);
  });

  it('Test Route Get ID *Invalid Id*', async () => {
    const result = await supertest(app).get(`/api/v1/rental/620ed097f744bb27b165d5a4invalid`);
    expect(result.statusCode).toBe(400);
  });

  it('Test Route Update', async () => {
    const result = await supertest(app).put(`/api/v1/rental/${rental.rent._id}`).send({
      nome: 'SLM Cars AutoPeças'
    });
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Update *INVALID URL*', async () => {
    const result = await supertest(app).put(`/api/v1/locadora/${rental.rent._id}`).send({
      nome: 'SLM Cars AutoPeças'
    });
    expect(result.statusCode).toBe(404);
  });

  it('Test Route Update *NOT FOUND*', async () => {
    const result = await supertest(app).put(`/api/v1/rental/620feec126c89d3240e6dfb2`).send({
      nome: 'SLM Cars AutoPeças'
    });
    expect(result.statusCode).toBe(404);
  });

  it('Test Route Update *INVALID ID*', async () => {
    const result = await supertest(app).put(`/api/v1/rental/620feec126c89d3240e6dfb2invalidd`).send({
      nome: 'SLM Cars AutoPeças'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route Delete', async () => {
    const result = await supertest(app).delete(`/api/v1/rental/${rental.rent._id}`);
    expect(result.statusCode).toBe(204);
  });

  it('Test Route Delete *Invalid Id*', async () => {
    const result = await supertest(app).delete(`/api/v1/rental/620ecf87f744bb27b165d599dd`);
    expect(result.statusCode).toBe(400);
  });
});
