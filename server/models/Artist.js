const session = require('./utils.js');

module.exports = class Artist {
  constructor(name) {
    this.name = name;
    session
      .run(`MERGE (t:Artist {name: "${name}"}) RETURN t`)
      .then(res => {
        session.close();
      })
      .catch(err => console.log(err));
  }
  set(property, value) {
    session.run(`
      MATCH (a:Artist {name: "${this.name}"})
      SET a.${property} = "${value}"
      RETURN a.name, a.property$`)
    .then(res => {
      console.log(res);
    })
  }
  async get(property) {
    return await session.run(
      `MATCH (a:Artist {name: "${this.name}"})
      RETURN a.${property}`
    )
    .then(res => {
      session.close();
      return res;
    })
    .catch(err => console.log(err));
  }
  addRelationship(type, key, value, relationship) {
    session.run(
      `MATCH (a:Artist {name: "${this.name}"})
      MERGE (b:${type} {${key}: "${value}"})
      MERGE (a)-[r:${relationship}]->(b)
      RETURN r`
    )
    .then(res => {
      console.log(res);
      session.close();
    })
    .catch(err => console.log(err));
  }
}
