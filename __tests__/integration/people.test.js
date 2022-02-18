const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const PeopleService = require('../../src/app/service/peopleService');

const people = {};

describe('Test of all people routes', () => {
  beforeAll(async () => {
    people.ppl = await PeopleService.create({
      nome: 'Herbert Richers',
      cpf: '00840974000',
      data_nascimento: '26/03/2003',
      email: 'herbert@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Test Route  Post', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '03827704049',
      data_nascimento: '26/03/2003',
      email: 'neymar@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(201);
  });

  it('Test Route  Post *Already exist CPF*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '03827704049',
      data_nascimento: '26/03/2003',
      email: 'neymar@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *Invalid CPF*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '03827704044',
      data_nascimento: '26/03/2003',
      email: 'neymar@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *Invalid EMAIL*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '03827704049',
      data_nascimento: '26/03/2003',
      email: 'neymaremail.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route Get', async () => {
    const result = await supertest(app).get('/api/v1/people');
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Get ID', async () => {
    const result = await supertest(app).get(`/api/v1/people/${people.ppl._id}`);
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Get ID *Invalid ID*', async () => {
    const result = await supertest(app).get(`/api/v1/people/620ecc92f744bb27b165d505hh`);
    expect(result.statusCode).toBe(400);
  });

  it('Test Route Update', async () => {
    const result = await supertest(app).put(`/api/v1/people/${people.ppl._id}`).send({
      nome: 'Ronelson Beckerd',
      cpf: '26984819008',
      data_nascimento: '26/03/2003',
      email: 'ronelson@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Authentication', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: 'neymar@email.com',
      senha: '654321'
    });
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Delete', async () => {
    const result = await supertest(app).delete(`/api/v1/people/${people.ppl._id}`);
    expect(result.statusCode).toBe(204);
  });
});
