import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children, className = "", id = "", bgColor = "bg-transparent" }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-h-screen  py-20 ${bgColor} ${className} `}
    >
      {children}
    </motion.section>
  );
};

export default Section;