const BaseModel = require('../models/BaseModel.js');

module.exports = class Genre extends BaseModel {
  constructor(name) {
    super('Genre', name);
  }
}
