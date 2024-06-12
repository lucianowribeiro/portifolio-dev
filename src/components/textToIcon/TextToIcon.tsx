import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaLink,
  FaNpm,
  FaStar,
  FaDev,
  FaCodepen,
  FaMoon,
  FaSun
 } from 'react-icons/fa'
import { MdWork } from "react-icons/md"
 

interface TextToIconProps {
  icon: string;
  className?: string;
}

export const iconMap: Record<string, React.ReactNode> = {
  Star: <FaStar />,
  LinkedIn: <FaLinkedin />,
  Home: <FaHome />,
  GitHub: <FaGithub />,
  NPM: <FaNpm />,
  DevTo: <FaDev />,
  CodePen: <FaCodepen />,
  Moon: <FaMoon />,
  Sun: <FaSun />,
  Link: <FaLink />,
  CV: <MdWork />
} as const

const TextToIcon: React.FC<TextToIconProps> = ({ icon, className = '' }) => {
  return (
    <span className={className}>{iconMap[icon]}</span>
  )
}

export default TextToIcon
