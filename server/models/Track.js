const BaseModel = require('../models/BaseModel.js');

module.exports = class Track extends BaseModel {
  constructor(name) {
    super('Track', name);
  }
}
