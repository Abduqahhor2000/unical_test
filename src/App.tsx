import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InputAndOutput from "./components/InputAndOutput";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/table" element={<InputAndOutput />} />
          </Route>
          <Route path="*" element={<>Sen juda qattiq adashding!</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
