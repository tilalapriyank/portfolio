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
    name: "Group Expense",
    description: [
      "Full-stack expense tracking app supporting unlimited users and groups with real-time synchronization using Redux-Saga for complex state management.",
      "Implements automatic debt calculation algorithms that minimize transactions by finding optimal settlement paths, reducing manual reconciliation by 90%.",
      "Built with TypeScript for type safety and MongoDB for flexible schema, enabling dynamic expense categories and custom split methods (equal, percentage, custom amounts).",
      "Features include expense history, user profiles, group analytics, and email notifications - chosen React for component reusability and Node.js for scalable API architecture.",
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
  {
    id: 2,
    name: "LMS",
    description: [
      "Full-stack Learning Management System with role-based access control (Admin, Instructor, Student) supporting course creation, assignment management, and progress tracking.",
      "Implemented secure authentication with JWT tokens and password hashing, ensuring data protection for educational content and student records.",
      "Built RESTful APIs with Express.js handling 15+ endpoints for courses, assignments, submissions, and user management - MySQL chosen for relational data integrity.",
      "React frontend with Material UI provides responsive design across devices, with real-time updates for assignment submissions and grade notifications.",
    ],
    img: lms,
    tech: ["React.js", "Node.js", "Express.js", "Material UI", "MySQL"],
    source: "https://github.com/tilalapriyank/LMS",
    demo: null,
  },
  {
    id: 3,
    name: "HitScore",
    description: [
      "Real-time cricket score tracker fetching live match data from Cricbuzz API with automatic refresh every 30 seconds, displaying scores, schedules, and team statistics.",
      "Built with React.js for component-based architecture and Ant Design for consistent UI components, ensuring fast load times (<2s) and smooth user experience.",
      "Features include match filtering, team comparisons, and match history - React chosen for efficient re-rendering of dynamic score updates without full page reloads.",
      "Responsive design supports mobile and desktop viewing, with optimized API calls to reduce bandwidth usage and improve performance on slower connections.",
    ],
    img: hitscore,
    tech: ["React.js", "Ant Design"],
    source: "https://github.com/tilalapriyank/hit_score",
    demo: "https://hit-score.vercel.app/",
  },
  {
    id: 4,
    name: "WPTUTOR LMS",
    description: [
      "WordPress plugin for online education supporting course creation, quiz management, and student progress tracking with seamless WordPress integration.",
      "Implemented custom post types for courses and lessons, with meta fields for pricing, duration, and enrollment management - PHP chosen for WordPress compatibility.",
      "Features include quiz scoring, certificate generation, and instructor dashboards - designed to work with any WordPress theme without conflicts.",
      "Scalable architecture supports unlimited courses and students, with database optimization for fast query performance even with large datasets.",
    ],
    img: wp_lms,
    tech: ["JavaScript", "Wordpress", "PHP"],
    source: null,
    demo: null,
  },
  {
    id: 5,
    name: "WP Realty Plugin",
    description: [
      "WordPress plugin for real estate property management with advanced search filters (price, location, property type, amenities) and inquiry handling system.",
      "Custom admin panel for property listings with image galleries, virtual tours, and property comparison features - Bootstrap chosen for responsive frontend components.",
      "Integrated inquiry form with email notifications to property owners, reducing response time and improving lead conversion rates.",
      "PHP backend handles property data management, search queries, and user interactions - designed for scalability to support thousands of property listings.",
    ],
    img: realty,
    tech: ["HTML", "CSS", "JavaScript", "Wordpress", "PHP", "Bootstrap"],
    source: null,
    demo: null,
  },
  {
    id: 6,
    name: "Weather App",
    description: [
      "Full-stack weather application with real-time data from OpenWeatherMap API, supporting location-based forecasts and 5-day weather predictions.",
      "Node.js backend with Express.js handles API requests and data caching to reduce external API calls by 40%, improving response times and reducing costs.",
      "Features include temperature conversion, weather icons, and location search - chosen Node.js for efficient async operations and Express for RESTful routing.",
      "Responsive design works across all devices with error handling for invalid locations and network failures, ensuring reliable user experience.",
    ],
    img: weather,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    source: "https://github.com/tilalapriyank/weather-app",
    demo: "https://weather-app-production-2e01.up.railway.app/",
  },
  {
    id: 7,
    name: "Portfolio",
    description: [
      "Modern portfolio website built with React.js and Tailwind CSS, featuring glassmorphic design, smooth animations, and responsive layout across all devices.",
      "Implemented scroll-triggered animations using Framer Motion for engaging user experience, with optimized performance achieving 90+ Lighthouse score.",
      "Features include project showcase, skills section, contact form integration, and SEO optimization - React chosen for component reusability and Tailwind for rapid styling.",
      "Deployed on Vercel with automatic CI/CD, ensuring fast load times and 99.9% uptime for potential employers and clients to view work.",
    ],
    img: portfolio,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    source: "https://github.com/tilalapriyank/portfolio",
    demo: "https://portfolio-dqehyisll-tilalapriyanks-projects.vercel.app/",
  },
  {
    id: 8,
    name: "Tic-Tac-Toe Game",
    description: [
      "Classic Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS - perfect for learning DOM manipulation and game logic implementation.",
      "Features include turn-based gameplay, win condition detection, draw detection, and game reset functionality - pure JavaScript chosen for simplicity and performance.",
      "Clean, intuitive UI with visual feedback for player moves and game outcomes, making it accessible for all users.",
      "Lightweight implementation (<50KB total) ensures fast loading and smooth gameplay without external dependencies.",
    ],
    img: ttt,
    tech: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/tilalapriyank/Tic-Tac-Toe",
    demo: "https://tic-tac-toe-rose-zeta.vercel.app",
  },
];
