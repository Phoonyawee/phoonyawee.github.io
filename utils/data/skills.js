export const skillsImage = (skill) => {
  const skillsData = {
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  };
  return skillsData[skill] || null;
};

export const skills = [
  { id: 1, name: "Java" },
  { id: 2, name: "Python" },
  { id: 3, name: "Next.js" },
  { id: 4, name: "MySQL" },
  { id: 5, name: "JavaScript" },
  { id: 6, name: "C++" },
  { id: 7, name: "SQL Server" },
  { id: 8, name: "VS Code" },
  { id: 9, name: "Linux" },
];
