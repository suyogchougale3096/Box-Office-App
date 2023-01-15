import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/starred" element={<Starred />} />
        </Routes>
      </div>
    );
  }
}

export default App;
