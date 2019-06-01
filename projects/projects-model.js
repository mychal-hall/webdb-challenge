const knex = require("knex");
const config = require("../knexfile.js");

const db = knex(config.development);

module.exports = {
  getProjects,
  getProjectById,
  addProject
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db
    .select("projects.id", "projects.name as project", "actions.name as action")
    .from("projects")
    .leftJoin("actions", "projects.id", "actions.project_id")
    .where("projects.id", Number(id));
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}
