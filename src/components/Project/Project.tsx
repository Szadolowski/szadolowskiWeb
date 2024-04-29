import { motion } from "framer-motion";
import "./Project.css";

const projectList = [
  {
    name: "AutoTask",
    link: "https://taskauto.netlify.app",
    git: "https://github.com/Szadolowski/AutoTasker",
    photo: "project1.png",
    description: "Prosty project ToDo opatry na samochodach",
  },
  {
    name: "Space Tourism",
    link: "https://spacetourismszadolowski.netlify.app",
    git: "https://github.com/Szadolowski/space-tourism-website-main",
    photo: "project2.png",
    description:
      "Projekt Space Tourism stworzony na podstawie projektu ze strony Frontmentor",
  },
  {
    name: "Tic Tac Toe",
    link: "https://tictactoeszadolowski.netlify.app",
    git: "https://github.com/Szadolowski/Tic-Tac-Toe",
    photo: "project3.png",
    description: "prosty projekt kółko i krzyżyk/Tic Tac Toe",
  },
  {
    name: "React New Skill",
    link: "",
    git: "https://github.com/Szadolowski/ReactNewSkill",
    photo: "project4.png",
    description: "Pierwszy projekt oparty na FrameWork React.js",
  },
  {
    name: "Results summary component",
    link: "",
    git: "https://github.com/Szadolowski/results-summary-component-main",
    photo: "project5.png",
    description:
      "Projekt Results summary component stworzony na podstawie projektu ze strony Frontmentor",
  },
];

export const Project = () => {
  const ProjectElement = projectList.map((project) => {
    return (
      <div className="projectElement">
        <motion.img
          src={"img/" + project.photo}
          alt={project.photo}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.5,
            border: "1px",
            borderColor: "black",
            borderStyle: "solid",
            borderRadius: 5,
          }}
        />

        <a target="_blank" href={project.link}>
          <h4>{project.name}</h4>
        </a>
        <a href={project.git}>
          <h5>Git link</h5>
        </a>
        <span>{project.description}</span>
      </div>
    );
  });
  return (
    <section className="project">
      <div className="projectTitle">
        <h2>Project</h2>
      </div>
      <div className="projectBox">{ProjectElement}</div>
    </section>
  );
};

export default Project;
