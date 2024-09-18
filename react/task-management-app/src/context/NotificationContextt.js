// import React, { createContext, useEffect, useState } from 'react';
// // import io from 'socket.io-client';

// // const socket = io('http://localhost:5000'); // or your server address

// export const NotificationContext = createContext();

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     socket.on('notification', (notification) => {
//       setNotifications((prevNotifications) => [...prevNotifications, notification]);
//     });

//     return () => {
//       socket.off('notification');
//     };
//   }, []);

//   return (
//     <NotificationContext.Provider value={{ notifications }}>
//       {children}
//     </NotificationContext.Provider>
//   );
// };
