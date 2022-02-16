const mongoose = require('mongoose');
require('dotenv/config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    const db = process.env.DATABASE || 'mongodb://127.0.0.1:27017/compasslisa';
    return mongoose.connect(db);
  }
}

module.exports = new Database().connect();
