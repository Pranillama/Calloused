//import { useState } from "react";
import "../App.css";
import Button from "../components/Buttons";
function Home() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="home-container">
      <h1> CALLOUSED </h1>
      <p className="quote">💪stay hard!</p>

      <div className="exercise-section">
        <Button onClick={handleClick}>Exercises</Button>
      </div>
    </div>
  );
}
export default Home;
