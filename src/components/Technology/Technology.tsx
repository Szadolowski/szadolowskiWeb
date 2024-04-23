import { useState, ReactNode } from "react";
import "./Technology.css";
export const Technology = () => {
  const [hover, setHover] = useState(false);

  const TechnologyElement = ({ children }: { children: ReactNode }) => {
    return (
      <div
        className="technology"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="technologyBox">
      <TechnologyElement>
        <img src="html.svg" alt="html/img" />
        <h4>HTML</h4>
        {hover ? <p>test</p> : null}
      </TechnologyElement>
      <div className="technology">
        <img src="css.svg" alt="css/img" />
        <h4>CSS</h4>
      </div>
      <div className="technology">
        <img src="js.svg" alt="JavaScript/img" />
        <h4>JavaScript</h4>
      </div>
      <div className="technology">
        <img src="react.svg" alt="React.js/img" />
        <h4>React.js</h4>
      </div>
      <div className="technology">
        <img src="ts.svg" alt="TypeScript/img" />
        <h4>TypeScript</h4>
      </div>
      <div className="technology">
        <img src="git.svg" alt="GIT/img" />
        <h4>GIT</h4>
      </div>
      <div className="technology">
        <img
          src="vsc.svg"
          alt="VisualStudioCode/img"
          height="40px"
          width="40px"
        />
        <h4>Visual Studio Code</h4>
      </div>
    </section>
  );
};

export default Technology;
