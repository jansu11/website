import SkillsSection from '../components/SkillsSection'
import {motion} from 'framer-motion'
const Skills = () => {
  return (
    <motion.div 
              className='mt-36'
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay:  0.1 }}
    >

        <SkillsSection/>

    </motion.div>
  )
  
  };
  
  export default Skills;
  