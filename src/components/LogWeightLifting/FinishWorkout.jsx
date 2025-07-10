import { useNavigate } from "react-router-dom";

function FinishWorkout({ workoutHistory }) {
  const navigate = useNavigate();

  const handleFinish = () => {
    if (workoutHistory.length === 0) return;
    navigate("/weightlifting/save");
  };

  return (
    <button className="button--small" onClick={handleFinish}>
      Done
    </button>
  );
}

export default FinishWorkout;
