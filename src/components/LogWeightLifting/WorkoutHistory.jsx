// show saved workouts
function WorkoutHistory({ history }) {
  if (!history || history.length === 0) return null;
  return (
    <div className="workout-history-container">
      <h2>Workout History</h2>
      <div className="workout-scroll-area">
        {history.map((workout, idx) => (
          <div key={idx} className="workout-card">
            <strong>{workout.date}</strong> {workout.name}
            <ul>
              {workout.sets.map((set, i) => (
                <li key={i}>
                  <b>Set {i + 1}</b>: {set.lbs} Lbs for {set.reps} Reps
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WorkoutHistory;
