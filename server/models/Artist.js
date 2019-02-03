const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic(process.env.NEO_USER, process.env.NEO_PW));

module.exports = class Artist {
  constructor(name) {
    const session = driver.session();
    this.name = name;
    session
      .run(`MERGE (a:Artist {name: "$name"}) RETURN a`, { name })
      .then(() => {
        session.close();
      })
      .catch((err) => {
        session.close();
        throw err;
      });
  }

  set(props) {
    const session = driver.session();

    session.run(`MATCH (a:Artist {name: "${this.name}"}) SET a = $props RETURN a`, { props })
      .then(() => {
        session.close();
      })
      .catch((err) => {
        session.close();
        throw err;
      });
  }

  async get(prop) {
    const session = driver.session();

    await session.run(`MATCH (a:Artist {name: "${this.name}"}) RETURN a.${prop}`)
      .then(() => {
        session.close();
      })
      .catch((err) => {
        session.close();
        throw err;
      });
  }

  async addRelationship(type, key, value, relationship) {
    const session = driver.session();
    await session.run(
      `MATCH (a:Artist {name: "${this.name}"})
      MERGE (b:${type} {${key}: "${value}"})
      MERGE (a)-[r:${relationship}]->(b)
      RETURN r`,
    )
      .then(() => {
        session.close();
      })
      .catch((err) => {
        session.close();
        throw err;
      });
  }
};

driver.close();
