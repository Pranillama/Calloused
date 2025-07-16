// src/layouts/Shell.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import "../App.css";

export default function Shell() {
  return (
    <>
      <Sidebar />
      {/* pushes main content to the right so it doesn’t hide behind the fixed sidebar */}
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}
