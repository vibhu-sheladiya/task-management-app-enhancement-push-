// const admin = require('firebase-admin');
// const serviceAccount = require('./servicefirebase.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });


// const db = firebase.firestore();
// const Task = db.collection("task");
// module.exports = Task;

const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

// Mock database module
const db = require("../config");

// Function to send a push notification to the task creator and assignees
async function sendPushNotification(taskId, comment) {
    try {
        const task = await db.getTaskById(taskId);
        const userIds = [task.creatorId, ...task.assignees]; // Get creator and assignees

        // Iterate over each user involved in the task
        for (const userId of userIds) {
            const user = await db.getUserById(userId); // Fetch user details
            if (user.deviceToken) {
                // Construct the notification message
                const message = {
                    notification: {
                        title: `New Comment on Task: ${task.title}`,
                        body: `${comment.user.name}: ${comment.text}`,
                    },
                    token: user.deviceToken, // FCM token for the user’s device
                };

                // Send notification using Firebase Admin SDK
                await admin.messaging().send(message);
                console.log('Notification sent successfully to', user.name);
            }
        }
    } catch (error) {
        console.error('Error sending push notification:', error);
    }
}

module.exports = { sendPushNotification };
