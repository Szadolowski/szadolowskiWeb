import { motion } from "framer-motion";
import "./Project.css";

const projectList = [
  {
    name: "AutoTask",
    link: "https://taskauto.netlify.app",
    photo: "project1.png",
    description: "Prosty project ToDo opatry na samochodach",
  },
  {
    name: "Space Tourism",
    link: "non",
    photo: "Space Tourism.jpg",
    description:
      "Projekt Space Tourism stworzony na podstawie projektu ze strony Frontmentor",
  },
  {
    name: "Tic Tac Toe",
    link: "non",
    photo: "Tikc Tac Toe.jpg",
    description: "prosty projekt kółko i krzyżyk/Tic Tac Toe",
  },
  {
    name: "React New Skill",
    link: "non",
    photo: "React New Skill.jpg",
    description: "Pierwszy projekt oparty na FrameWork React.js",
  },
  {
    name: "Results summary component",
    link: "non",
    photo: "Results summary component.jpg",
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
