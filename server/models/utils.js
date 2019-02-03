const neo4j = require('neo4j-driver').v1,
      driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic(process.env.NEO_USER, process.env.NEO_PW)),
      session = driver.session();

module.exports = session;
