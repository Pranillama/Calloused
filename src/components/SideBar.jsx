// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { House, Dumbbell, ClipboardCheck } from "lucide-react";
import "../css/SideBar.css";
import { useNavigate } from "react-router-dom";
import "../css/Button.css";
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
        <Button className="button--nav" onClick={() => navigate("/workouts")}>
          <Dumbbell />
          Workouts
        </Button>
        <Button className="button--nav" onClick={() => navigate("/plans")}>
          <ClipboardCheck />
          Plans
        </Button> 
      </nav>
    </aside>
  );
}
