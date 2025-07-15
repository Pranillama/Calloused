//import { useState } from "react";
import "../App.css";
import frontImage from "../assets/front.jpg";
import Button from "../components/Buttons";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="home-container">
        <h1> Calloused </h1>
        <p className="quote" style={{ marginTop: 10 }}>
          Build your body. Build your mind. Track your journey.
        </p>

        <div className="exercise-section">
          <Button
            className="button--primary"
            onClick={() => navigate("/workout")}
          >
            Get Started
          </Button>
        </div>
      </div>

      <div className="image">
        <img
          src={frontImage}
          alt="Front"
          style={{ float: "right", width: "80%", height: "auto" }}
        />
      </div>
    </section>
  );
}
export default Home;
