import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthMain from "./containers/Auth/AuthMain";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthMain />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;
