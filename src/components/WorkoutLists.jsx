//import { useState } from "react";
import "../App.css";
import Button from "../components/Buttons";
import { useNavigate } from "react-router-dom";

function WorkoutLists() {
  const navigate = useNavigate();
  //regular array for now
  const workouts = [
    { name: "Weight Lifting", Route: "/weightlifting" },
    { name: "Running", Route: "/running" },
  ];
  // this is a react way of rendering the lists in array( need key)
  return (
    <div className="workout-lists">
      {workouts.map((workout, index) => (
        <Button key={index} onClick={() => navigate(workout.Route)}>
          {workout.name}
        </Button>
      ))}
    </div>
  );
}

export default WorkoutLists;
