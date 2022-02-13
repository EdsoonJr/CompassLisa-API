const rentalRepository = require('../repository/rentalRepository');
const ViaCepApi = require('../utils/viaCep/ViaCepApi');

class RentalService{

  async create(payload, data){

    for (let index = 0; index < payload.endereco.length; index++) {
      
      const ceps = payload.endereco;
      const address = ceps[index];
      const dados = await ViaCepApi.findCep(address.cep);
      const { cep, logradouro, complemento, bairro, localidade, uf } = dados;

      address.cep = cep;
      address.logradouro = logradouro;
      address.complemento = complemento;
      address.bairro = bairro;
      address.localidade = localidade;
      address.uf = uf;  
    }
  
    const newRental = await rentalRepository.create(payload, data);
    return newRental;
  }

  async find(payload){
    const allRentals = await rentalRepository.find(payload);
    return allRentals;
  }

  async findOne(payload){
    const oneRental = await rentalRepository.findOne(payload);
    return oneRental;
  }

  async update(id, payload){
    const updatedPeople = await rentalRepository.update(id, payload);
    return updatedPeople;
  }

  async delete(payload){
    return rentalRepository.delete(payload);    
  }
}

module.exports = new RentalService;