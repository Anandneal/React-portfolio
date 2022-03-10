import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Homepage from "./components/HomePage/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
