import { div } from 'framer-motion/client'
import { FaPython, FaReact, FaNodeJs, FaGithub, FaDatabase , FaDocker } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,SiApachespark,SiApachecassandra , SiApachekafka} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

// Icon mapping object
const techIcons = {
  'Python': FaPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': FaReact,
  'Next.js': TbBrandNextjs,
  'Node.js': FaNodeJs,
  'TailwindCSS': SiTailwindcss,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'GitHub': FaGithub,
  'Database': FaDatabase,
  'Docker' : FaDocker,
  'Spark' : SiApachespark,
  'Cassandra' : SiApachecassandra,
  'Kafka' : SiApachekafka

}

// Tech logo component
const TechLogo = ({ name, className = "w-6 h-6" }) => {
  const IconComponent = techIcons[name]
  if (!IconComponent) return null
  
  return (
       <div className="relative group inline-block">
      <IconComponent className={className} aria-label={name} />
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded text-xs whitespace-nowrap shadow-lg">
          {name}
        </div>
      </div>
    </div>
  )
}


export default TechLogo