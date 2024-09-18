// src/TaskList.js
import React, { useEffect, useState } from 'react';
import socket from './socket';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.on('taskUpdate', (task) => {
      setTasks((prevTasks) => prevTasks.map(t => t.id === task.id ? task : t));
    });

    socket.on('newTask', (task) => {
      setTasks((prevTasks) => [...prevTasks, task]);
    });
// src/TaskList.js
const assignTask = (task) => {
    socket.emit('assignTask', task);
  };
  
    // Clean up the listener on component unmount
    return () => {
      socket.off('taskUpdate');
      socket.off('newTask');
    };
  }, []);

  return (
    <div>
      {/* Render tasks */}
    </div>
  );
};

export default TaskList;
