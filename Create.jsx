import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [value, setValue] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  function handleCreate() {
    if (value.name && value.email) {
      axios.post(`http://localhost:3000/users`, value)
        .then(() => navigate("/"));
    } else {
      alert("Please enter both name and email");
    }
  }

  return (
    <div className="form-container">
      <h2>Create User</h2>
      <input
        placeholder="Enter Your Name"
        name="name"
        onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
        className="input-field"
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        name="email"
        onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
        className="input-field"
      />
      <button onClick={handleCreate} className="submit-btn">Create</button>
    </div>
  );
};

export default Create;
