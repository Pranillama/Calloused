//import { useState } from "react";
import "../css/Button.css";
import "../css/Home.css";
import Button from "../components/Buttons";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <section>
      <div className="home-container">
        <h1>Calloused</h1>
        <p className="quote">
          Build your body. Build your mind. Track your journey.
        </p>

        <div className="Home-section">
          <Button
            className="button--primary"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
          </Button>
        </div>
      </div>

      <div className="emoji-circle">
        <span role="img" aria-label="gym">🏋️‍♂️</span>
        <span role="img" aria-label="run">🏃‍♂️</span>
        <span role="img" aria-label="meditate">🧘‍♂️</span>
        <span role="img" aria-label="journal">📓</span>
      </div>
    </section>
  );
}

export default Home;
