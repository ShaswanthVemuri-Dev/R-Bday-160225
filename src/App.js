import React, { useState } from "react";

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleStart = () => {
    setShowContent(true);
  };

  return (
    <div className="app-container">
      {!showContent ? (
        <div id="splash" className="splash">
          <h1 className="greeting">Happy Birthday, Rithika!</h1>
          <button onClick={handleStart} className="btn">
            Experience Your Surprise
          </button>
        </div>
      ) : (
        <div id="content" className="content">
          <p className="intro">
            Welcome to the Emotional Circuit Simulator – a unique experience
            where emotions flow like currents in a circuit. We built this with
            passion and innovation to celebrate every moment of joy, nostalgia,
            and excitement. Today, your emotions shine the brightest.
          </p>
          {/* Replace "YOUR_LINK_HERE" with your simulator URL */}
          <a
            id="simulatorLink"
            className="simulator-btn"
            href="YOUR_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the Emotional Circuit Simulator
          </a>
          <div className="circuit-heart"></div>
          <p className="personalized">
            Rithika, your creativity and kindness inspire us every day. This
            creation is a small token of appreciation for the amazing person you
            are.
          </p>
          <p className="outro">
            This is more than just a birthday wish – it's a celebration of you.
            Happy Birthday, Rithika!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
