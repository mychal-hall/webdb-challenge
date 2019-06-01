const knex = require("knex");
const config = require("../knexfile.js");

const db = knex(config.development);

module.exports = {
  getProjects,
  addProject
};

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}
