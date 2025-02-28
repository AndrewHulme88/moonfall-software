import React from "react";

const About = () => {
  return (
    <>
      <h1>MoonFall Software</h1>
      <h2>About</h2>
      <div className="about-container">
        <p>MoonFall Software is a one person indie game and software developer in Melbourne Australia.</p>
        <h2>The Team</h2>
        <h3>Andrew Hulme</h3>
        <img src="/images/Profile.jpg" alt="Photo of Andrew" className="profile-photo" />
        <div className="profile-text-container">
          <p>Founder and currently the sole member of MoonFall Software, Andrew is primarily a programmer but has taken on many roles, constantly learning new skills to bring his visions to life. A lifelong gamer since the NES era, his favorite game series is The Legend of Zelda.</p>
        </div>
      </div>
    </>
  )
};

export default About;
