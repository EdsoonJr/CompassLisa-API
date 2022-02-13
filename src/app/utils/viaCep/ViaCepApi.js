const axios = require('axios');

class ViaCepApi {

  async findCep(cep) {
    const retorno = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    return retorno.data;
  }
}
module.exports = new ViaCepApi;