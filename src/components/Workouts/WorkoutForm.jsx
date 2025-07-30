import {useState} from "react";
import {Plus, Trash2, X, Save} from "lucide-react";
import "../../css/WorkoutForm.css";

export default function WorkoutForm({onSave, onCancel, initialData, isEditing}) {
    const [workoutData, setWorkoutData] = useState(() => {
        if (isEditing && initialData) {
            // Convert date from ISO string to YYYY-MM-DD format for form input
            const dateForInput = new Date(initialData.date).toISOString().split('T')[0];
            return {
                type: initialData.type.charAt(0).toUpperCase() + initialData.type.slice(1), // Capitalize first letter
                title: initialData.title,
                duration: initialData.duration.toString(),
                date: dateForInput,
                exercises: initialData.exercises || [],
                feeling: initialData.mood.charAt(0).toUpperCase() + initialData.mood.slice(1), // Capitalize first letter
                notes: initialData.notes || ''
            };
        } else {
            return {
                type: 'Weightlifting',
                title: '',
                duration: '',
                date: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
                exercises: [],
                feeling: 'Good',
                notes: ''
            };
        }
    });


    const workoutTypes = ['Weightlifting', 'Running', 'Swimming'];
    const feelingOptions = ['Excellent', 'Good', 'Okay', 'Tired', 'Struggled'];

    const handleInputChange = (field, value) => {
        setWorkoutData(prev => ({
          ...prev,
          [field]: value
        }));
      };
      const addExercise = () => {
        const newExercise = {
          id: Date.now(), // Simple ID for now
          name: '',
          sets: '',
          reps: '',
          weight: ''
        };
        setWorkoutData(prev => ({
          ...prev,
          exercises: [...prev.exercises, newExercise]
        }));
      };
      const removeExercise = (exerciseId) => {
        setWorkoutData(prev => ({
          ...prev,
          exercises: prev.exercises.filter(ex => ex.id !== exerciseId)
        }));
      };
      const updateExercise = (exerciseId, field, value) => {
        setWorkoutData(prev => ({
          ...prev,
          exercises: prev.exercises.map(ex => 
            ex.id === exerciseId ? { ...ex, [field]: value } : ex
          )
        }));
      };
      const handleSave = () => {
        if (!workoutData.title || !workoutData.type || !workoutData.date || !workoutData.duration) {
          alert('Please fill in all required fields');
          return;
        }
        if (onSave) {
          onSave(workoutData);
        }
      };
      const handleCancel = () => {
        if (onCancel) {
          onCancel();
        }
      };
    
      return (
        <div className="workout-form-card">
          <div className="workout-form-header">
            <div className="workout-form-icon">
              <span>📝</span>
            </div>
            <h3>{isEditing ? 'Edit Workout' : 'Log New Workout'}</h3>
          </div>
    
          <div className="workout-form">
            {/* First Row: Type and Title */}
            <div className="form-row">
              <div className="form-group">
                
                {/* workoutTypes */}
                <label>Workout Type</label>
                <select 
                  value={workoutData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="form-select"
                >
                {/* workoutTypes is an array of strings */}
                  {workoutTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Workout Tile */}
              <div className="form-group">
                <label>Workout Title</label>
                <input
                  type="text"
                  placeholder="e.g. Push Day, Pull Day"
                  value={workoutData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
    
            {/* Second Row: Duration and Date */}
            <div className="form-row">
              <div className="form-group">
                {/* Duration */}
                <label>Duration (minutes)</label>
                <input
                  type="number"
                  placeholder="60"
                  value={workoutData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="form-input"
                />
              </div>
              {/* Date */}
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={workoutData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
    
            {/* Exercises Section */}
            <div className="exercises-section">
              <div className="exercises-header">
                <h4 style = {{fontWeight: 'bold', fontSize: '1.2rem'}}>Exercises</h4>
                <button 
                  type="button"
                  onClick={addExercise}
                  className="add-exercise-btn"
                >
                  <Plus size={16} />
                  Add Exercise
                </button>
              </div>

              {/* Exercises Fill form after button clicked */}
              {workoutData.exercises.map((exercise) => (
                <div key={exercise.id} className="exercise-item">
                
                  <div className="exercise-fields">
                    <input
                      type="text"
                      placeholder="Exercise name"
                      value={exercise.name}
                      onChange={(e) => updateExercise(exercise.id, 'name', e.target.value)}
                      className="exercise-input exercise-name"
                    />
                    <input
                      type="number"
                      placeholder="Sets"
                      value={exercise.sets}
                      onChange={(e) => updateExercise(exercise.id, 'sets', e.target.value)}
                      className="exercise-input exercise-sets"
                    />
                    <input
                      type="number"
                      placeholder="Reps"
                      value={exercise.reps}
                      onChange={(e) => updateExercise(exercise.id, 'reps', e.target.value)}
                      className="exercise-input exercise-reps"
                    />
                    <input
                      type="number"
                      placeholder="Weight (lbs)"
                      value={exercise.weight}
                      onChange={(e) => updateExercise(exercise.id, 'weight', e.target.value)}
                      className="exercise-input exercise-weight"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeExercise(exercise.id)}
                    className="remove-exercise-btn"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
    
            {/*feeling*/}
            <div className="form-group">
              <label>How did you feel?</label>
              <select
                value={workoutData.feeling}
                onChange={(e) => handleInputChange('feeling', e.target.value)}
                className="form-select"
              >
                {feelingOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
    
            {/* Notes area */}
            <div className="form-group">
              <label>Notes</label>
              <textarea
                placeholder="How did the workout go? Any observations?"
                value={workoutData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                className="form-textarea"
                rows={4}
              />
            </div>
    
            {/* Action Buttons for cancel and save*/}
            <div className="form-actions">
              <button 
                type="button"
                onClick={handleCancel}
                className="btn-cancel"
              >
                <X size={16} />
                Cancel
              </button>
              <button 
                type="button"
                onClick={handleSave}
                className="btn-save"
              >
                <Save size={16} />
                {isEditing ? 'Update Workout' : 'Save Workout'}
              </button>
            </div>
          </div>
        </div>
      );
    }