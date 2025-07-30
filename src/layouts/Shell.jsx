// src/layouts/Shell.jsx
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/SideBar";
import "../css/Shell.css";
import Header from "../components/Header";
import { Dumbbell } from "lucide-react";

export default function Shell() {
  const location = useLocation();

  const headerMap = {
    "/dashboard": {
      title: "Dashboard",
      subtitle: "Welcome",
      actionButton: null,
    },
    "/workouts": {
      icon: <Dumbbell className="dumbbell-icon" />,  // icon for the header
      title: "Workouts",
      subtitle: "Track your fitness journey",
      actionButton: "+ Log Workout",
    },
    "/plans": {
      title: "Workout Plans",
      subtitle: "Create, manage, and share your training plans",
      actionButton: "+ Create Plan",
    },
    // Add more pages here
  };
  const currentHeader = headerMap[location.pathname];

  const handleActionClick = () => {
    if (location.pathname === "/workouts" && window.handleLogWorkout) {
      window.handleLogWorkout();
    }
    // Add more action handlers for other pages here
  };

  return (
    <>
      <Sidebar />
      {/* pushes main content to the right so it doesn't hide behind the fixed sidebar */}
      <main className="page-content">
      {currentHeader && (
          <Header
            icon={currentHeader.icon}
            title={currentHeader.title}
            subtitle={currentHeader.subtitle}
            actionButton={currentHeader.actionButton}
            onActionClick={handleActionClick}
          />
        )}
        <Outlet />
      </main>
    </>
  );
}
