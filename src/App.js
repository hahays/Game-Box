import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/pages/HomePage/HomePage";
import GamePage from "./containers/pages/GamePage/GamePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/app/:title" element={<GamePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
