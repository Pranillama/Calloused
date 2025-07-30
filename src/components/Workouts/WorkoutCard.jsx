// for the saved workouts

import { Calendar, Clock, Edit, Trash2 } from 'lucide-react';
import '../../css/WorkoutCard.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

export default function WorkoutCard({ workout, onEdit, onDelete }) {
  return (
    <div className="workout-card">

      <div className="workout-card-content">

        {/* workout header: title, date, duration, badges, edit button */}
        <div className="workout-header">

            {/* workout info: title, date, duration */}
          <div className="workout-info">
            {/* workout title */}
            <h3 className="workout-title">{workout.title}</h3>
            {/* workout meta: date and duration */}
            <div className="workout-meta">
              <div className="meta-item">
                <Calendar className="meta-icon" />
                {formatDate(workout.date)}
              </div>
              <div className="meta-item">
                <Clock className="meta-icon" />
                {workout.duration} min
              </div>
            </div>
          </div>

          {/* workout badges: types and mood */}
          <div className="workout-badges">
            <span className={`workout-badge workout-type-${workout.type}`}>
              {workout.type}
            </span>
            {workout.mood && (
              <span className={`workout-badge workout-mood-${workout.mood}`}>
                {workout.mood}
              </span>
            )}
            {/* edit button */}
            <button 
              className="edit-btn"
              onClick={() => onEdit(workout)}
            >
              <Edit size={16} />
            </button>
            {/* delete button */}
            <button 
              className="delete-btn"
              onClick={() => onDelete(workout)}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* exercises section: list of exercises */}
        {workout.exercises && workout.exercises.length > 0 && (
          <div className="exercises-section">
            <h4 className="exercises-title">Exercises</h4>
            {/* exercises NAME AND INFO */}
            <div className="exercises-list">
              {workout.exercises.map((exercise, index) => (
                <div key={index} className="exercise-row">
                  <span className="exercise-name">{exercise.name}</span>
                  {/* exercise details: sets, reps, weight */}
                  <span className="exercise-details">
                    {exercise.sets && `${exercise.sets} sets`}
                    {exercise.reps && ` × ${exercise.reps} reps`}
                    {exercise.weight && ` @ ${exercise.weight}lbs`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* notes section: notes */}
        {workout.notes && (
          <div className="workout-notes">
            <p>{workout.notes}</p>
          </div>
        )}
      </div>

    </div>
  );
}