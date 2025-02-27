import React from "react";

const Games = () => {
  return (
    <>
      <h1>MoonFall Software</h1>
      <h2>Games</h2>
      <div className="game-card">
        <img src="/images/EliPoster.png" alt="EliPoster" className="game-poster"/>
        <div className="game-card-text">
          <p>A dark and atmospheric, hand crafted puzzle-platformer originally made for the Brackeys Game Jam 2025.1 in 7 days.</p>
          <p>Currently in development, expanding the original concept into a full game.</p>
          <p>The original game jam version is available to play free in the browser, check it out below.</p>
          <a href="https://moonfallsoftware.itch.io/elis-odyssey-brackeysjam" className="game-link" target="_blank" rel="noopener noreferrer">Eli's Odyssey</a>
        </div>

      </div>
    </>
  )
};

export default Games;
