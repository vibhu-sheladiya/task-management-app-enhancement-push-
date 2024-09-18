// src/Comments.js
import React, { useEffect, useState } from 'react';
import socket from './socket';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    socket.on('commentUpdate', (comment) => {
      setComments((prevComments) => [...prevComments, comment]);
    });

    // Clean up the listener on component unmount
    return () => {
      socket.off('commentUpdate');
    };
  }, []);

  return (
    <div>
      {/* Render comments */}
    </div>
  );
};

export default Comments;

