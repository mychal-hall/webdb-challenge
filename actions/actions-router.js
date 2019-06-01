const express = require("express");

const Actions = require("./actions-model.js");

const router = express.Router();

// Adds a new action to the database. -- POST /api/actions
router.post("/", validateAction, async (req, res) => {
  try {
    const action = await Actions.addAction(req.body);
    res.status(201).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding a new action. Sorry." });
  }
});

// Custom middleware forcing required fields for POST
function validateAction(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    if (req.body.name !== "" && req.body.project_id !== 0) {
      next();
    } else {
      res
        .status(400)
        .json({
          message: "Plase name the action and make sure it has a project id"
        });
    }
  } else {
    res.status(500).json({ message: "Nope. Did not work." });
  }
}

// export router
module.exports = router;
