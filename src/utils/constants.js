import AVTl from "../assets/Projects/AVTL.png"
import Crimeo from "../assets/Projects/CrimeiO.png"
import ForumsA from "../assets/Projects/Forums.png"
import SpaceInv from "../assets/Projects/SpaceInvaders.png"
import Cisp from "../assets/Projects/Cis.png"


export const technologies = [
  { name: "Spring Boot", icon: "bx bxs-leaf" },
  { name: ".NET", icon: "bx bxl-microsoft" },
  { name: "React", icon: "bx bxl-react" },
  { name: "JavaScript", icon: "bx bxl-javascript" },
  { name: "Node.js", icon: "bx bxl-nodejs" },
  { name: "Material UI", icon: "bx bxs-component" },
  { name: "HTML5", icon: "bx bxl-html5" },
  { name: "CSS3", icon: "bx bxl-css3" },
  { name: "Git", icon: "bx bxl-git" },
  { name: "Python", icon: "bx bxl-python" },
  { name: "PostgreSQL", icon: "bx bxl-postgresql" },
  { name: "SQL Server", icon: "bx bx-data" },
  { name: "MongoDB", icon: "bx bxl-mongodb" },
  { name: "Jira", icon: "bx bx-task" },
  { name: "GitLab", icon: "bx bxl-gitlab" },
  { name: "Docker", icon: "bx bxl-docker" },
  { name: "Bootstrap", icon: "bx bxl-bootstrap" },
  { name: "Scrum", icon: "bx bx-check-shield" },
  { name: "CI/CD", icon: "bx bx-cog" },
  { name: "JWT", icon: "bx bxs-key" }, 
  { name: "OAuth2", icon: "bx bxs-lock" }, 
  { name: "Swagger", icon: "bx bxs-file" }, 
  { name: "TypeScript", icon: "bx bxl-typescript" }, 
  { name: "Oracle Cloud", icon: "bx bxs-cloud" },
  { name: "Coolify", icon: "bx bxs-server" },
  { name: "Express.js", icon: "bx bx-server" },       
  { name: "NestJS", icon: "bx bx-shape-circle" },     
]

export const projects = (t) => [
      {
        title: t("projects.crimeio.title"),
        description: t("projects.crimeio.description"),
        image: Crimeo,
        technologies: ["Python", "MongoDb", "Streamlit", "Pydeck", "Plotly"],
        link: "",
        repo: "https://github.com/Angel-ISO/Crime-io",
        previewEnabled: false,
      },
      {
        title: t("projects.avt.title"),
        description: t("projects.avt.description"),
        image: AVTl,
        technologies: ["Spring Boot", "Javafx", "Mailer", "Mysql"],
        link: "",
        repo: "https://github.com/Angel-ISO/transaction-module",
        previewEnabled: false,
      },
      {
        title: t("projects.alura.title"),
        description: t("projects.alura.description"),
        image: ForumsA,
        technologies: ["Spring Boot", "Mysql", "Swagger", "jwt", "oauth2"],
        link: "https://oracle-one-education-forums.vercel.app/",
        repo: "https://github.com/Angel-ISO/oracleOneEducation/tree/main/alura",
        previewEnabled: true,
      },
      {
        title: t("projects.spaceinvaders.title"),
        description: t("projects.spaceinvaders.description"),
        image: SpaceInv,
        technologies: ["Windows Forms", "mvvm", "C#"],
        link: "",
        repo: "https://github.com/Angel-ISO/SpaceInvaders",
        previewEnabled: false,
      },
      {
        title: t("projects.cis.title"),
        description: t("projects.cis.description"),
        image: Cisp,
        technologies: [
          "Spring Boot",
          "hibernate",
          "mysql",
          "jwt",
          "swagger",
          "netcore",
          "mongodb",
          "hexagonal architecture",
          "docker"
        ],
        link: "",
        repo: "https://github.com/Angel-ISO/CIS-CSHARP/blob/main/",
        previewEnabled: false,
      }
]