// src/NotificationManager.js
import React, { useEffect } from 'react';
import { messaging, getToken, onMessage } from './firebase';

const NotificationManager = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const token = await getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
        console.log('FCM Token:', token);
        // Send the token to your server or save it for future use
      } catch (error) {
        console.error('Error getting FCM token', error);
      }
    };

    requestPermission();

    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // Customize how you handle the notification
    });
  }, []);

  return null;
};

export default NotificationManager;
