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
