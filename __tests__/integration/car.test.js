const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../dbTest/database/app');
const PeopleService = require('../../src/app/service/PeopleService');
const CarService = require('../../src/app/service/CarService');

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

  it('Test Route  Post *UNAUTHORIZED*', async () => {
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
      });
    expect(result.statusCode).toBe(401);
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
        ano: '2021',
        acessorios: [],
        quantidadePassageiros: 5
      })
      .set('authorization', `Bearer ${token}`);

    expect(result.statusCode).toBe(400);
  });

  it('Test Route  Post * DESCRIPTIONS DUPLICATED*', async () => {
    const result = await supertest(app)
      .post('/api/v1/car')
      .send({
        modelo: 'Honda City ',
        cor: 'Azul',
        ano: '2021',
        acessorios: [
          {
            descricao: 'Dir. elétrica'
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

  it('Test Route  Post *EMPTY FIELDS*', async () => {
    const result = await supertest(app)
      .post('/api/v1/car')
      .send({
        modelo: '',
        cor: '',
        ano: '',
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

  it('Teste Route Get *UNAUTHORIZED*', async () => {
    const result = await supertest(app).get('/api/v1/car');
    expect(result.statusCode).toBe(401);
  });

  it('Teste Route Get *INVALID URL*', async () => {
    const result = await supertest(app).get('/api/v1/caroos').set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(404);
  });

  it('Teste Route Get *GET ID*', async () => {
    const result = await supertest(app).get(`/api/v1/car/${car.cr._id}`).set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(200);
  });

  it('Teste Route Get *CAR NOT FOUND*', async () => {
    const result = await supertest(app)
      .get('/api/v1/car/620ece54f744bb27b165d527')
      .set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(404);
  });

  it('Teste Route Get *INVALID ID*', async () => {
    const result = await supertest(app)
      .get('/api/v1/car/620ece54f744bb27b165d527invalid')
      .set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(400);
  });

  it('Test Route Update', async () => {
    const result = await supertest(app)
      .put(`/api/v1/car/${car.cr._id}`)
      .send({
        modelo: 'Range Rover ',
        cor: 'Preta',
        ano: '2020'
      })
      .set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(200);
  });

  it('Test Route Update  *UNAUTHORIZED*', async () => {
    const result = await supertest(app).put(`/api/v1/car/${car.cr._id}`).send({
      modelo: 'Range Rover ',
      cor: 'Preta',
      ano: '2020'
    });
    expect(result.statusCode).toBe(401);
  });

  it('Test Route Delete', async () => {
    const result = await supertest(app).delete(`/api/v1/car/${car.cr._id}`).set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(204);
  });

  it('Test Route Delete *INVALID ID*', async () => {
    const result = await supertest(app)
      .delete(`/api/v1/car/620ece54f744bb27b165d527invaliddd`)
      .set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(400);
  });

  it('Test Route Delete *NOT FOUND DEL*', async () => {
    const result = await supertest(app)
      .delete(`/api/v1/car/620ece54f744bb27b165d527`)
      .set('authorization', `Bearer ${token}`);
    expect(result.statusCode).toBe(404);
  });

  it('Test Route Delete *UNAUTHORIZED*', async () => {
    const result = await supertest(app).delete(`/api/v1/car/${car.cr._id}`);
    expect(result.statusCode).toBe(401);
  });
});
