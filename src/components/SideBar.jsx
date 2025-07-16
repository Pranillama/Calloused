// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { House, Dumbbell } from "lucide-react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Button from "./Buttons";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <h2 className="logo">Calloused</h2>

      <nav className="nav-links">
        <Button className="button--nav" onClick={() => navigate("/dashboard")}>
          <House />
          Dashboard
        </Button>
        <Button className="button--nav" onClick={() => navigate("/workout")}>
          <Dumbbell />
          Workouts
        </Button>
      </nav>
    </aside>
  );
}
