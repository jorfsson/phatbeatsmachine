const neo4j = require('neo4j-driver').v1,
      driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic(process.env.NEO_USER, process.env.NEO_PW));

module.exports = class Artist {
  constructor(name) {
    this.name = name;
    let session = driver.session();

    session
      .run(`MERGE (t:Artist {name: "${name}"}) RETURN t`)
      .then(res => {
        session.close();
      })
      .catch(err => {
        session.close();
        throw err;
      });
  }
  set(property, value) {
    session.run(`
      MATCH (a:Artist {name: "${this.name}"})
      SET a.${property} = "${value}"
      RETURN a.name, a.property$`
    )
    .then(res => {
      session.close();
    })
    .catch(err => {
      session.close();
      throw err;
    });
  }
  async get(property) {
    let session = driver.session();

    return await session.run(
      `MATCH (a:Artist {name: "${this.name}"})
      RETURN a.${property}`
    )
    .then(res => {
      session.close();
      return res;
    })
    .catch(err => {
      session.close();
      throw err;
    });
  }
  addRelationship(type, key, value, relationship) {
    let session = driver.session();

    return session.run(
      `MATCH (a:Artist {name: "${this.name}"})
      MERGE (b:${type} {${key}: "${value}"})
      MERGE (a)-[r:${relationship}]->(b)
      RETURN r`
    )
    .then(res => {
      session.close();
      return res;
    })
    .catch(err => {
      session.close();
      throw err;
    });
  }
}

driver.close();
