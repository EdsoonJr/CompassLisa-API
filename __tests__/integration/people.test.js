const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const PeopleService = require('../../src/app/service/PeopleService');

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

  it('Test Route  Post *Already in use CPF*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '00840974000',
      data_nascimento: '26/03/2003',
      email: 'neymarjrr@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *Already in use EMAIL*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '02072496012',
      data_nascimento: '26/03/2003',
      email: 'herbert@email.com',
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
      email: 'neymariemail@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });
  it('Test Route  Post *Invalid CPF LONG*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '03827704044465',
      data_nascimento: '26/03/2003',
      email: 'neymariemail@email.com',
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

  it('Test Route  Post *Invalid Password*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '68337121076',
      data_nascimento: '26/03/2003',
      email: 'neymarjrpw@email.com',
      senha: '65432',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *Invalid DATE*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '18932501050',
      data_nascimento: '26/03/2022',
      email: 'neymardate@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *No EMPTY CPF*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '',
      data_nascimento: '26/03/2003',
      email: 'neymarempt@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *No EMPTY Email*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '77822719084',
      data_nascimento: '26/03/2003',
      email: '',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });
  it('Test Route  Post *No EMPTY DATE*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: 'Neymar o Brabo',
      cpf: '77822719084',
      data_nascimento: '',
      email: 'neymarempt@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *No EMPTY ALL*', async () => {
    const result = await supertest(app).post('/api/v1/people').send({
      nome: '',
      cpf: '',
      data_nascimento: '',
      email: '',
      senha: '',
      habilitado: ''
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route Get', async () => {
    const result = await supertest(app).get('/api/v1/people');
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Get *QUERY PARAMS*', async () => {
    const result = await supertest(app).get('/api/v1/people?cpf=00840974000');
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Get *Invalid URL*', async () => {
    const result = await supertest(app).get('/api/v1/pessoas');
    expect(result.statusCode).toBe(404);
  });

  it('Test Route Get ID', async () => {
    const result = await supertest(app).get(`/api/v1/people/${people.ppl._id}`);
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Get ID *People Not Found *', async () => {
    const result = await supertest(app).get('/api/v1/people/620ee325f362964e98f88a6c');
    expect(result.statusCode).toBe(404);
  });

  it('Test Route Get ID *Invalid ID*', async () => {
    const result = await supertest(app).get('/api/v1/people/620ecc92f744bb27b165invalid');
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

  it('Test Route Delete', async () => {
    const result = await supertest(app).delete(`/api/v1/people/${people.ppl._id}`);
    expect(result.statusCode).toBe(204);
  });

  it('Test Route Delete *Invalid Id*', async () => {
    const result = await supertest(app).delete(`/api/v1/people/620ecc92f744bb27b165invalid`);
    expect(result.statusCode).toBe(400);
  });

  it('Test Route Authentication', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: 'neymar@email.com',
      senha: '654321'
    });
    expect(result.statusCode).toBe(200);
  });
});
