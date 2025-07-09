import "../../App.css";
import { useState } from "react";
import Button from "../../components/Buttons";
import { Plus, ClipboardList, FolderPlus } from "lucide-react";

import ExercisesForm from "../../components/LogWeightLifting/ExerciseForm";
import SetList from "../../components/LogWeightLifting/SetList";
import WorkoutHistory from "../../components/LogWeightLifting/WorkoutHistory";
import FinishWorkout from "../../components/LogWeightLifting/FinishWorkout";

function LogWeightLifting() {
  const [exerciseName, setExerciseName] = useState("");
  const [reps, setReps] = useState("");
  const [lbs, setLbs] = useState("");
  const [currentSets, setCurrentSets] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);

  //event handlers
  const handleAddSet = () => {
    if (!reps || !lbs) return;
    setCurrentSets([...currentSets, { reps, lbs }]);
    setReps("");
    setLbs("");
  };

  const handleAddWorkout = () => {
    if (!exerciseName || currentSets.length === 0) return;
    const newWorkout = {
      name: exerciseName,
      sets: currentSets,
      date: new Date().toISOString().split("T")[0],
    };
    setWorkoutHistory([...workoutHistory, newWorkout]);
    setExerciseName("");
    setCurrentSets([]);
  };

  return (
    <div className="log-container">
      <h1>Log Workouts</h1>
      <ExercisesForm
        exerciseName={exerciseName}
        setExerciseName={setExerciseName}
        reps={reps}
        setReps={setReps}
        lbs={lbs}
        setLbs={setLbs}
        onAddSet={handleAddSet}
      />
      <SetList sets={currentSets} />
      <Button className="button--primary" onClick={handleAddWorkout}>
        <Plus />
        Add Exercise
      </Button>
      <WorkoutHistory history={workoutHistory} />
      <FinishWorkout workoutHistory={workoutHistory} />
    </div>
  );
}
export default LogWeightLifting;
// check the buttons as you messed up
// style the each section mainly"add workout section
