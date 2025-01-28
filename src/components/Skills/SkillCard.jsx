import TechLogo from "../TechLogo";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react";

const SkillCard = ({skill }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="dark:bg-transparent rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg m-5 ">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div className="mx-2 px-2">
          <h3 className="text-lg lg:text-xl font-bold text-orange-400 uppercase tracking-wide  dark:text-subheader-dark">{skill.title}</h3>
          <p className=" tracking-wide dark:text-textbody-dark mt-2 pt-">{skill.experience}</p>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-5 dark:text-btgold-dark   dark:hover:bg-transparent hover:text-gray-300  hover:border-btgold hover:border rounded-full transition-all duration-300"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {/* Dropdown Content */}
      <div className={`mt-4 space-y-3 transition-all duration-300 ${
        isExpanded ? 'block' : 'hidden'
      }`}>
        <p className="text-sm text-primary-light dark:text-textbody-dark mb-0 pb-5 px-4">{skill.description}</p>
        <div className="flex flex-wrap gap-3 px-2">
          {skill.technologies.map((tech) => (
            <div 
              key={tech}
              className="flex items-center gap-2 bg-transparent px-3 py-1.5 rounded-full text-2xl  dark:text-header-dark
              "
            >
              <TechLogo name={tech}  className="hover:scale-150 dark:hover:text-gray-200 transition-all duration-300 "/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard