import { useState } from "react";
import { Filter } from "lucide-react";
import "../../css/WorkoutFilter.css";

export default function WorkoutFilter({ onFilterChange, onTimeFilterChange}) {
    const [activeFilter, setActiveFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('allTime');

  const workoutTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'weightlifting', label: 'Weightlifting' },
    { id: 'running', label: 'Running' },
    { id: 'swimming', label: 'Swimming' }
  ];

  const timeOptions = [
    { id: 'today', label: 'Today'},
    { id: 'thisWeek', label: 'This Week'},
    { id: 'thisMonth', label: 'This Month'},
    { id: 'allTime', label: 'All Time'}
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    if (onFilterChange) {
      onFilterChange(filterId);
    }
  };

  const handleTimeChange = (value) => {
    setTimeFilter(value);
    if (onTimeFilterChange) {
      onTimeFilterChange(value);
    }
  };

  return (
    <div className="workout-filters">
      {/* Filter icon on the left */}
      <div className="filter-icon-container">
        <Filter size={20} className="filter-icon" />
      </div>

      {/* workout type filter with border */}
      <div className="filter-buttons-container">
        <div className="filter-buttons">
          {workoutTypes.map(type => (
            <button
              key={type.id}
              className={`filter-btn ${activeFilter === type.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(type.id)}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>
    
      {/* time filter */}
      <div className="time-filter">
        <select
          className="time-select"
          value={timeFilter}
          onChange={(e) => handleTimeChange(e.target.value)}
        >
          {timeOptions.map(option => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}   