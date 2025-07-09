// shows the sets added for the current exercises

function SetList({ sets }) {
  if (!sets || sets.length === 0) return null;
  return (
    <div className="set-list-container">
      <h2>Current Set</h2>
      <div className="set-list">
        {sets.map((set, index) => (
          <p key={index}>
            <b>Set {index + 1}</b>: {set.lbs} Lbs for {set.reps} Reps
          </p>
        ))}
      </div>
    </div>
  );
}
export default SetList;
