const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    const db = 'mongodb://127.0.0.1:27017/compasslisa_tests';
    return mongoose.connect(db);
  }
}

module.exports = new Database().connect();
