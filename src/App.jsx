import Home from "./pages/Home";
import "./index.css";
import DashBoard from "./pages/DashBoard";
import Shell from "./layouts/Shell";
import Workouts from "./pages/Workouts";
import Plans from "./pages/Plans";
//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutCard from "./components/Workouts/WorkoutCard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Shell />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/plans" element={<Plans />} /> 
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
// after this try to learn using the dynamic routing skills to route dynamically
// like using useparams
// appright for backend
