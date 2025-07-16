import Home from "./pages/Home";
import "./App.css";
import WorkoutSelector from "./pages/WorkoutSelector";
import DashBoard from "./pages/DashBoard";
import Shell from "./layouts/Shell";

//routes import for weightlifting pages
import WeightRoom from "./pages/Weightlifting/WeightRoom";
import LogWeightLifting from "./pages/Weightlifting/LogWeightLifting";
import Save from "./pages/Weightlifting/Save";

import RunningLog from "./pages/RunningLog";

//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Shell />}>
          <Route path="/workout" element={<WorkoutSelector />} />
          <Route path="/dashboard" element={<DashBoard />} />

          {/*WeightLifting Section*/}
          <Route path="/weightlifting" element={<WeightRoom />} />
          <Route path="/weightlifting/log" element={<LogWeightLifting />} />
          <Route path="/weightlifting/save" element={<Save />} />

          {/*Running Section*/}
          <Route path="/running" element={<RunningLog />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
// after this try to learn using the dynamic routing skills to route dynamically
// like using useparams
// appright for backend
