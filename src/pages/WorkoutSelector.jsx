//import { useState } from "react";
import Button from "../components/Buttons";
import "../App.css";
import { useNavigate } from "react-router-dom";

function WorkoutSelector() {
  const navigate = useNavigate();
  return (
    <div className="selector-container">
      <h1> CHOOSE WORKOUT </h1>
      <Button>Weight Lifting</Button>
      <Button>Running</Button>
      <a href="#" className="previous" onClick={() => navigate("/")}>
        &#8249; back
      </a>
    </div>
  );
}
export default WorkoutSelector;
// make the buttons an array using react dynamic router or just a simple array where you can add more later.
// make the button sizes same. not one small and one big (fixed size for all the words)
