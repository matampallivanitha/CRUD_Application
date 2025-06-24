import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./CRUDProject/Home";
import Create from "./CRUDProject/Create";
import Edit from "./CRUDProject/Edit";
import './App.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
