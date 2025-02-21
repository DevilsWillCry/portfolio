import React from "react";


//Frontend
import htmlIcon from "../assets/infinite-scroll-images/html.png";
import cssIcon from "../assets/infinite-scroll-images/css.png";
import jsIcon from "../assets/infinite-scroll-images/js.png";
import tsIcon from "../assets/infinite-scroll-images/typescript-icon.svg";
import reactIcon from "../assets/infinite-scroll-images/React.png";
import nextIcon from "../assets/infinite-scroll-images/nextjs-icon.svg";
import reduxIcon from "../assets/infinite-scroll-images/redux-icon.svg";

//Frameworks de CSS
import muiIcon from "../assets/infinite-scroll-images/mui.png";
import tailwindIcon from "../assets/infinite-scroll-images/tailwind.png";


//Backend
import nodeJsIcon from "../assets/infinite-scroll-images/nodejs-icon.svg";
import sqlIcon from "../assets/infinite-scroll-images/sql-database-generic.svg";
import firebaseIcon from "../assets/infinite-scroll-images/firebase-icon.svg";
import pythonIcon from "../assets/infinite-scroll-images/python-icon.svg";


//Control de versiones
import githubIcon from "../assets/infinite-scroll-images/github-icon.svg";
import gitlabIcon from "../assets/infinite-scroll-images/gitlab-icon.svg";
import gitIcon from "../assets/infinite-scroll-images/git-icon.svg";


//Diseño
import figmaIcon from "../assets/infinite-scroll-images/figma.png"


const technologies = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "ReactJS", icon: reactIcon },
  { name: "NextJS", icon: nextIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "Python", icon: pythonIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "NodeJS", icon: nodeJsIcon },
  { name: "MUI", icon: muiIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Github", icon: githubIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitLab", icon: gitlabIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Figma", icon: figmaIcon },
];

function ShowTechnologies() {
  return (
    <>
      <div className="scroll mb-3" style={{ "--time": "35s" }}>
        <div className="marquee">
          {/* Primera copia */}
          {technologies.map((tech, i) => (
            <span key={`tech-${i}`}>
              <img src={tech.icon} alt={tech.name} />
              {tech.name}
            </span>
          ))}
          {/* Segunda copia para lograr continuidad */}
          {technologies.map((tech, i) => (
            <span key={`tech-dup-${i}`}>
              <img src={tech.icon} alt={tech.name} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="scroll mb-3" style={{ "--time": "40s" }}>
        <div className="marquee">
          {/* Primera copia */}
          {technologies.reverse().map((tech, i) => (
            <span key={`tech-${i}`}>
              <img src={tech.icon} alt={tech.name} />
              {tech.name}
            </span>
          ))}
          {/* Segunda copia para lograr continuidad */}
          {technologies.map((tech, i) => (
            <span key={`tech-dup-${i}`}>
              <img src={tech.icon} alt={tech.name} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="scroll mb-3" style={{ "--time": "35s" }}>
        <div className="marquee">
          {/* Primera copia */}
          {technologies.map((tech, i) => (
            <span key={`tech-${i}`}>
              <img src={tech.icon} alt={tech.name} />
              {tech.name}
            </span>
          ))}
          {/* Segunda copia para lograr continuidad */}
          {technologies.map((tech, i) => (
            <span key={`tech-dup-${i}`}>
              <img src={tech.icon} alt={tech.name} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="scroll" style={{ "--time": "45s" }}>
        <div className="marquee">
          {/* Primera copia */}
          {technologies.map((tech, i) => (
            <span key={`tech-${i}`}>
              <img src={tech.icon} alt={tech.name} />
              {tech.name}
            </span>
          ))}
          {/* Segunda copia para lograr continuidad */}
          {technologies.map((tech, i) => (
            <span key={`tech-dup-${i}`}>
              <img src={tech.icon} alt={tech.name} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowTechnologies;
