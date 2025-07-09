//import { useState } from "react";
import "../App.css";
import Button from "../components/Buttons";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1> CALLOUSED </h1>
      <p className="quote" style={{ marginTop: 10 }}>
        💪stay hard!
      </p>

      <div className="exercise-section">
        <Button
          className="button--primary"
          onClick={() => navigate("/workout")}
        >
          Exercises
        </Button>
      </div>
    </div>
  );
}
export default Home;
