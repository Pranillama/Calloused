import "../../App.css";
import Button from "../../components/Buttons";
import { Plus, ClipboardList, FolderPlus } from "lucide-react";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WeightRoom() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Weight Room</h1>
      <div className="card">
        <h2 className="quick-start">Quick Start</h2>
        <Button
          className="button--secondary"
          onClick={() => navigate("/weightlifting/log")}
        >
          <Plus />
          Log a Workout
        </Button>
        <h2 className="routines">
          Routines
          <FolderPlus />
        </h2>
        <Button className="button--secondary" onClick={() => navigate("/")}>
          <ClipboardList />
          New Routine
        </Button>
      </div>
    </div>
  );
}
export default WeightRoom;
//use card to show the details enteried
