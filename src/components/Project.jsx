import { motion } from 'framer-motion';
import { useEffect,useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Project/Card';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(()=> {
    fetch("/projects.json")
    .then(response => response.json())
    .then((data) => setProjects(data));

  }, [])

      {/* Projects Preview Section */}

      return (
          <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} project={project}/>
            ))}
          </div>

      )

}

export default Projects