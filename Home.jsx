import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setData(res.data);
    });
  }, []);

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      setData(data.filter((user) => user.id !== id));
    });
  }

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <Link to="/create">
        <button className="submit-btn">Create New</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <button className="action-btn">Edit</button>
                </Link>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
