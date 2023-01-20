import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Starred";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/starred" element={<Starred />} />
          <Route exact path="/show/:id" element={<Show />} />
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
