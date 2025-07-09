// to handle all the inputs for the logworkout
import Button from "../../components/Buttons";
import { Plus, ClipboardList, FolderPlus } from "lucide-react";
function ExercisesForm({
  exerciseName,
  setExerciseName,
  reps,
  setReps,
  lbs,
  setLbs,
  onAddSet,
}) {
  return (
    <div className="form">
      <h3 className="section-title">Exercise</h3>
      <input
        className="log-input"
        type="text"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
        placeholder="Squat, Bench Press..."
      />

      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          className="log-input"
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder="Reps"
        />
        <input
          className="log-input"
          type="number"
          value={lbs}
          onChange={(e) => setLbs(e.target.value)}
          placeholder="Lbs"
        />
      </div>
      <Button className="button--secondary" onClick={onAddSet}>
        {" "}
        <Plus />
        Add Set
      </Button>
    </div>
  );
}
export default ExercisesForm;
