import { FC } from "react";
import { FaGithub } from 'react-icons/fa';

const GitHubIcon: FC<{ url: string, size: number, className?: string }> = ({ url, size, className }) => {
  return <a href={url} className={`flex flex-col justify-center ${className ?? ''}`}>
    <FaGithub className="fill-gray-500 hover:fill-black transition-colors duration-300" size={size} />
  </a>;
}

export default GitHubIcon;
