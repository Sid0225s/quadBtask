import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Showpage from "./components/Showpage/Showpage";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage searchQuery="all" />}></Route>
        <Route path="/description" element={<Showpage />}></Route>
        <Route path="/book" element={<Form />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
