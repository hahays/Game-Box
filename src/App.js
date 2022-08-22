import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "./redux";
import Header from "./containers/Header/Header";
import HomePage from "./containers/pages/HomePage/HomePage";
import GamePage from "./containers/pages/GamePage/GamePage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/app/:title" element={<GamePage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
