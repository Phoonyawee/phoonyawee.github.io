import csharp from "../app/assets/svg/skills/csharp.svg";
import git from "../app/assets/svg/skills/git.svg";
import java from "../app/assets/svg/skills/java.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import microsoftOffice from "../app/assets/svg/skills/microsoftoffice.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import nextjs from "../app/assets/svg/skills/nextJS.svg";
import python from "../app/assets/svg/skills/python.svg";

const images = {
  "c#": csharp,
  git,
  java,
  javascript,
  "microsoft office": microsoftOffice,
  mysql,
  "next.js": nextjs,
  python,
};

export const skillsImage = (skill) => images[skill.toLowerCase()];
