import { useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = (onNewTask) => {
    useEffect(() => {
        const socket = io("http://localhost:4000"); // Your server URL

        socket.on("taskCreated", (task) => {
            onNewTask(task);
        });

        return () => socket.disconnect();
    }, [onNewTask]);
};

export default useSocket;
