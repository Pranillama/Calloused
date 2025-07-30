import { useState, useEffect } from "react";
import WorkoutForm from "../components/Workouts/WorkoutForm";
import WorkoutCard from "../components/Workouts/WorkoutCard";
import WorkoutFilter from "../components/Workouts/WorkoutFilter";
import "../css/Workouts.css";


export default function Workouts() {
    const [showLogCard, setShowLogCard] = useState(false);
    const [workouts, setWorkouts] = useState([]);
    const [filteredWorkouts, setFilteredWorkouts] = useState([]);
    const [activeTypeFilter, setActiveTypeFilter] = useState('all');
    const [activeTimeFilter, setActiveTimeFilter] = useState('allTime');
    const [editingWorkout, setEditingWorkout] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    

    const handleLogWorkout = () => {
    setIsEditing(false);
    setEditingWorkout(null);
    setShowLogCard(true);
  };
  const handleSaveWorkout = (workoutData) => {
    if (isEditing && editingWorkout) {
      // Update existing workout
      const updatedWorkout = {
        ...editingWorkout,
        title: workoutData.title,
        type: workoutData.type.toLowerCase(),
        date: new Date(workoutData.date).toISOString(),
        duration: parseInt(workoutData.duration),
        mood: workoutData.feeling.toLowerCase(),
        exercises: workoutData.exercises,
        notes: workoutData.notes
      };

      // Update the workout in the list
      setWorkouts(prev => 
        prev.map(workout => 
          workout.id === editingWorkout.id ? updatedWorkout : workout
        )
      );
      
      // Reset edit state
      setIsEditing(false);
      setEditingWorkout(null);
    } else {
      // Create new workout with unique ID
      const newWorkout = {
        id: Date.now(),
        title: workoutData.title,
        type: workoutData.type.toLowerCase(),
        date: new Date(workoutData.date).toISOString(),
        duration: parseInt(workoutData.duration),
        mood: workoutData.feeling.toLowerCase(),
        exercises: workoutData.exercises,
        notes: workoutData.notes
      };

      // Add to workouts list (newest first)
      setWorkouts(prev => [newWorkout, ...prev]);
    }
    
    // Hide the log card
    setShowLogCard(false);
  };

  const handleCancelWorkout = () => {
    setShowLogCard(false);
    setIsEditing(false);
    setEditingWorkout(null);
  };

  const handleEditWorkout = (workout) => {
    setEditingWorkout(workout);
    setIsEditing(true);
    setShowLogCard(true);
  };

  const handleDeleteWorkout = (workoutToDelete) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${workoutToDelete.title}"? This action cannot be undone.`
    );
    
    if (confirmDelete) {
      // Remove the workout from the workouts list
      setWorkouts(prev => 
        prev.filter(workout => workout.id !== workoutToDelete.id)
      );
    }
  };

  const handleTypeFilterChange = (filterType) => {
    setActiveTypeFilter(filterType);
  };

  const handleTimeFilterChange = (timeRange) => {
    setActiveTimeFilter(timeRange);
  };

  // Filter workouts based on active filters
  useEffect(() => {
    let filtered = [...workouts];

    // Filter by workout type
    if (activeTypeFilter !== 'all') {
      console.log('Filtering by type:', activeTypeFilter);
      console.log('Available workouts:', workouts.map(w => ({ title: w.title, type: w.type })));
      filtered = filtered.filter(workout => workout.type === activeTypeFilter);
      console.log('Filtered workouts:', filtered.map(w => ({ title: w.title, type: w.type })));
    }

    // Filter by time range
    const now = new Date();
    const workoutDate = (workout) => new Date(workout.date);

    switch (activeTimeFilter) {
      case 'today':
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        filtered = filtered.filter(workout => workoutDate(workout) >= todayStart);
        break;
      case 'thisWeek':
        const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
        filtered = filtered.filter(workout => workoutDate(workout) >= weekStart);
        break;
      case 'thisMonth':
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        filtered = filtered.filter(workout => workoutDate(workout) >= monthStart);
        break;
      case 'allTime':
        // No time filtering - show all workouts
        break;
      default:
        // No time filtering
        break;
    }

    setFilteredWorkouts(filtered);
  }, [workouts, activeTypeFilter, activeTimeFilter]);

  // Make handleLogWorkout available to parent components
  useEffect(() => {
    window.handleLogWorkout = handleLogWorkout;
    
    return () => {
      delete window.handleLogWorkout;
    };
  }, []);

  return (
    <div className="workouts-page">
      {/* Only show Workout Filters when form is not visible */}
      {!showLogCard && (
        <WorkoutFilter 
          onFilterChange={handleTypeFilterChange}
          onTimeFilterChange={handleTimeFilterChange}
        />
      )}

      {/* Show Workout Form when logging */}
      {showLogCard && (
        <WorkoutForm 
          onSave={handleSaveWorkout}
          onCancel={handleCancelWorkout}
          initialData={isEditing ? editingWorkout : null}
          isEditing={isEditing}
        />
      )}

      {/* Only show Workout Cards List when form is not visible */}
      {!showLogCard && (
        <div className="workouts-list">
          {filteredWorkouts.length === 0 ? (
            <div className="empty-state">
              {workouts.length === 0 ? (
                <div>
                  <h3>No workouts logged yet</h3>
                  <p>Start your fitness journey by clicking "Log Workout" above!</p>
                </div>
              ) : (
                <div>
                  <h3>No workouts found</h3>
                  <p>Try adjusting your filters to see more workouts.</p>
                </div>
              )}
            </div>
          ) : (
            filteredWorkouts.map(workout => (
              <WorkoutCard 
                key={workout.id}
                workout={workout}
                onEdit={handleEditWorkout}
                onDelete={handleDeleteWorkout}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}