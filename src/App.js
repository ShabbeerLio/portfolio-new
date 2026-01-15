import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Pages/About/About";
import Topbar from "./Components/Topbar/Topbar";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-main">
          <Sidebar />
          <div className="pages">
            <Topbar />
            <Routes>
              <Route path="/" exact element={<About />} />
              <Route path="/resume" exact element={<Resume />} />
              <Route path="/projects" exact element={<Portfolio />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
