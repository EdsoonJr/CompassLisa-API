const peopleService = require('../service/peopleService');
const ErrorsMessages = require('../utils/Errors/ErrorsMessages');

class PeopleController {
  async insertPeople(req, res) {
    try {
      const newPeople = await peopleService.create(req.body);
      return res.status(201).json({ Pessoa: newPeople });
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async getAllPeoples(req, res) {
    try {
      const allPeoples = await peopleService.find(req.query);
      return res.status(200).json(allPeoples);
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async findOnePeople(req, res) {
    try {
      const { id } = req.params;
      const onePeople = await peopleService.findOne({ _id: id });

      if (!onePeople) {
        return ErrorsMessages.notFound(res, 'People Not Found');
      }

      return res.status(200).json({ Pessoa: onePeople });
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async updatePeople(req, res) {
    const { id } = req.params;
    const reqPeople = req.body;

    try {
      const onePeople = await peopleService.findOne({ _id: id });
      if (!onePeople) {
        return ErrorsMessages.notFound(res, 'People Not Found');
      }

      const updatedPeople = await peopleService.update(id, reqPeople);
      return res.status(200).json(updatedPeople);
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async deletePeople(req, res) {
    try {
      const { id } = req.params;
      const onePeople = await peopleService.findOne({ _id: id });

      if (!onePeople) {
        return ErrorsMessages.notFound(res, 'People Not Found');
      }

      await peopleService.delete({ _id: id });
      return res.status(204).json();
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }
}

module.exports = new PeopleController();
