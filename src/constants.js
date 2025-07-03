// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import hibernateLogo from "./assets/tech_logo/hibernate.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";

// Education Section Logo's
import itmLogo from "./assets/edu_logo/itm.png";
import adLogo from "./assets/edu_logo/ad.png";

// Project Section Logo's
import todoLogo from "./assets/project_logo/todo.png";
import tempLogo from "./assets/project_logo/temp.png";
import emsLogo from "./assets/project_logo/ems.png";
import checkLogo from "./assets/project_logo/check.png";
import quizLogo from "./assets/project_logo/quiz.png";

// Certificate Section Logo's
import codsoftLogo from "./assets/Certi_logo/codsoft.jpeg";
import secondLogo from "./assets/Certi_logo/second.jpeg";
import walmartLogo from "./assets/Certi_logo/walmart.jpeg";
import pyLogo from "./assets/Certi_logo/python.jpeg";
import preLogo from "./assets/Certi_logo/pre.jpeg";
import ncsc2Logo from "./assets/Certi_logo/ncsc2.jpeg";
import ncscLogo from "./assets/Certi_logo/ncsc.jpeg";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "Hibernate", logo: hibernateLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: itmLogo,
    school: "Institute Of Technology And Management, Gorakhpur",
    date: "Oct 2020 - June 2024",
    grade: "7.73 CGPA",
    desc: "I have completed my Bachelor's degree (B.Tech) in Information Technology from Institute Of Technology And Management, Gorakhpur. During my time at ITM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
    degree: "Bachelor of Technology - B.Tech",
  },
  {
    id: 1,
    img: adLogo,
    school: "A.D. Govt. Girls Inter College, Gorakhpur",
    date: "july 2019 - feb 2020",
    grade: "73.2%",
    desc: "I completed my class 12th eduation from A.D. Govt. Girls Inter College, Gorakhpur, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "UP(XII) - PCM",
  },
  {
    id: 2,
    img: adLogo,
    school: "A.D. Govt. Girls Inter College, Gorakhpur",
    date: "july 2017 - feb 2018",
    grade: "81.1%",
    desc: "I completed my class 10th eduation from A.D. Govt. Girls Inter College, Gorakhpur, under the UP board, where I studied Science.",
    degree: "UP(X) - Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "ToDo-App",
    description:
      "A To-Do App is a simple productivity tool that allows users to create, view, update, and delete tasks. It's often used as a beginner-friendly full-stack or frontend project to practice CRUD operations.",
    image: todoLogo,
    tags: ["React JS", "CSS"],
    github: "https://github.com/Shraddhagupta35/ToDo-App",
    webapp: "https://to-do-app-gamma-olive.vercel.app/",
  },
  {
    id: 1,
    title: "Temperature Converter",
    description:
      "A temperature converter is converting temperature into Celsius to Fahrenheit and change mode.",
    image: tempLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Shraddhagupta35/Temperature-Converter",
    webapp: "https://temperature-converter-ivory.vercel.app/",
  },
  {
    id: 2,
    title: "Employee Management System",
    description:
      "A role-based task management system where employees create and assign tasks, and admins review them. Admins can log in to mark tasks as Accepted, Failed, or leave them as New based on progress.",
    image: emsLogo,
    tags: ["React JS", "Tailwind CSS", "Vite"],
    github: "https://github.com/Shraddhagupta35/Employee-Management-System",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 3,
    title: "Internet Status Checker",
    description:
      "A network are check to connection Status, IP Address, Network Strength",
    image: checkLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Shraddhagupta35/Internet-Connection-status-checker",
    webapp: "https://internet-connection-status-checker.vercel.app/",
  },
  {
    id: 4,
    title: "Quiz Application With Timer",
    description:
      "A timed quiz app that presents one question at a time with multiple-choice options, tracks user answers, and calculates the score. At the end, it shows the final score along with a summary of correct and incorrect answers.",
    image: quizLogo,
    tags: ["HTML", "CSS", "Java", "SpringBoot"],
    github:
      "https://github.com/Shraddhagupta35/Java-Project/tree/master/Quiz%20Application/src",
    webapp: "https://quiz-app-inky-rho-68.vercel.app/",
  },
];

export const certificates = [
  {
    id: 0,
    title: "Java With Programming",
    description:
      "Completed a one-month online Java Programming internship with certification from CodSoft.",
    image: codsoftLogo,
  },
  {
    id: 1,
    title: "2nd Position in 2nd year",
    description:
      "Secured 2nd position in B.Tech (Information Technology), 2nd year in my academic session.",
    image: secondLogo,
  },

  {
    id: 2,
    title: "Advanced Software Engineering Job Simulation",
    description:
      "Completed a Software Engineering Simulation Workshop with certification by Walmart.",
    image: walmartLogo,
  },

  {
    id: 3,
    title: "Programming With Python",
    description:
      "Completed virtual Python training with certification via Internshala.",
    image: pyLogo,
  },

  {
    id: 4,
    title: "Internship & Job Preparation",
    description:
      "Completed virtual Internship & Job Preparation training with certificate via Internshala,",
    image: preLogo,
  },

  {
    id: 5,
    title: "District Child Science Fair",
    description:
      "Participated in the District Child Science Fair via National Children Science Congress (U.P).",
    image: ncsc2Logo,
  },

  {
    id: 6,
    title: "Nodal Children's Science Fair",
    description:
      "Participated in the Nodal-Level Children's Science Fair via National Children Science Congress (U.P).",
    image: ncscLogo,
  },
];
