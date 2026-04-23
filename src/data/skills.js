import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiExpress, SiMysql, SiMongodb, SiVercel, SiNetlify, SiNgrok, SiRailway, SiGooglecloud } from 'react-icons/si';
import { MdDataUsage } from 'react-icons/md';

export const skills = {
  languages: [
    { name: 'Java', level: 85, icon: FaJava, color: '#f89820' },
    { name: 'C++', level: 80, icon: SiCplusplus, color: '#00599C' },
    { name: 'Python', level: 75, icon: FaPython, color: '#3776AB' }
  ],
  frontend: [
    { name: 'React', level: 85, icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', level: 90, icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML', level: 95, icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', level: 85, icon: FaCss3Alt, color: '#1572B6' }
  ],
  backend: [
    { name: 'Node.js', level: 80, icon: FaNodeJs, color: '#339933' },
    { name: 'Express', level: 80, icon: SiExpress, color: '#aaaaaa' }
  ],
  database: [
    { name: 'MySQL', level: 85, icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', level: 75, icon: SiMongodb, color: '#47A248' }
  ],
  coreSubjects: [
    { name: 'DSA', color: '#ffb84d' },
    { name: 'OOPs', color: '#ff6666' },
    { name: 'DBMS', color: '#4db8ff' },
    { name: 'OS', color: '#a366ff' },
    { name: 'Cloud', icon: FaAws, color: '#FF9900' },
    { name: 'Analytics', icon: MdDataUsage, color: '#00E676' }
  ],
  tools: [
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#aaaaaa' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Vercel', icon: SiVercel, color: '#aaaaaa' },
    { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    { name: 'Ngrok', icon: SiNgrok, color: '#1F1E37' },
    { name: 'Railway', icon: SiRailway, color: '#0B0D0E' }
  ]
};
