const Task = require("../config");

// Controller function to get all tasks
const getAllTasks = async (req, res) => {
    try {
        const snapshot = await Task.get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(list);
    } catch (error) {
        res.status(500).send({ error: "Error fetching tasks" });
    }
};

// Controller function to create a task
const createTask = async (req, res) => {
    try {
        const data = req.body;
        await Task.add({ data });
        res.status(201).send({ msg: "Task Added" });
    } catch (error) {
        res.status(500).send({ error: "Error adding task" });
    }
};

// Controller function to update a task
const updateTask = async (req, res) => {
    try {
        const id = req.body.id;
        delete req.body.id;
        const data = req.body;
        await Task.doc(id).update(data);
        res.status(200).send({ msg: "Task Updated" });
    } catch (error) {
        res.status(500).send({ error: "Error updating task" });
    }
};

// Controller function to delete a task
const deleteTask = async (req, res) => {
    try {
        const id = req.body.id;
        await Task.doc(id).delete();
        res.status(200).send({ msg: "Task Deleted" });
    } catch (error) {
        res.status(500).send({ error: "Error deleting task" });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
};
