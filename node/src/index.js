const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const { sendPushNotification } = require("./services/notificationService");
const taskController = require("./controllers/taskController");

const app = express();
const server = http.createServer(app); // Create HTTP server for Socket.io
const io = socketIo(server); // Initialize Socket.io

// Middleware
app.use(express.json());
app.use(cors());

// Define Routes (REST API)
app.get("/", taskController.getAllTasks);
app.post("/create", taskController.createTask);
app.post("/update", taskController.updateTask);
app.post("/delete", taskController.deleteTask);

// Socket.io connection for real-time updates
io.on('connection', (socket) => {
    console.log('New client connected');

    // Event listener for new comments
    socket.on('new_comment', (taskId, comment) => {
        // Broadcast the comment to all users involved in the task
        io.emit(`task_${taskId}_comment`, comment);

        // Send push notifications to involved users
        sendPushNotification(taskId, comment);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
server.listen(4000, () => {
    console.log("Server running on port 4000");
});
