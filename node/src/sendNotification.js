const sendPushNotification = (token, message) => {
    const payload = {
      notification: {
        title: message.title,
        body: message.body,
      },
      token: token, // FCM device token
    };
  
    admin.messaging().send(payload)
      .then(response => {
        console.log('Notification sent successfully:', response);
      })
      .catch(error => {
        console.error('Error sending notification:', error);
      });
  };
  