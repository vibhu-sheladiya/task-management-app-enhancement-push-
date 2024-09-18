// src/Task.js
import React from 'react';

const Task = ({ task, onAssign }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <button onClick={() => onAssign(task)}>Assign</button>
      {/* Other task details */}
    </div>
  );
};

export default Task;
