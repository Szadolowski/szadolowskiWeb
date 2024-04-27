import { useState } from "react";
import "./Technology.css";
import { AnimatePresence, motion } from "framer-motion";
export const Technology = () => {
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [react, setReact] = useState(true);
  const [ts, setTs] = useState(false);
  const [fm, setFm] = useState(false);
  const [git, setGit] = useState(false);
  const [vsc, setVsc] = useState(false);

  const replace = (element: string) => {
    setHtml(false);
    setCss(false);
    setJs(false);
    setReact(false);
    setTs(false);
    setFm(false);
    setGit(false);
    setVsc(false);

    if (element === "html") {
      setHtml(true);
    }
    if (element === "css") {
      setCss(true);
    }
    if (element === "js") {
      setJs(true);
    }
    if (element === "react") {
      setReact(true);
    }
    if (element === "ts") {
      setTs(true);
    }
    if (element === "fm") {
      setFm(true);
    }
    if (element === "git") {
      setGit(true);
    }
    if (element === "vsc") {
      setVsc(true);
    }
  };

  return (
    <section className="technologyBox">
      <h2 className="grid1">TECHNOLOGY</h2>
      <div className="grid2">
        <ul>
          <li>
            <h3
              onClick={() => {
                replace("html");
              }}
            >
              html
            </h3>
          </li>
          <li>
            <h3
              onClick={() => {
                replace("css");
              }}
            >
              CSS
            </h3>
          </li>
          <li>
            <h3
              onClick={() => {
                replace("js");
              }}
            >
              JavaScript
            </h3>
          </li>
          <li>
            <h3
              onClick={() => {
                replace("react");
              }}
            >
              Ract.js
            </h3>
          </li>
          <li>
            <h3
              onClick={() => {
                replace("fm");
              }}
            >
              Frame Motion
            </h3>
          </li>
          <li>
            <h3
              onClick={() => {
                replace("ts");
              }}
            >
              TypeScript
            </h3>
          </li>

          <li>
            <h3
              onClick={() => {
                replace("git");
              }}
            >
              Git
            </h3>
          </li>
          <li>
            <h3
              onClick={() => {
                replace("vsc");
              }}
            >
              Visual Studio Code
            </h3>
          </li>
        </ul>
      </div>
      <div className="grid3">
        {/* <TechnologyDetail /> */}
        <AnimatePresence>
          {(html && (
            <motion.div
              className="technologyInfo"
              initial={{ opacity: 0, x: 200, rotate: -5 }}
              animate={{ opacity: [0, 0.5, 1], x: 0, rotate: 5 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 1 }}
              key={"html"}
            >
              <img src="html.svg" alt="html/svg" />
              <h3>HTML</h3>
              <span>
                HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser. It defines the content and structure of web content
              </span>
            </motion.div>
          )) ||
            (css && (
              <motion.div
                className="technologyInfo"
                initial={{ opacity: 0, x: 200, rotate: -5 }}
                animate={{ opacity: [0, 0.5, 1], x: 0, rotate: 5 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                key={"css"}
              >
                <img src="css.svg" alt="css/svg" />
                <h3>CSS</h3>
                <span>
                  Cascading Style Sheets (CSS) — a style sheet language used for
                  specifying the presentation and styling of a document written
                  in a markup language such as HTML or XML (including XML
                  dialects such as SVG, MathML or XHTML)
                </span>
              </motion.div>
            )) ||
            (js && (
              <motion.div
                className="technologyInfo"
                initial={{ opacity: 0, x: 200, rotate: -5 }}
                animate={{ opacity: [0, 0.5, 1], x: 0, rotate: 5 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                key={"js"}
              >
                <img src="js.svg" alt="javascript/svg" />
                <h3>JavaScript</h3>
                <span>
                  JavaScript, often abbreviated as JS, is a programming language
                  and core technology of the Web, alongside HTML and CSS. 99% of
                  websites use JavaScript on the client side for webpage
                  behavior.
                </span>
              </motion.div>
            )) ||
            (react && (
              <motion.div
                className="technologyInfo"
                initial={{ opacity: 0, x: 200, rotate: -5 }}
                animate={{ opacity: [0, 0.5, 1], x: 0, rotate: 5 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                key={"react"}
              >
                <img src="react.svg" alt="react.js/svg" />
                <h3>React.js</h3>
                <span>
                  React (also known as React.js or ReactJS) is a free and
                  open-source front-end JavaScript library for building user
                  interfaces based on components. It is maintained by Meta
                  (formerly Facebook) and a community of individual developers
                  and companies.
                </span>
              </motion.div>
            )) ||
            (fm && (
              <motion.div
                className="technologyInfo"
                initial={{ opacity: 0, x: 200, rotate: -5 }}
                animate={{ opacity: [0, 0.5, 1], x: 0, rotate: 5 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                key={"fm"}
              >
                <img src="fm.svg" alt="frame motion/svg" />
                <h3>Framer Motion</h3>
                <span>
                  Framer Motion is a simple yet powerful motion library for
                  React. It powers the amazing animations and interactions in
                  Framer, the web builder for creative pros. Zero code, maximum
                  speed.
                </span>
              </motion.div>
            )) ||
            (ts && (
              <motion.div
                className="technologyInfo"
                initial={{ opacity: 0, x: 200, rotate: -5 }}
                animate={{ opacity: [0, 0.5, 1], x: 0, rotate: 5 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                key={"ts"}
              >
                <img src="ts.svg" alt="TypeScript/svg" />
                <h3>TypeScript</h3>
                <span>
                  TypeScript is a free and open-source high-level programming
                  language developed by Microsoft that adds static typing with
                  optional type annotations to JavaScript. It is designed for
                  the development of large applications and transpiles to
                  JavaScript. Because TypeScript is a superset of JavaScript,
                  all JavaScript programs are syntactically valid TypeScript,
                  but they can fail to type-check for safety reasons.
                </span>
              </motion.div>
            )) ||
            (git && (
              <motion.div
                className="technologyInfo"
                initial={{ opacity: 0, x: 200, rotate: -5 }}
                animate={{ opacity: [0, 0.5, 1], x: 0, rotate: 5 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                key={"git"}
              >
                <img src="git.svg" alt="Git/svg" />
                <h3>Git</h3>
                <span>
                  Git is a distributed version control system that tracks
                  changes in any set of computer files, usually used for
                  coordinating work among programmers who are collaboratively
                  developing source code during software development.
                </span>
              </motion.div>
            )) ||
            (vsc && (
              <motion.div
                className="technologyInfo"
                initial={{ opacity: 0, x: 200, rotate: -5 }}
                animate={{ opacity: [0, 0.5, 1], x: 0, rotate: 5 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                key={"vsc"}
              >
                <img src="vsc.svg" alt="Visual Studio Code/svg" />
                <h3>Visual Studio Code</h3>
                <span>
                  Visual Studio Code, also commonly referred to as VS Code, is a
                  source-code editor developed by Microsoft for Windows, Linux,
                  macOS and web browsers. Features include support for
                  debugging, syntax highlighting, intelligent code completion,
                  snippets, code refactoring, and embedded version control with
                  Git. Users can change the theme, keyboard shortcuts,
                  preferences, and install extensions that add functionality.
                </span>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technology;
