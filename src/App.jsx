// src/App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState({ name: "", sets: "", reps: "" });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleAddWorkout = () => {
    if (workout.name && workout.sets && workout.reps) {
      setWorkouts([...workouts, workout]);
      setWorkout({ name: "", sets: "", reps: "" });
    }
  };

  return (
    <div className="app-container">
      <h1>🏋️ Calloused</h1>
      <div className="form">
        <input
          name="name"
          placeholder="Workout name (e.g. Push Ups)"
          value={workout.name}
          onChange={handleChange}
        />
        <input
          name="sets"
          placeholder="Sets"
          type="number"
          value={workout.sets}
          onChange={handleChange}
        />
        <input
          name="reps"
          placeholder="Reps"
          type="number"
          value={workout.reps}
          onChange={handleChange}
        />
        <button onClick={handleAddWorkout}>Add Workout</button>
      </div>

      <ul className="log">
        {workouts.map((w, index) => (
          <li key={index}>
            <strong>{w.name}</strong> — {w.sets} sets × {w.reps} reps
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
