import React, { useState } from "react";

function Section({ heading, isShown, setIsShown, title }) {
  return (
    <div className="instamart-parent">
      <h2 className="instamart-heading">{heading}</h2>
      {isShown ? (
        <button className="show-btn" onClick={() => setIsShown("")}>
          Hide
        </button>
      ) : (
        <button className="show-btn" onClick={() => setIsShown(title)}>
          Show
        </button>
      )}
      {isShown && (
        <p className="instamart-paragraph">
          One can cook on and with an open fire. These are some of the ways to
          cook with fire outside. Cooking meat using a spit is a great way to
          evenly cook meat. In order to keep meat from burning, it's best to
          slowly rotate it. Hot stones can be used to toast bread. Coals are hot
          and can bring things to a boil quickly.
        </p>
      )}
    </div>
  );
}

function Instamart() {
  const [isShown, setIsShown] = useState("team");
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        heading="About Instamart"
        isShown={isShown === "about" ? true : false}
        setIsShown={setIsShown}
        title="about"
      />
      <Section
        heading="Team Instamart"
        isShown={isShown === "team" ? true : false}
        setIsShown={setIsShown}
        title="team"
      />
      <Section
        heading="Careers Instamart"
        isShown={isShown === "career" ? true : false}
        setIsShown={setIsShown}
        title="career"
      />
    </div>
  );
}

export default Instamart;
