import Home from "./pages/Home";
import "./App.css";
import WorkoutSelector from "./pages/WorkoutSelector";
//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<WorkoutSelector />} />
      </Routes>
    </Router>
  );
}
export default App;
// after this try to learn using the dynamic routing skills to route dynamically
// like using useparams
