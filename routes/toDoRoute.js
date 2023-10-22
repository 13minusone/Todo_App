const express = require("express");
const {
    getTasks,
    createTask,
    getSingleTasks,
    updateTask,
    deleteTask,
}= require("../controllers/ToDoControllers");

const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").patch(updateTask).get(getSingleTasks).delete(deleteTask);

module.exports = router;