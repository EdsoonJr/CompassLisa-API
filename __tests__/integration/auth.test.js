const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const peopleService = require('../../src/app/service/PeopleService');

const Auth = {};

describe('Test All Routes Auths', () => {
  beforeAll(async () => {
    Auth.ath = await peopleService.create({
      nome: 'Juinim do Token',
      cpf: '91945328002',
      data_nascimento: '26/03/2003',
      email: 'juinimtk2@email.com',
      senha: '654321',
      habilitado: 'sim'
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('Test Route  Post', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: 'juinimtk2@email.com',
      senha: '654321'
    });
    expect(result.statusCode).toBe(200);
  });

  it('Test Route  Post *USER NOT Found*', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: 'notfound@email.com',
      senha: '654321'
    });
    expect(result.statusCode).toBe(404);
  });

  it('Test Route  Post *Invalid URL*', async () => {
    const result = await supertest(app).post('/api/v1/authenticationnn').send({
      email: 'juinimtk2@email.com',
      senha: '654321'
    });
    expect(result.statusCode).toBe(404);
  });

  it('Test Route  Post *INVALID EMAIL*', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: 'juinimtemail.com',
      senha: '654321'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *INVALID SENHA*', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: 'juinimtk2@email.com',
      senha: '65'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *NO EMPTY EMAIL*', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: 'juinimtk2@email.com',
      senha: ''
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *NO EMPTY PW*', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: '',
      senha: '654321'
    });
    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post *NO EMPTY*', async () => {
    const result = await supertest(app).post('/api/v1/authenticate').send({
      email: '',
      senha: ''
    });
    expect(result.statusCode).toBe(400);
  });
});
