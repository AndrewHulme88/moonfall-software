import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="logo-container">
      <img src="/images/MoonFallLogo.png" alt="MoonFall Software Logo" className="logo"/>
      </div>
      <div className="heading-container">
        <h2>Creativity | Quality | Passion</h2>
        <p>Crafting unique game worlds to explore and reliable software to fuel your creativity, all with a commitment to quality.</p>
      </div>
      <div className="home-container-games">
        <h2>MoonFall Software Games</h2>
        <img src="/images/EliPoster.png" alt="EliPoster" className="home-game-image"/>
        <p>Check out the original game jam version in your browser free:</p>
        <a href="https://moonfallsoftware.itch.io/elis-odyssey-brackeysjam" className="game-link" target="_blank" rel="noopener noreferrer">Eli's Odyssey</a>
      </div>
    </div>
  )
};

export default Home;
