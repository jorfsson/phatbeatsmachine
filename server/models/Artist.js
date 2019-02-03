const BaseModel = require('../models/BaseModel.js');

module.exports = class Artist extends BaseModel {
  constructor(name) {
    super('Artist', name);
  }
}
