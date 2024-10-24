import React from 'react';
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
    const status = 200

    const navigate = useNavigate()

    const onClick = () => {
        console.log('clicked')
        navigate('/about')
    }

    if (status === 400) {
        return <Navigate to="/notfound" />
    }

  return (
    <div>
      <h1>POST</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default Post;
