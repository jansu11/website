import TechLogo from "../TechLogo";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react";

const SkillCard = ({skill }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-transparent rounded-lg shadow-md p-10 transition-all duration-300 hover:shadow-lg m-5 ">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-secondary">{skill.title}</h3>
          <p className="text-sm text-gray-300 mt-4 pt-4">{skill.experience}</p>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-btgold   hover:bg-transparent hover:text-gray-300  hover:border-btgold hover:border rounded-full transition-all duration-300"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {/* Dropdown Content */}
      <div className={`mt-4 space-y-3 transition-all duration-300 ${
        isExpanded ? 'block' : 'hidden'
      }`}>
        <p className="text-sm text-gray-300 mb-5 pb-5">{skill.description}</p>
        <div className="flex flex-wrap gap-3">
          {skill.technologies.map((tech) => (
            <div 
              key={tech}
              className="flex items-center gap-2 bg-transparent px-3 py-1.5 rounded-full text-sm text-btgold"
            >
              <TechLogo name={tech} />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard