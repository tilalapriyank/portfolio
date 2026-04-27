import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa6";
import * as Md from "react-icons/md";
import * as Ri from "react-icons/ri";

const pickIcon = (...candidates) =>
  candidates
    .map((name) => Si[name] || Fa[name] || Md[name] || Ri[name])
    .find(Boolean) || Fa.FaCode;

export const MySkills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: pickIcon("SiJavascript") },
      { name: "TypeScript", icon: pickIcon("SiTypescript") },
      { name: "PHP", icon: pickIcon("SiPhp") },
      { name: "HTML", icon: pickIcon("SiHtml5") },
      { name: "CSS", icon: pickIcon("SiCss3") },
    ],
    index: 1,
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js", icon: pickIcon("SiNextdotjs") },
      { name: "React.js", icon: pickIcon("SiReact") },
      { name: "Tailwind CSS", icon: pickIcon("SiTailwindcss") },
      { name: "Bootstrap", icon: pickIcon("SiBootstrap") },
      { name: "Material UI", icon: pickIcon("SiMui") },
      { name: "Ant Design", icon: pickIcon("SiAntdesign") },
      { name: "Redux", icon: pickIcon("SiRedux") },
      { name: "Vite", icon: pickIcon("SiVite") },
    ],
    index: 2,
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: pickIcon("SiNodedotjs") },
      { name: "Express.js", icon: pickIcon("SiExpress") },
      { name: "REST APIs", icon: pickIcon("MdApi", "FaCode") },
      { name: "JWT Authentication", icon: pickIcon("SiJsonwebtokens", "FaKey") },
      { name: "WordPress", icon: pickIcon("SiWordpress") },
    ],
    index: 3,
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: pickIcon("SiPostgresql") },
      { name: "MySQL", icon: pickIcon("SiMysql") },
      { name: "MongoDB", icon: pickIcon("SiMongodb") },
    ],
    index: 4,
  },
  {
    title: "Platforms",
    skills: [
      { name: "Stripe", icon: pickIcon("SiStripe") },
      { name: "Zoho CRM Suite", icon: pickIcon("SiZoho", "SiSalesforce", "SiHubspot") },
      { name: "WooCommerce", icon: pickIcon("SiWoocommerce") },
      { name: "WordPress", icon: pickIcon("SiWordpress") },
    ],
    index: 5,
  },
  {
    title: "Tools",
    skills: [
      { name: "Docker", icon: pickIcon("SiDocker") },
      { name: "Git", icon: pickIcon("SiGit") },
      { name: "GitHub", icon: pickIcon("SiGithub") },
      { name: "Visual Studio Code", icon: pickIcon("SiVisualstudiocode") },
      { name: "Postman", icon: pickIcon("SiPostman") },
      { name: "Vercel", icon: pickIcon("SiVercel") },
      { name: "Render", icon: pickIcon("SiRender", "FaCloud") },
      { name: "FileZilla", icon: pickIcon("SiFilezilla") },
    ],
    index: 6,
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: pickIcon("SiOpenai", "FaRobot") },
      { name: "Claude", icon: pickIcon("SiClaude", "SiAnthropic", "FaBrain") },
      { name: "Cursor", icon: pickIcon("SiCursor", "SiVisualstudiocode") },
      { name: "Perplexity", icon: pickIcon("SiPerplexity", "FaWandMagicSparkles") },
      { name: "Google Stitch", icon: pickIcon("SiGoogle", "SiGooglecloud") },
      { name: "Antigravity", icon: pickIcon("RiSparkling2Line", "FaRocket") },
    ],
    index: 7,
  },
];
