// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "AIzaSyCAwtlj9MpDfusTpaqT-i1y600uG_5jDvY",
  authDomain: "tasktodo-50af1.firebaseapp.com",
  projectId: "tasktodo-50af1",
  storageBucket:"tasktodo-50af1.appspot.com",
  messagingSenderId: "209819329960",
  appId: "1:209819329960:web:eebbad234f5c93ed68299d",
  measurementId: "G-P887JY0S04"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
