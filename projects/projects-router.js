const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

// Lists all the projects in the database -- GET /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "The Projects were unreachable... did you turn it on?"
    });
  }
});

// Lists a project with a specific ID and it's associated actions -- GET /api/projects/:id
router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.getProjectById(req.params.id);
    if (project.length) {
      const actionsRelated = project.map(item => {
        const action = { name: item.action };
        return action;
      });
      const projectRelated = {
        id: project[0].id,
        name: project[0].project,
        actions: actionsRelated
      };
      res.status(200).json(projectRelated);
    } else {
      res.status(404).json({ message: "No project exists with that ID" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "The project could not be found. Is the server broken!?"
      });
  }
});

// Adds a project to the database -- POST /api/projects/
router.post("/", validateProject, async (req, res) => {
  try {
    const project = await Projects.addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to create a new project, rookie." });
  }
});

// Custome middleware to force proper fields when POSTing

function validateProject(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    if (req.body.name !== "") {
      next();
    } else {
      res.status(400).json({
        message:
          "Please name the project and assign whether or not it is completed"
      });
    }
  } else {
    res.status(500).json({
      message: "Critical Fail -- The NSA has been dispatched to your location"
    });
  }
}

// export router
module.exports = router;
