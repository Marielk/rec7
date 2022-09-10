import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import "@fontsource/krub"
import '@fortawesome/react-fontawesome'
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Works from './pages/works.js';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portafolio" element={<Works />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
