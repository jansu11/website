
import { useState,useEffect } from "react";
import SkillCard from "./Skills/SkillCard";

const SkillsSection = () => {


  const [skills, setSkills] = useState([]);

  useEffect(()=> {
    fetch("/skills.json")
    .then(response => response.json())
    .then((data) => setSkills(data));

  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsSection;