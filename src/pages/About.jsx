import React from "react";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="heading-container">
          <h1>MoonFall Software</h1>
          <p>MoonFall Software is a one person indie game and software developer in Melbourne Australia.</p>
        </div>
        <h3>The Team</h3>
        <div className="profile-container">
          <div className="profile-container-header">
            <div>
              <img src="/images/Profile.jpg" alt="Photo of Andrew" className="profile-photo" />
            </div>
            <div>
              <h4>Andrew Hulme</h4>
            </div>
          </div>
          <div className="profile-text-container">
            <p>Founder and currently the sole member of MoonFall Software, Andrew is primarily a programmer but has taken on many roles, constantly learning new skills to bring his visions to life. A lifelong gamer since the NES era, his favorite game series is The Legend of Zelda.</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;
