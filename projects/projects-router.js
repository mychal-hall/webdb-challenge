const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

// Lists all the projects in the database -- GET /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({
        messages: "The Projects were unreachable... did you turn it on?"
      });
  }
});

// export router
module.exports = router;
