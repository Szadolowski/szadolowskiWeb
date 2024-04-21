import { useEffect, useState } from "react";
import "./Welcome.css";

const words = ["REACT.JS", "JAVASCRIPT", "TYPESCRIPT", "CSS", "GIT"];

export const Welcome = () => {
  const [technology, setTechnology] = useState("");

  useEffect(() => {
    let index = 0;
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
    <header className="Header">
      <h1>
        HI, I'M <b>RAFAŁ</b>
      </h1>
      <h4>FRONT END DEVELOPER</h4>
      <p>
        USING TECHNOLOGY: <span>{technology}</span>
      </p>
    </header>
  );
};
