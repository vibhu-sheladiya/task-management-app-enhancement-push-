import firebase from "firebase/app";
import "firebase/messaging";

const messaging = firebase.messaging();

export const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        const token = await messaging.getToken();
        console.log("Notification token:", token);
        return token;
    }
};

export const onMessageListener = () => {
    return new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });
};
