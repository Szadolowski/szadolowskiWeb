import { useEffect, useState } from "react";
import "./Welcome.css";

const words = ["REACT.JS", "JAVASCRIPT", "TYPESCRIPT", "CSS", "GIT"];

export const Welcome = () => {
  const [technology, setTechnology] = useState("");

  useEffect(() => {
    let index = Math.floor(Math.random() * 4);
    let charIndex = 0;
    let currentWord = words[index];

    const typeChar = () => {
      const currentChar = currentWord.substring(0, charIndex);
      setTechnology(currentChar);

      charIndex++;

      if (charIndex > currentWord.length) {
        charIndex = 0;
        setTimeout(() => {
          index++;
          if (index >= words.length) index = 0;
          currentWord = words[index];
          setTimeout(typeChar, 400);
        }, 1000);
        return;
      }

      setTimeout(typeChar, 400);
    };

    const timeoutId = setTimeout(typeChar, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="welcome">
      <div className="welcomeText">
        <h1>
          HI, I'M <b>RAFAŁ</b>
        </h1>
        <h4>FRONT END DEVELOPER</h4>
        <p>
          USING TECHNOLOGY: <span>{technology}</span>
        </p>
      </div>
      <div className="aboutMe">
        <div className="dotBlock">
          <div className="dot dot--red"></div>
          <div className="dot dot--yellow"></div>
          <div className="dot dot--green"></div>
        </div>
        <div className="aboutMeText">
          <span>coś o mnie</span>
        </div>
      </div>
    </header>
  );
};
