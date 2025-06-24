import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const [value, setValue] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => setValue(res.data));
  }, [id]);

  function handleUpdate() {
    if (value.name && value.email) {
      axios.put(`http://localhost:3000/users/${id}`, value)
        .then(() => navigate("/"));
    } else {
      alert("Both fields required.");
    }
  }

  return (
    <div className="form-container">
      <h2>Edit User</h2>
      <input
        placeholder="Enter Your Name"
        name="name"
        value={value.name}
        onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
        className="input-field"
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        name="email"
        value={value.email}
        onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
        className="input-field"
      />
      <button onClick={handleUpdate} className="submit-btn">Update</button>
    </div>
  );
};

export default Edit;
