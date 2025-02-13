import ttt from "../assets/projects/ttt.png";
import realty from "../assets/projects/realty.png";
import weather from "../assets/projects/weather.png";
import hitscore from "../assets/projects/hitscore.png";
import wp_lms from "../assets/projects/wp_lms.png";
import portfolio from "../assets/projects/portfolio.png";
import lms from "../assets/projects/lms.png";
import groupexpense from "../assets/projects/groupexpense.png";

export const ProjectList = [
  {
    id: 1,
    name: "Tic-Tac-Toe Game",
    description: [
      "Developed a dynamic and interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript, ensuring a smooth and engaging user experience.",
      "Implemented turn-based gameplay and automatic detection of win conditions, making the game fully functional for both players.",
      "Added a reset functionality to restart the game after a win or draw, improving usability and user interaction.",
    ],
    img: ttt,
    tech: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/tilalapriyank/Tic-Tac-Toe",
    demo: "https://tic-tac-toe-rose-zeta.vercel.app",
  },
  {
    id: 2,
    name: "WP Realty Plugin",
    description: [
      "Developed a WordPress plugin for efficient property management, enhancing real estate workflows.",
      "Integrated advanced search filters and an inquiry handling system to streamline user experience and communication.",
      "Designed user-friendly frontend displays, boosting engagement and increasing booking conversions.",
    ],
    img: realty,
    tech: ["HTML", "CSS", "JavaScript", "Wordpress", "PHP", "Bootstrap"],
    source: null,
    demo: null,
  },
  {
    id: 3,
    name: "Weather App",
    description: [
      "Built a weather application using HTML, CSS, JavaScript, Node.js, and Express.js, providing real-time weather information based on user input.",
      "Integrated an external weather API to fetch accurate, location-based weather updates and provide detailed forecasts.",
      "Enhanced the app's UI with a clean, intuitive design to ensure ease of use and improve the overall user experience.",
    ],
    img: weather,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    source: "https://github.com/tilalapriyank/weather-app",
    demo: "https://weather-app-production-2e01.up.railway.app/",
  },
  {
    id: 4,
    name: "WPTUTOR LMS",
    description: [
      "Developed a comprehensive WordPress LMS plugin to support online education with course and quiz management.",
      "Implemented scalable functionality to track student progress and ensure seamless integration with themes and plugins.",
      "Enhanced the learning experience by adding interactive features for both students and instructors.",
    ],
    img: wp_lms,
    tech: ["JavaScript", "Wordpress", "PHP"],
    source: null,
    demo: null,
  },
  {
    id: 5,
    name: "HitScore",
    description: [
      "Developed a real-time web application to display live cricket scores and related information.",
      "Built a dynamic and responsive UI using React.js and Ant Design, ensuring a smooth user experience across devices.",
      "Integrated Cricbuzz API to fetch and display real-time cricket scores, match schedules, and team statistics, making it a go-to platform for cricket enthusiasts.",
    ],
    img: hitscore,
    tech: ["React.js", "Ant Design"],
    source: "https://github.com/tilalapriyank/hit_score",
    demo: "https://hit-score.vercel.app/",
  },
  {
    id: 6,
    name: "LMS",
    description: [
      "Developed a full-stack Learning Management System (LMS) with secure user authentication and role-based access control.",
      "Developed features to manage assignments, update course content, and efficiently handle data, providing a seamless and secure user experience.",
      "Integrated a MySQL database for secure and organized data management.",
    ],
    img: lms,
    tech: ["React.js", "Node.js", "Express.js", "Material UI"],
    source: "https://github.com/tilalapriyank/LMS",
    demo: null,
  },
  {
    id: 7,
    name: "Portfolio",
    description: [
      "Designed and developed a professional portfolio website using React.js and Tailwind CSS to showcase web development skills and projects.",
      "Created a responsive, modern layout that adapts seamlessly across different devices, enhancing the user experience.",
      "Incorporated smooth animations and dynamic features to highlight key projects and demonstrate technical expertise.",
    ],
    img: portfolio,
    tech: ["React.js", "Tailwind CSS"],
    source: "https://github.com/tilalapriyank/portfolio",
    demo: "https://portfolio-dqehyisll-tilalapriyanks-projects.vercel.app/",
  },
  {
    id: 8,
    name: "Group Expense",
    description: [
      "A web app for tracking and splitting group expenses efficiently.",
      "Automates cost-sharing and balances debts among users.",
      "Built with React.js, Node.js, Express.js, and MongoDB for a seamless experience.",
      "Uses Redux-Saga for real-time updates and TypeScript for reliability.",
    ],
    img: groupexpense,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux-Saga",
      "TypeScript",
    ],
    source: "https://github.com/tilalapriyank/group-expense",
    demo: "https://group-expense.vercel.app/",
  },
];
